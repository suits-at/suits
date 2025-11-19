import type { Metadata } from "next"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://suits.at"),
  title: {
    default: "SUITS - Webentwicklung & Consulting",
    template: "%s | SUITS",
  },
  description:
    "Professionelle Webentwicklung, Consulting, SEO und Performance-Optimierung. Maßgeschneiderte IT-Lösungen aus Wien von DI Sebastian Ulbel.",
  keywords: [
    "Webentwicklung",
    "Web Development",
    "Consulting",
    "SEO",
    "Performance",
    "React",
    "Next.js",
    "Wien",
    "Sebastian Ulbel",
  ],
  authors: [{ name: "DI Sebastian Ulbel", url: "https://suits.at" }],
  creator: "DI Sebastian Ulbel",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://suits.at",
    siteName: "SUITS",
    title: "SUITS - Webentwicklung & Consulting",
    description:
      "Professionelle Webentwicklung, Consulting, SEO und Performance-Optimierung. Maßgeschneiderte IT-Lösungen aus Wien.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@suits_at",
    creator: "@suits_at",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main
              id="main-content"
              className="flex-1 container mx-auto px-4 pt-24 sm:pt-32 pb-12 max-w-7xl"
            >
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
