import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { references } from "@/data/references"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-between items-center text-center -mt-24 sm:-mt-32">
        <div className="flex-1 flex flex-col justify-center items-center pt-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-3xl mb-4 px-4"
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
          <h2 className="text-lg sm:text-2xl md:text-4xl font-normal mt-4">
            Sebastian Ulbel IT-Solutions
          </h2>
        </div>

        <a
          href="#referenzen"
          className="mb-16 animate-bounce cursor-pointer text-primary"
          title="Zu den Referenzen"
        >
          <ChevronDown className="h-12 w-12" />
        </a>
      </section>

      {/* References Section */}
      <section id="referenzen" className="scroll-mt-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 uppercase">//Referenzen</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {references.map((reference) => (
            <Link
              key={reference.id}
              href={`/references/${reference.id}`}
              className="flex flex-col items-center text-center group"
            >
              <h2 className="text-xl md:text-2xl mb-4 px-4 sm:px-10 min-h-[3rem] flex items-center justify-center group-hover:text-primary transition-colors">
                {reference.title}
              </h2>
              <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg">
                <Image
                  src={reference.thumbnail}
                  alt={reference.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
