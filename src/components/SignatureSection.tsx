import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const sections = [
  {
    image: "/signature-1.webp",
    tag: "Signature Collection",
    title: "18 Karat Gold Coated Castings",
    description:
      "Our castings are prepared using food-safe, non-toxic materials and then carefully gilded with genuine 18 karat gold. The result is a sculptural masterpiece that captures every ridge and curve with breathtaking detail.",
    highlight: "Each casting takes up to 72 hours to complete.",
    cta: "Explore Castings",
    imageLeft: true,
  },
  {
    image: "/gallery-2.webp",
    tag: "Frame Artistry",
    title: "Metallic Imprint Frames",
    description:
      "Our signature metallic imprint frames preserve the exact texture of your loved one's hands, feet, or paws in a stunning gold-on-ivory relief. Mounted in museum-quality shadow box frames, they become the centrepiece of any room.",
    highlight: "Available in 12 elegant frame styles.",
    cta: "Browse Frames",
    imageLeft: false,
  },
  {
    image: "/signature-2.webp",
    tag: "Legacy Art",
    title: "Family Legacy Art",
    description:
      "Multi-generational handprint art — grandparents, parents, and children — immortalised together in a single gold-coated composition. A living heirloom that grows more precious with every passing year.",
    highlight: "Commissioned pieces take 2–3 weeks.",
    cta: "Commission Yours",
    imageLeft: true,
  },
]

export default function SignatureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="workshop"
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 bg-[#FAF7F2]"
      aria-labelledby="signature-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Our Craft</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2
            id="signature-title"
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-[#1A1A1A] tracking-tight"
          >
            Signature
            <span className="block text-gradient-gold">Creations</span>
          </h2>
        </motion.div>

        {/* Alternating Sections */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                section.imageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]"
                  style={{
                    boxShadow: "0 24px 60px rgba(26,26,26,0.1), 0 0 0 1px rgba(212,175,55,0.15)",
                  }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,175,55,0.08), transparent)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <span className="inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium mb-4 border border-[#D4AF37]/30 rounded-full px-4 py-1">
                  {section.tag}
                </span>

                <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1A1A1A] tracking-tight leading-tight mb-5">
                  {section.title}
                </h3>

                <div className="w-12 h-0.5 gold-shimmer-bg mb-6" aria-hidden="true" />

                <p className="text-[#1A1A1A]/65 text-sm sm:text-base leading-relaxed font-light mb-6 max-w-lg">
                  {section.description}
                </p>

                <div
                  className="glass-card rounded-2xl px-5 py-3 mb-8"
                  style={{ borderLeft: "3px solid #D4AF37" }}
                >
                  <p className="text-[#1A1A1A]/80 text-sm font-medium italic">{section.highlight}</p>
                </div>

                <a
                  href="#products"
                  className="inline-flex items-center gap-2 group/btn"
                  aria-label={section.cta}
                >
                  <span className="text-[#1A1A1A] font-bold tracking-[0.15em] uppercase text-sm border-b-2 border-[#D4AF37] pb-0.5 group-hover/btn:text-[#D4AF37] transition-colors">
                    {section.cta}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
