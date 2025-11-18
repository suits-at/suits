"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-4">Fehler</h1>
      <h2 className="text-3xl font-semibold mb-6">Etwas ist schiefgelaufen</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
      </p>
      <Button variant="default" size="lg" onClick={() => reset()}>
        Erneut versuchen
      </Button>
    </div>
  )
}
