import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star } from "lucide-react"
import LoadingSkeleton from "./LoadingSkeleton"

export interface Product {
  id: number
  title: string
  price: number
  oldPrice?: number
  image: string
  badge?: string
  rating: number
  reviews: number
  tag?: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [liked, setLiked] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [addedAnim, setAddedAnim] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(product)
    setAddedAnim(true)
    setTimeout(() => setAddedAnim(false), 600)
  }

  const handleLike = () => {
    setLiked((prev) => !prev)
  }

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/8 transition-shadow duration-400"
      style={{ border: "1px solid rgba(212,175,55,0.1)" }}
      aria-label={`${product.title}, ₹${product.price}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-[#FAF7F2]">
        {!loaded && <LoadingSkeleton />}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.06] ${
            loaded ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        />

        {/* Gold Shine Overlay on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="luxury-btn text-[#1A1A1A] text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
              {product.badge}
            </span>
          </div>
        )}

        {product.tag && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#1A1A1A] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
              {product.tag}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <motion.button
          onClick={handleLike}
          aria-label={liked ? `Remove ${product.title} from favorites` : `Add ${product.title} to favorites`}
          aria-pressed={liked}
          whileTap={{ scale: 0.85 }}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] transition-all hover:bg-white"
        >
          <motion.div
            animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <Heart
              size={16}
              className={liked ? "fill-red-500 text-red-500" : "text-[#1A1A1A]/50"}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2" aria-label={`${product.rating} stars, ${product.reviews} reviews`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < Math.round(product.rating) ? "fill-[#D4AF37] text-[#D4AF37]" : "text-[#D4AF37]/30"}
              aria-hidden="true"
            />
          ))}
          <span className="text-[#1A1A1A]/40 text-[10px] ml-1">({product.reviews})</span>
        </div>

        {/* Title */}
        <h3 className="text-[#1A1A1A] font-semibold text-sm sm:text-base leading-snug mb-3 tracking-tight line-clamp-2">
          {product.title}
        </h3>

        {/* Price Row */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-[#1A1A1A] font-bold text-lg">₹{product.price.toLocaleString("en-IN")}</span>
          {product.oldPrice && (
            <span className="text-[#1A1A1A]/40 text-sm line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
          {product.oldPrice && (
            <span className="text-green-600 text-xs font-semibold">
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% off
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <motion.button
          onClick={handleAddToCart}
          animate={addedAnim ? { y: [0, -4, 0] } : { y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label={`Add ${product.title} to cart`}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full border-2 border-[#D4AF37] text-[#1A1A1A] text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
        >
          <ShoppingCart size={15} aria-hidden="true" />
          Add to Cart
        </motion.button>
      </div>
    </motion.article>
  )
}
