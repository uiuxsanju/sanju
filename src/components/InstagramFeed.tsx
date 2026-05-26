import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Camera } from "lucide-react"

const feedItems = [
  { src: "/gallery-1.webp", alt: "Family gold frame display" },
  { src: "/product-baby-frame.webp", alt: "Baby handprint gold frame" },
  { src: "/gallery-3.webp", alt: "Artisan gold leafing process" },
  { src: "/product-couple-frame.webp", alt: "Couples frame keepsake" },
  { src: "/gallery-4.webp", alt: "Luxury gift packaging" },
  { src: "/signature-2.webp", alt: "Family legacy art wall" },
]

export default function CameraFeed() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-[#FAF7F2]"
      aria-labelledby="instagram-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-10 sm:mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Social</span>
            </div>
            <h2
              id="instagram-title"
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1A1A1A] tracking-tight"
            >
              Follow Our Journey
              <span className="block text-gradient-gold">@NowAndForeverIndia</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D4AF37] text-[#1A1A1A] font-bold text-sm tracking-[0.1em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] shrink-0"
            aria-label="Follow us on Instagram"
          >
            <Camera size={16} aria-hidden="true" />
            Follow Us
          </a>
        </motion.div>

        {/* Mobile: horizontal scroll; Desktop: 6-col grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-4">
          {feedItems.map((item, i) => (
            <motion.div
              key={`desktop-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ aspectRatio: "1/1" }}
              aria-label={item.alt}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: "rgba(212,175,55,0.4)" }} aria-hidden="true">
                <Camera size={28} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex lg:hidden overflow-x-auto gap-3 pb-4 scroll-smooth snap-x snap-mandatory -mx-4 px-4">
          {feedItems.map((item, i) => (
            <motion.div
              key={`mobile-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shrink-0 w-[60vw] sm:w-[38vw] snap-start cursor-pointer"
              style={{ aspectRatio: "1/1" }}
              aria-label={item.alt}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              />
              {/* Camera Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(212,175,55,0.4)" }}
                aria-hidden="true"
              >
                <Camera size={28} className="text-white" />
              </div>

              {/* Indicator dots for mobile */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 lg:hidden" aria-hidden="true">
                <div className="w-1 h-1 rounded-full bg-white/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
