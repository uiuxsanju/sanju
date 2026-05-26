import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[#FAF7F2] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4AF37]/20">
              <img src="/logo.png" alt="Now & Forever" className="h-12 w-auto object-contain" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#D4AF37]/10 text-[#1A1A1A] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-2" role="list">
                {links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center py-4 px-2 text-lg tracking-widest uppercase font-medium text-[#1A1A1A] border-b border-[#EFE7DA] hover:text-[#D4AF37] hover:pl-4 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <a
                  href="#products"
                  onClick={onClose}
                  className="block w-full text-center py-4 rounded-full luxury-btn text-[#1A1A1A] font-bold tracking-widest uppercase text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                >
                  Shop Now
                </a>
              </motion.div>
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-6 py-6 border-t border-[#D4AF37]/20"
            >
              <p className="text-xs text-[#1A1A1A]/50 tracking-wider uppercase mb-4">Follow Us</p>
              <div className="flex items-center gap-4">
                {[
                  { label: "IG", ariaLabel: "Instagram" },
                  { label: "FB", ariaLabel: "Facebook" },
                  { label: "YT", ariaLabel: "YouTube" },
                ].map(({ label, ariaLabel }) => (
                  <button
                    key={ariaLabel}
                    aria-label={ariaLabel}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] text-[10px] font-bold tracking-wide"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
