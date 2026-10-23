#!/usr/bin/env node
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';
import sharp from 'sharp';
import { chromium } from 'playwright';
import { API } from '@typescript/native/unstable/sync';
import * as ts from '@typescript/native/unstable/ast';

function arg(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function triggerLazyLoadedContent(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(window.innerHeight * 0.8, 400);
    const maxScroll = () =>
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      ) - window.innerHeight;

    for (let position = 0; position < maxScroll(); position += step) {
      window.scrollTo(0, position);
      await delay(250);
    }

    window.scrollTo(0, maxScroll());
    await delay(500);
    window.scrollTo(0, 0);
    await delay(500);
  });

  await page
    .waitForLoadState('networkidle', { timeout: 30000 })
    .catch(() => {});
  await page.evaluate(async () => {
    await Promise.all(
      [...document.images]
        .filter((image) => !image.complete)
        .map((image) =>
          image.decode ? image.decode().catch(() => {}) : Promise.resolve(),
        ),
    );
  });
}

const url = arg('url');
const title = arg('title');
const date = arg('date') ?? String(new Date().getFullYear());
const slug = arg('slug') ?? (title ? slugify(title) : undefined);

if (!url || !title || !slug) {
  console.error(
    'Usage: pnpm add-project -- --url https://example.com --title "Project Title" [--date 2026] [--slug project-title]',
  );
  process.exit(1);
}

const outputDir = join(process.cwd(), 'public/images/projects');
mkdirSync(outputDir, { recursive: true });

const screenshotFile = join(outputDir, `${slug}-screenshot.webp`);
const screenshotCaptureFile = join(outputDir, `${slug}-screenshot.png`);
const thumbnailFile = join(outputDir, `${slug}-thumbnail.webp`);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
});
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await triggerLazyLoadedContent(page);
await page.screenshot({
  path: screenshotCaptureFile,
  fullPage: true,
  type: 'png',
});
await browser.close();

await sharp(screenshotCaptureFile).webp({ quality: 82 }).toFile(screenshotFile);
rmSync(screenshotCaptureFile, { force: true });

await sharp(screenshotFile)
  .resize(600, 600, { fit: 'cover', position: 'top' })
  .webp({ quality: 84 })
  .toFile(thumbnailFile);

const project = {
  slug,
  title,
  url,
  date,
  screenshot: `/images/projects/${slug}-screenshot.webp`,
  thumbnail: `/images/projects/${slug}-thumbnail.webp`,
};

const dataPath = join(process.cwd(), 'src/data/projects.ts');
const data = readFileSync(dataPath, 'utf8');

if (
  data.includes(`slug: '${slug}'`) ||
  data.includes(`slug: "${slug}"`) ||
  data.includes(`\"slug\": \"${slug}\"`)
) {
  console.error(`Project slug already exists: ${slug}`);
  process.exit(1);
}

function findProjectsInsertion() {
  let result;
  function unwrap(expression) {
    return ts.isSatisfiesExpression(expression) ||
      ts.isAsExpression(expression) ||
      ts.isParenthesizedExpression(expression)
      ? unwrap(expression.expression)
      : expression;
  }
  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === 'projects' &&
      node.initializer
    ) {
      const initializer = unwrap(node.initializer);
      if (ts.isArrayLiteralExpression(initializer)) {
        result = initializer.getStart() + 1;
      }
    }
    node.forEachChild(visit);
  }
  // TypeScript 7's native parser is exposed through its experimental snapshot API.
  const api = new API({ cwd: process.cwd() });
  try {
    const snapshot = api.updateSnapshot({ openFiles: [dataPath] });
    try {
      const program = snapshot.getDefaultProjectForFile(dataPath)?.program;
      const source = program?.getSourceFile(dataPath);
      if (!source || program.getSyntacticDiagnostics(dataPath).length) {
        throw new Error('Could not parse src/data/projects.ts');
      }
      visit(source);
      return result;
    } finally {
      snapshot.dispose();
    }
  } finally {
    api.close();
  }
}

const insertAt = findProjectsInsertion();
if (insertAt === undefined) {
  console.error('Could not find projects array in src/data/projects.ts');
  process.exit(1);
}

if (!existsSync(screenshotFile) || !existsSync(thumbnailFile)) {
  console.error('Image generation failed.');
  process.exit(1);
}

const insert = `${JSON.stringify(project, null, 2)},`;
writeFileSync(
  dataPath,
  `${data.slice(0, insertAt)}\n  ${insert.replaceAll('\n', '\n  ')}${data.slice(insertAt)}`,
);

console.log(`Added ${title}`);
console.log(`Screenshot: ${project.screenshot}`);
console.log(`Thumbnail: ${project.thumbnail}`);
