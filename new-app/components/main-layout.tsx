import { Header } from "./header"
import { Footer } from "./footer"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24 sm:pt-32 pb-12 max-w-7xl">
        {children}
      </main>
      <Footer />
    </div>
  )
}
