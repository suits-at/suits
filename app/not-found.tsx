import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Seite nicht gefunden</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
      </p>
      <Link href="/">
        <Button variant="default" size="lg">
          Zurück zur Startseite
        </Button>
      </Link>
    </div>
  )
}
