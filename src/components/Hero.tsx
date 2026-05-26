import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const slides = [
  {
    bg: "/hero-bg-1.webp",
    title: ["INDIA'S FIRST", "24 KARAT", "Metallic Imprint Frames"],
    subtitle: "Turning fleeting moments into golden memories — forever.",
    accent: "Crafted with Love. Gilded in Gold.",
  },
  {
    bg: "/hero-bg-2.webp",
    title: ["PRESERVE", "YOUR MOST", "Precious Moments"],
    subtitle: "One-of-a-kind keepsakes your family will treasure for generations.",
    accent: "Handcrafted in India. Shipped Worldwide.",
  },
]

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}))

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrent((prev) => (prev + 1) % slides.length)
      }
    }, 6000)
    return () => clearInterval(timer)
  }, [isAnimating])

  const goTo = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ y }}
        >
          <img
            src={slides[current].bg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5EF]/60 via-[#F8F5EF]/30 to-[#F8F5EF]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EF]/70 via-transparent to-[#F8F5EF]/20" />
        </motion.div>
      </AnimatePresence>

      {/* Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: `radial-gradient(circle, rgba(212,175,55,0.9), rgba(212,175,55,0.2))`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 sm:mb-8"
            >
              <span className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
                {slides[current].accent}
              </span>
              <span className="w-8 h-px bg-[#D4AF37]" />
            </motion.div>

            {/* Main Title */}
            <h1 className="flex flex-col items-center gap-1 sm:gap-2 mb-6 sm:mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="block text-[#1A1A1A] text-[clamp(2rem,7vw,5rem)] font-black tracking-[-0.02em] leading-none uppercase"
              >
                {slides[current].title[0]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="block text-[clamp(2.5rem,9vw,7rem)] font-black tracking-[-0.02em] leading-none text-gradient-gold uppercase"
              >
                {slides[current].title[1]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="block text-[#1A1A1A] text-[clamp(1.8rem,6vw,4.5rem)] font-light tracking-[0.05em] leading-none"
                style={{ fontStyle: "italic" }}
              >
                {slides[current].title[2]}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="text-[#1A1A1A]/70 text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-10 sm:mb-12 font-light leading-relaxed tracking-wide"
            >
              {slides[current].subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#products"
                className="luxury-btn px-8 py-4 sm:px-10 sm:py-5 rounded-full text-[#1A1A1A] font-bold tracking-[0.2em] uppercase text-sm sm:text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] min-w-[180px]"
                aria-label="Shop Now"
              >
                Shop Now
              </a>
              <a
                href="#gallery"
                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#1A1A1A]/20 text-[#1A1A1A] font-semibold tracking-[0.15em] uppercase text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] min-w-[180px] justify-center"
              >
                <Play size={14} className="fill-current" />
                View Gallery
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 hidden sm:flex"
        aria-hidden="true"
      >
        <span className="text-[#1A1A1A]/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20" aria-label="Slide navigation">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
        >
          <ChevronLeft size={16} />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
              i === current ? "w-6 h-2 bg-[#D4AF37]" : "w-2 h-2 bg-[#D4AF37]/30"
            }`}
          />
        ))}
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  )
}
