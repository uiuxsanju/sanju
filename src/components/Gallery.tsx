import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ZoomIn } from "lucide-react"

const galleryImages = [
  { src: "/gallery-1.webp", alt: "Luxury family gold frame display in premium living room" },
  { src: "/gallery-2.webp", alt: "Metallic imprint frame gallery wall with gold borders" },
  { src: "/gallery-3.webp", alt: "Artisan applying 24 karat gold leaf to casting" },
  { src: "/gallery-4.webp", alt: "Premium luxury gift box with gold ribbon packaging" },
  { src: "/signature-1.webp", alt: "18 karat gold coated hand casting sculpture" },
  { src: "/signature-2.webp", alt: "Family legacy handprint frames multi-generation display" },
]


export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 bg-[#FAF7F2]"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Our Work</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2
            id="gallery-title"
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-[#1A1A1A] tracking-tight"
          >
            A Glimpse Into
            <span className="block text-gradient-gold">Timeless Moments</span>
          </h2>
        </motion.div>

        {/* Masonry Gallery — desktop uses CSS columns, mobile stacks */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl mb-4 sm:mb-5 break-inside-avoid cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              {/* Gold Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.4), rgba(26,26,26,0.4))" }}
                aria-hidden="true"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <ZoomIn size={20} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="#gallery"
            className="inline-block px-10 py-4 rounded-full luxury-btn text-[#1A1A1A] font-bold tracking-[0.2em] uppercase text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
          >
            View Full Gallery
          </a>
        </motion.div>
      </div>
    </section>
  )
}
