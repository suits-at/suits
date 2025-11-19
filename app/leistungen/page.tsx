import {
  Code,
  ClipboardCheck,
  SlidersHorizontal,
  Timer,
  RotateCw,
  Database,
  Wrench,
  ShieldCheck,
  BarChart3,
  type LucideIcon,
} from "lucide-react"
import { services } from "@/data/services"

// Map Font Awesome icon names to Lucide React components
const iconMap: Record<string, LucideIcon> = {
  code: Code,
  "clipboard-check": ClipboardCheck,
  "sliders-h": SlidersHorizontal,
  stopwatch: Timer,
  repeat: RotateCw,
  database: Database,
  tools: Wrench,
  "shield-check": ShieldCheck,
  analytics: BarChart3,
}

export default function LeistungenPage() {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 uppercase">//Leistungen</h1>
      <div className="flex flex-wrap justify-center">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || Code
          return (
            <div key={service.id} className="w-full sm:w-1/2 lg:w-1/3 px-8 py-8 text-center group">
              <div className="flex flex-col items-center">
                <IconComponent
                  className="h-20 w-20 mb-6 text-foreground/70 group-hover:text-primary transition-colors"
                  strokeWidth={1.5}
                />
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground">{service.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
