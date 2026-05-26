import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Award, Globe } from "lucide-react"

const stats = [
  { icon: Users, value: 100000, suffix: "+", label: "Happy Customers" },
  { icon: Award, value: 3250, suffix: "+", label: "Workshop Participants" },
  { icon: Globe, value: 26, suffix: "+", label: "Countries Served" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {target >= 1000 ? count.toLocaleString("en-IN") : count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 bg-[#1A1A1A] relative overflow-hidden"
      aria-label="Our achievements"
    >
      {/* Subtle gold texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Our Journey</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white tracking-tight">
            Trusted by Families
            <span className="block text-gradient-gold">Across the World</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center mb-5 relative"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                <Icon size={28} className="text-[#D4AF37]" aria-hidden="true" />
              </motion.div>

              <p className="text-[clamp(2.5rem,6vw,4rem)] font-black text-white tracking-tight leading-none mb-2">
                <AnimatedCounter target={value} suffix={suffix} />
              </p>

              <div className="w-8 h-0.5 bg-[#D4AF37]/40 mb-3 group-hover:w-16 transition-all duration-300" />
              <p className="text-white/60 text-sm sm:text-base tracking-widest uppercase font-light">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
