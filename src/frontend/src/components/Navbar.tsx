import { Link, useLocation } from "@tanstack/react-router";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { QuoteFormModal } from "./QuoteFormModal";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "MARBLE", to: "/marble" },
  { label: "GRANITE", to: "/granite" },
  { label: "EXOTIC STONES", to: "/exotic" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top contact bar — desktop only */}
      <div className="hidden lg:block bg-dark text-white/70 text-xs py-1.5 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-gold" />
            <span>Makrana Road, Kishangarh, 305801</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-gold" />
            <a
              href="tel:+919829184713"
              className="hover:text-gold transition-colors duration-200"
            >
              +91 98291 84713
            </a>
          </div>
        </div>
      </div>

      <header className="bg-dark text-white sticky top-0 z-50 shadow-stone border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
            <img
              src="/assets/uploads/whatsapp_image_2026-03-24_at_8.48.13_pm-019d2092-57cc-727d-9af5-db793fc14e44-1.jpeg"
              alt="Khushi Marble and Granite Logo"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <span className="font-serif text-base font-semibold tracking-widest uppercase text-white hidden md:block">
              Khushi Marble and Granite
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="nav.link"
                  className={`relative text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold pb-1 ${
                    isActive ? "text-gold" : "text-white/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"
                    />
                  )}
                </Link>
              );
            })}
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => setQuoteOpen(true)}
              data-ocid="nav.primary_button"
              className="btn-gold-glow ml-2 px-5 py-2.5 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-200 border-2 border-gold ring-2 ring-offset-2 ring-gold"
            >
              GET A QUOTE
            </motion.button>
          </nav>

          {/* Mobile toggle */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            data-ocid="nav.toggle"
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-dark border-t border-white/10 overflow-hidden"
            >
              <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-4">
                {/* Mobile contact info */}
                <div className="flex flex-col gap-1 py-2 border-b border-white/10 mb-1">
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>Makrana Road, Kishangarh, 305801</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <Phone className="w-3 h-3 text-gold" />
                    <a
                      href="tel:+919829184713"
                      className="hover:text-gold transition-colors"
                    >
                      +91 98291 84713
                    </a>
                  </div>
                </div>

                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 22,
                      delay: i * 0.06,
                    }}
                  >
                    <Link
                      to={link.to}
                      data-ocid="nav.link"
                      onClick={() => setMobileOpen(false)}
                      className={`block text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold py-1 ${
                        location.pathname === link.to
                          ? "text-gold border-l-2 border-gold pl-3"
                          : "text-white/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setQuoteOpen(true);
                    setMobileOpen(false);
                  }}
                  data-ocid="nav.primary_button"
                  className="btn-gold-glow w-fit px-5 py-2.5 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-200 border-2 border-gold mt-1"
                >
                  GET A QUOTE
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <QuoteFormModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
