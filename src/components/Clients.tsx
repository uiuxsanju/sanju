import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const clients = [
  { name: "Times of India", logo: "/press-toi.webp" },
  { name: "NDTV", logo: "/press-ndtv.webp" },
  { name: "Economic Times", logo: "/press-et.webp" },
  { name: "Vogue India", logo: "/press-vogue.webp" },
  { name: "Forbes India", logo: "/press-forbes.webp" },
  { name: "Elle India", logo: "/press-elle.webp" },
  { name: "Hindustan Times", logo: "/press-ht.webp" },
  { name: "Femina", logo: "/press-femina.webp" },
]

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16 bg-[#F8F5EF] border-t border-b border-[#D4AF37]/10"
      aria-label="As featured in"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-[#1A1A1A]/40 text-xs tracking-[0.4em] uppercase mb-10 font-medium"
        >
          As Featured In
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {clients.map(({ name, logo }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-center justify-center h-16 sm:h-18 rounded-2xl border border-[#D4AF37]/15 bg-white/70 hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-md hover:shadow-[#D4AF37]/8 transition-all duration-300 cursor-default group px-4 py-3"
              aria-label={name}
            >
              <img
                src={logo}
                alt={name}
                loading="lazy"
                className="max-h-8 w-auto object-contain opacity-35 grayscale group-hover:opacity-75 group-hover:grayscale-0 transition-all duration-400"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
