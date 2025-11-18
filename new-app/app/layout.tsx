import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "SUITS - Webentwicklung & Consulting",
  description: "Webentwicklung, Consulting, SEO und mehr - maßgeschneidert für Ihren Erfolg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "Inter, sans-serif" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 pt-24 sm:pt-32 pb-12 max-w-7xl">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
