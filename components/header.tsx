"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/#referenzen", label: "Referenzen" },
    { href: "/ueber-mich", label: "Über mich" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  const mobileLinks = [...navLinks, { href: "/impressum", label: "Impressum" }]

  return (
    <>
      <header className="w-full fixed z-50 top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex justify-between items-center container mx-auto px-4 py-2 sm:py-4 max-w-7xl">
          <Link href="/" className="p-0" title="Startseite">
            <svg
              className="inline h-12 w-auto sm:h-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 767.7 295.8"
            >
              <title>SUITS Logo</title>
              <polygon
                className="fill-current"
                points="425.3 47.4 409.3 47.4 393.4 47.4 381.4 265.6 409.3 295.8 437.3 265.6"
              />
              <path
                className="fill-current"
                d="M419.4 0.6c-2.4-0.8-17.7-0.8-20.1 0 -3.7 1.1-8.3 5-9.4 8.8 -1.4 5.1 3.4 20.2 3.4 20.2h16 16c0 0 4.8-15.1 3.4-20.2C427.7 5.5 423.1 1.7 419.4 0.6z"
              />
              <path
                className="fill-current"
                d="M123.9 100.7c-9-12.2-20.5-19.9-36.3-19.9 -15.1 0-29.5 11.6-29.5 27.3 0 40.8 95.9 23.7 95.9 104.9 0 48.5-30.2 82.8-79.6 82.8 -33.4 0-57.8-19.3-74.4-47.2l30.5-29.8c6.4 18.6 23.4 35.3 43.6 35.3 19.3 0 31.1-16.4 31.1-35 0-25-23.1-32.1-42-39.5 -31.1-12.8-53.9-28.6-53.9-66.1C9.3 73.4 39.1 41 79.9 41c21.5 0 51.3 10.6 66.1 27L123.9 100.7z"
              />
              <path
                className="fill-current"
                d="M176.4 47.4h47.2v135.4c0 29.8 2.6 71.9 42.7 71.9s42.7-42 42.7-71.9V47.4h47.2v144.7c0 59-25 103.6-89.8 103.6s-89.8-44.6-89.8-103.6V47.4z"
              />
              <path
                className="fill-current"
                d="M553 289.4h-47.2V88.5h-48.8V47.4h144.7v41.1H553V289.4z"
              />
              <path
                className="fill-current"
                d="M737.6 100.7c-9-12.2-20.5-19.9-36.3-19.9 -15.1 0-29.5 11.6-29.5 27.3 0 40.8 95.9 23.7 95.9 104.9 0 48.5-30.2 82.8-79.6 82.8 -33.4 0-57.8-19.3-74.4-47.2l30.5-29.8c6.4 18.6 23.4 35.3 43.6 35.3 19.3 0 31.1-16.4 31.1-35 0-25-23.1-32.1-42-39.5 -31.1-12.8-53.9-28.6-53.9-66.1 0-40.1 29.8-72.5 70.6-72.5 21.5 0 51.3 10.6 66.1 27L737.6 100.7z"
              />
            </svg>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden lg:flex gap-6 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-150 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <ThemeToggle />

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur pt-20"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="list-none text-center space-y-8">
              {mobileLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-2xl hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
