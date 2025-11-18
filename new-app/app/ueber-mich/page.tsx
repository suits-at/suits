import Image from "next/image"

export default function UeberMichPage() {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 uppercase">//Über mich</h1>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
        <figure className="w-full sm:w-auto flex justify-center">
          <div className="relative w-full max-w-sm aspect-square">
            <Image
              src="/images/uploads/sebastian-ulbel.jpg"
              alt="Sebastian Ulbel"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </figure>
        <div className="w-full sm:flex-1 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">DI Sebastian Ulbel</h2>
          <ul className="space-y-3 text-lg mb-8">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>leidenschaftlicher Web Developer</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>begeisterter Sportler</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>genussvoller Musikliebhaber</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>innovationsliebender Gadgetfan</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>optimistischer Klimavolksbegehren&shy;unterstützer</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>überzeugter Bitcoinbesitzer</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>hoffnungsvoller Kickstarterkampagnen&shy;unterstützer</span>
            </li>
          </ul>
          <p className="text-lg text-muted-foreground">
            Falls Sie noch mehr über mich wissen wollen, an einer Zusammenarbeit interessiert sind
            oder ich Ihnen behilflich sein kann, freue ich mich, wenn Sie mit mir unter{" "}
            <a href="mailto:office@suits.at" className="text-primary hover:underline">
              office@suits.at
            </a>{" "}
            Kontakt aufnehmen.
          </p>
        </div>
      </div>
    </section>
  )
}
