import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-wrap justify-center items-center text-center gap-8 sm:gap-0">
          <div className="w-full sm:w-1/4">
            <a href="mailto:office@suits.at" className="hover:text-primary transition-colors">
              office@suits.at
            </a>
          </div>

          <div className="w-full sm:flex-1 flex justify-center gap-6">
            <a
              href="https://github.com/suits-at"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/suits-at/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/suits_at"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Twitter className="h-8 w-8" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <div className="w-full sm:w-1/4">
            <Link href="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
