import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { toast } from "sonner"
import ProductCard, { type Product } from "./ProductCard"

const products: Product[] = [
  {
    id: 1,
    title: "Newborn Baby Handprint & Footprint Gold Frame",
    price: 3499,
    oldPrice: 4999,
    image: "/product-baby-frame.webp",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 2847,
  },
  {
    id: 2,
    title: "Family Handcasting Kit — 24 Karat Gold Edition",
    price: 7999,
    oldPrice: 9999,
    image: "/product-family-kit.webp",
    badge: "New",
    rating: 4.8,
    reviews: 1243,
  },
  {
    id: 3,
    title: "Couples Interlinked Hands Metallic Frame",
    price: 5499,
    oldPrice: 6999,
    image: "/product-couple-frame.webp",
    tag: "Gift Pick",
    rating: 4.9,
    reviews: 986,
  },
  {
    id: 4,
    title: "Pet Paw Print — Premium Gold Imprint Frame",
    price: 2999,
    oldPrice: 3999,
    image: "/product-pet-frame.webp",
    rating: 4.7,
    reviews: 654,
  },
]

export default function Products() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const handleAddToCart = (product: Product) => {
    toast.success(`Added to cart!`, {
      description: product.title,
      icon: "✨",
      duration: 3000,
      style: {
        background: "#FAF7F2",
        border: "1px solid rgba(212,175,55,0.3)",
        color: "#1A1A1A",
      },
    })
  }

  return (
    <section
      id="products"
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 bg-[#F8F5EF]"
      aria-labelledby="products-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Curated Collection</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2
            id="products-title"
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-[#1A1A1A] tracking-tight"
          >
            Our Most Loved
            <span className="block text-gradient-gold">Products</span>
          </h2>
          <p className="text-[#1A1A1A]/60 text-sm sm:text-base mt-4 max-w-md mx-auto font-light leading-relaxed">
            Each piece is handcrafted with care, gilded in genuine gold, and made to last lifetimes.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#products"
            className="px-10 py-4 rounded-full border-2 border-[#D4AF37] text-[#1A1A1A] font-bold tracking-[0.2em] uppercase text-sm hover:bg-[#D4AF37] hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  )
}
