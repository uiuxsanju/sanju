import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import MobileMenu from "./MobileMenu"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Workshop", href: "#workshop" },
  { label: "Contact", href: "#contact" },
]

const announcements = [
  "Free shipping on orders above ₹2,999 | Use code: FOREVER10 for 10% off",
  "India's First 24 Karat Metallic Imprint Frames — Trusted by 1,00,000+ families",
  "Workshop registrations open! Limited seats available — Book now",
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(2)
  const [announcementIndex, setAnnouncementIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prevAnnouncement = () =>
    setAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length)
  const nextAnnouncement = () =>
    setAnnouncementIndex((prev) => (prev + 1) % announcements.length)

  return (
    <>
      {/* Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] text-[#D4AF37] text-xs sm:text-sm py-2 px-4 flex items-center justify-between">
        <button
          onClick={prevAnnouncement}
          aria-label="Previous announcement"
          className="p-1 hover:text-[#E8CC6A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded"
        >
          ‹
        </button>
        <div className="flex-1 overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={announcementIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="truncate px-2 tracking-wide font-light"
            >
              {announcements[announcementIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <button
          onClick={nextAnnouncement}
          aria-label="Next announcement"
          className="p-1 hover:text-[#E8CC6A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded"
        >
          ›
        </button>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass-navbar shadow-lg shadow-black/5 border-b border-[#D4AF37]/20"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded" aria-label="Now & Forever — Home">
            <img
              src="/logo.png"
              alt="Now & Forever"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative text-[#1A1A1A] text-sm tracking-widest uppercase font-medium group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded px-1 py-0.5 transition-colors hover:text-[#D4AF37]"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              aria-label="Search"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#D4AF37]/10 text-[#1A1A1A] hover:text-[#D4AF37] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
            >
              <Search size={18} />
            </button>
            <button
              aria-label="Account"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#D4AF37]/10 text-[#1A1A1A] hover:text-[#D4AF37] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
            >
              <User size={18} />
            </button>
            <button
              aria-label={`Cart (${cartCount} items)`}
              className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#D4AF37]/10 text-[#1A1A1A] hover:text-[#D4AF37] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#D4AF37] text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#D4AF37]/10 text-[#1A1A1A] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  )
}
