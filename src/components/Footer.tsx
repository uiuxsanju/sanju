import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "Baby Handprint Frames", href: "#products" },
    { label: "Family Casting Kits", href: "#products" },
    { label: "Couples Frames", href: "#products" },
    { label: "Pet Paw Prints", href: "#products" },
    { label: "Workshop Kits", href: "#workshop" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Workshop", href: "#workshop" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Shipping Policy", href: "#" },
  ],
}

const locations = [
  { city: "Mumbai", address: "Room No. 4, Ground Floor, Hanuman Building, Behind RBI, Perin Nariman Street, Fort, Mumbai" }
];
export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0F0F0F] text-white relative overflow-hidden"
      aria-label="Site footer"
    >
      {/* Gold accent top line */}
      <div className="h-px gold-shimmer-bg" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-16 sm:pt-20 pb-10">
        {/* Newsletter */}
        <div
          className="rounded-3xl p-8 sm:p-10 mb-14 sm:mb-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))",
            border: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-2 tracking-tight">
                Stay Close to What Matters
              </h3>
              <p className="text-white/60 text-sm font-light">
                Get early access to new collections, exclusive offers, and workshop dates.
              </p>
            </div>
            <form
              className="flex w-full lg:w-auto gap-3 min-w-[300px]"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="submit"
                className="luxury-btn px-6 py-3 rounded-full text-[#1A1A1A] font-bold text-sm tracking-wider uppercase shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img src="/logo.png" alt="Now & Forever" className="h-16 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-light mb-6 max-w-xs">
              India's first 24 karat metallic imprint frame brand. Turning your most precious moments into eternal gold.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "IG", href: "https://instagram.com", ariaLabel: "Instagram" },
                { label: "FB", href: "https://facebook.com", ariaLabel: "Facebook" },
                { label: "YT", href: "https://youtube.com", ariaLabel: "YouTube" },
              ].map(({ label, href, ariaLabel }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] text-[10px] font-bold tracking-wide"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.3em] uppercase mb-5">Shop</h4>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.shop.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.3em] uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.3em] uppercase mb-5">Contact</h4>
            <ul className="flex flex-col gap-4" role="list">
              {locations.map(({ city, address }) => (
                <li key={city} className="flex gap-2">
                  <MapPin size={14} className="text-[#D4AF37] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-white/80 text-xs font-semibold tracking-wide">{city}</p>
                    <p className="text-white/40 text-xs">{address}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#D4AF37] shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded">
                +91-9869863514 / +91-7045352123 
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#D4AF37] shrink-0" aria-hidden="true" />
                <a href="mailto:hello@nowandforever.in" className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded">
                  lockyourmoments@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-8" aria-hidden="true" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} lockyourmoments. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {footerLinks.support.slice(1).map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-[#D4AF37] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
