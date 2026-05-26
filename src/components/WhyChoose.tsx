import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Truck, Gem, Clock, Shield, Award } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Handmade with Care",
    description: "Every piece is hand-crafted by master artisans who pour their heart into each creation, ensuring no two pieces are identical.",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "We deliver to 26+ countries worldwide with premium packaging that protects your precious keepsake during transit.",
  },
  {
    icon: Gem,
    title: "Premium Craftsmanship",
    description: "Genuine 24 Karat gold coating, food-safe casting materials, and museum-quality finishes that stand the test of time.",
  },
  {
    icon: Clock,
    title: "Lifetime Memories",
    description: "Our gold-coated frames and castings are built to last generations — an heirloom your family will treasure forever.",
  },
]

export default function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 bg-[#F8F5EF]"
      aria-labelledby="why-choose-title"
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
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Why We're Different</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2
            id="why-choose-title"
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-[#1A1A1A] tracking-tight"
          >
            Crafted for Those Who
            <span className="block text-gradient-gold">Value the Extraordinary</span>
          </h2>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl hover:shadow-[#D4AF37]/8 transition-all duration-400 cursor-default"
              style={{ border: "1px solid rgba(212,175,55,0.15)" }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))",
                  boxShadow: "0 4px 20px rgba(212,175,55,0.15)",
                }}
                aria-hidden="true"
              >
                <Icon size={28} className="text-[#D4AF37]" />
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{ boxShadow: ["0 0 0 0 rgba(212,175,55,0.3)", "0 0 0 12px rgba(212,175,55,0)", "0 0 0 0 rgba(212,175,55,0)"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  aria-hidden="true"
                />
              </motion.div>

              <h3 className="text-[#1A1A1A] font-bold text-base sm:text-lg mb-3 tracking-tight">{title}</h3>

              <div className="w-8 h-0.5 bg-[#D4AF37]/40 mb-4 group-hover:w-12 transition-all duration-300" aria-hidden="true" />

              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed font-light">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14 pt-10 border-t border-[#D4AF37]/15"
        >
          {[
            { icon: Shield, text: "100% Safe Materials" },
            { icon: Award, text: "Award Winning Brand" },
            { icon: Gem, text: "Genuine Gold Certified" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[#1A1A1A]/60 text-sm">
              <Icon size={16} className="text-[#D4AF37]" aria-hidden="true" />
              <span className="tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
