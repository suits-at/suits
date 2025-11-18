export type Service = {
  id: string
  title: string
  icon: string
  description: string
}

export const services: Service[] = [
  {
    id: "development",
    title: "Webentwicklung",
    icon: "code",
    description:
      "Die passende Website für jeden - maßgeschneidert - weil nicht nur Anzüge passen müssen.",
  },
  {
    id: "consulting",
    title: "Beratung",
    icon: "clipboard-check",
    description:
      "Sie sind nicht sicher, welche Art von Website für Sie am besten passt? Ich berate Sie gerne Schritt für Schritt.",
  },
  {
    id: "seo",
    title: "SEO",
    icon: "sliders-h",
    description:
      "Damit Ihre neue Website von Google und Co. auch gefunden wird, gilt es einiges zu berücksichtigen. Gerne stehe ich Ihnen hierbei mit Rat und Tat zur Seite.",
  },
  {
    id: "performance",
    title: "Performance",
    icon: "stopwatch",
    description:
      "Die Ladezeiten einer Website sind schon lange eine wichtiger Teil der Suchmaschinenoptimierung. Eine schnelle Website erhöht auch die Userexperience enorm.",
  },
  {
    id: "updates",
    title: "Updates",
    icon: "repeat",
    description:
      "Aus Sicherheitsgründen sollte Ihre Website stets up-to-date gehalten werden. Ich kümmere mich darum, damit Sie es nicht müssen.",
  },
  {
    id: "backups",
    title: "Backups",
    icon: "database",
    description:
      "Bei jeder (ungewollten) Änderung können Daten verloren gehen. Deswegen kümmere ich mich um regelmäßige Backups der ganzen Website.",
  },
  {
    id: "maintenance",
    title: "Wartung",
    icon: "tools",
    description:
      "Sie haben bereits eine Website, möchten diese allerdings auf den neuesten Stand der Technik bringen? Auch hierbei kann ich Ihnen helfen.",
  },
  {
    id: "security",
    title: "Security",
    icon: "shield-check",
    description: "Ihre Website wurde gehackt? Ich sorge dafür, dass das nicht wieder passiert.",
  },
  {
    id: "analytics",
    title: "Google Analytics",
    icon: "analytics",
    description:
      "Sie möchten den Erfolg Ihrer Website prüfen? Nach der datenschutzkonformen Integration von Google Analytics ist dies ein Leichtes.",
  },
]
