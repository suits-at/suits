import Link from "next/link"
import { User, MapPin, Mail } from "lucide-react"

export default function KontaktPage() {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 uppercase">//Kontakt</h1>
      <div className="mb-12 max-w-4xl">
        <p className="text-lg">
          Gerne können Sie mich unter der angeführten E-Mail-Adresse kontaktieren.
          <br />
          Ich freue ich mich sowohl über Jobangebote und interessante Projekte als auch über
          Feedback oder bloß ein kurzes &quot;Hallo&quot;!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full sm:w-1/3 text-center px-4">
          <User className="h-12 w-12 mx-auto mb-4 text-foreground/70" strokeWidth={1.5} />
          <Link href="/ueber-mich" className="text-lg hover:text-primary transition-colors">
            DI Sebastian Ulbel
          </Link>
        </div>
        <div className="w-full sm:w-1/3 text-center px-4">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-foreground/70" strokeWidth={1.5} />
          <p className="text-lg">
            Schüttaustraße 60,
            <br />
            1220 Wien
          </p>
        </div>
        <div className="w-full sm:w-1/3 text-center px-4">
          <Mail className="h-12 w-12 mx-auto mb-4 text-foreground/70" strokeWidth={1.5} />
          <a href="mailto:office@suits.at" className="text-lg hover:text-primary transition-colors">
            office@suits.at
          </a>
        </div>
      </div>

      {/* Simple map placeholder */}
      <div className="mt-12 bg-muted rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.7364937238!2d16.42032!3d48.22667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d060b5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sSch%C3%BCttaustra%C3%9Fe%2060%2C%201220%20Wien!5e0!3m2!1sde!2sat!4v1234567890123!5m2!1sde!2sat"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort auf Google Maps"
          className="w-full"
        />
      </div>
    </section>
  )
}
