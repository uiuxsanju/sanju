import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "PS",
    rating: 5,
    text: "I ordered a newborn handprint frame for my daughter and I am absolutely speechless. The 24 karat gold coating is stunning — it looks even more beautiful than the photos. The packaging was luxurious and it arrived perfectly safe. This will be a family heirloom.",
    product: "Newborn Baby Handprint Frame",
  },
  {
    name: "Rahul & Ananya Verma",
    location: "Bangalore, India",
    avatar: "RV",
    rating: 5,
    text: "We gifted ourselves a couples casting kit for our 10th anniversary and it was the most romantic experience. The casting process was easy to follow, and the final golden sculpture is breathtaking. Now & Forever truly lives up to its name.",
    product: "Couples Interlinked Hands Frame",
  },
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    avatar: "SM",
    rating: 5,
    text: "I was skeptical about ordering from India but the experience was flawless. The customer service was exceptional, shipping was fast, and the family handcasting kit arrived pristine. The gold detail is extraordinary. Couldn't be happier.",
    product: "Family Handcasting Kit",
  },
  {
    name: "Kavitha Nair",
    location: "Dubai, UAE",
    avatar: "KN",
    rating: 5,
    text: "I got a pet paw print frame for my late Golden Retriever. I cried when I opened the box. The gold imprint is so perfectly detailed — every little wrinkle of his paw. It's on my mantle and I look at it every day. Thank you so much.",
    product: "Pet Paw Print Gold Frame",
  },
  {
    name: "The Kapoor Family",
    location: "New Delhi, India",
    avatar: "KF",
    rating: 5,
    text: "We commissioned the Family Legacy Art with three generations — my mother's hands, mine, and my son's. Seeing them all together in gleaming gold was incredibly emotional. The craftsmanship is museum-worthy. An absolute masterpiece.",
    product: "Family Legacy Art",
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const go = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 bg-[#1A1A1A] relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Real Stories</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2
            id="testimonials-title"
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white tracking-tight"
          >
            Words From Our
            <span className="block text-gradient-gold">Cherished Families</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(212,175,55,0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Quote icon */}
            <Quote
              size={48}
              className="absolute top-6 right-6 text-[#D4AF37]/10"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6" aria-label={`${testimonials[current].rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-white/85 text-base sm:text-lg lg:text-xl leading-relaxed font-light italic mb-8">
                  "{testimonials[current].text}"
                </blockquote>

                {/* Product Tag */}
                <div className="inline-block text-[#D4AF37] text-xs tracking-[0.2em] uppercase border border-[#D4AF37]/30 rounded-full px-3 py-1 mb-6">
                  {testimonials[current].product}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[#1A1A1A] font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37, #E8CC6A)",
                    }}
                    aria-hidden="true"
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonials[current].name}</p>
                    <p className="text-white/50 text-sm">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                  className={`rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                    i === current ? "w-6 h-2 bg-[#D4AF37]" : "w-2 h-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
