import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import {
  exoticProducts,
  graniteProducts,
  marbleProducts,
} from "../data/products";
import { QuoteFormModal } from "./QuoteFormModal";

const NEW_LOGO =
  "/assets/whatsapp_image_2026-03-27_at_11.07.47_pm-019d5210-5819-74a6-82a2-5e1432458363.jpeg";

type ProductLink = { name: string; slug: string };

interface DropdownNavItemProps {
  label: string;
  to: string;
  products: ProductLink[];
  isActive: boolean;
  onLinkClick?: () => void;
  isMobile?: boolean;
}

function DropdownNavItem({
  label,
  to,
  products,
  isActive,
  onLinkClick,
  isMobile = false,
}: DropdownNavItemProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  if (isMobile) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex items-center justify-between w-full text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold py-1 ${
            isActive ? "text-gold border-l-2 border-gold pl-3" : "text-white/80"
          }`}
        >
          <span>{label}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.22 }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pl-4 mt-1 mb-1 flex flex-col gap-0.5 border-l border-gold/30 ml-1">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    to="/product/$slug"
                    params={{ slug: p.slug }}
                    onClick={() => {
                      setOpen(false);
                      onLinkClick?.();
                    }}
                    data-ocid="nav.link"
                    className="text-[11px] font-sans text-white/70 hover:text-gold transition-colors duration-150 py-1 border-l-2 border-transparent hover:border-gold pl-2"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop dropdown
  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={to}
        data-ocid="nav.link"
        className={`relative flex items-center gap-1 text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold pb-1 ${
          isActive ? "text-gold" : "text-white/80"
        }`}
      >
        {label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
        >
          <ChevronDown className="w-3 h-3 opacity-70" />
        </motion.span>
        {isActive && (
          <motion.span
            layoutId="nav-underline"
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"
          />
        )}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top center" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-dark border border-gold/30 shadow-2xl z-50 rounded-sm overflow-hidden"
          >
            {/* Gold top accent line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="max-h-[400px] overflow-y-auto py-2">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  onClick={() => setOpen(false)}
                  data-ocid="nav.link"
                  className="group flex items-center gap-2 px-4 py-2 text-[11px] font-sans tracking-wide text-white/70 hover:text-gold hover:bg-white/5 transition-colors duration-150 border-l-2 border-transparent hover:border-gold"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-150 flex-shrink-0" />
                  {p.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();

  const marbleLinks: ProductLink[] = marbleProducts.map((p) => ({
    name: p.name,
    slug: p.slug,
  }));
  const graniteLinks: ProductLink[] = graniteProducts.map((p) => ({
    name: p.name,
    slug: p.slug,
  }));
  const exoticLinks: ProductLink[] = exoticProducts.map((p) => ({
    name: p.name,
    slug: p.slug,
  }));

  return (
    <>
      {/* Top contact bar — desktop only */}
      <div className="hidden lg:block bg-dark text-white/70 text-xs py-1.5 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-gold" />
            <span>RIICO Industrial Area, Kishangarh, 305801</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-gold" />
            <a
              href="tel:+917300373111"
              className="hover:text-gold transition-colors duration-200"
            >
              +91 73003 73111
            </a>
          </div>
        </div>
      </div>

      <header className="bg-dark text-white sticky top-0 z-50 shadow-stone border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
            <img
              src={NEW_LOGO}
              alt="Khushi Marble and Granite Logo"
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <span className="hidden sm:block font-serif text-gold text-sm font-bold tracking-wider uppercase leading-tight">
              Khushi Marble
              <br />& Granite
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {/* HOME */}
            <Link
              to="/"
              data-ocid="nav.link"
              className={`relative text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold pb-1 ${
                location.pathname === "/" ? "text-gold" : "text-white/80"
              }`}
            >
              HOME
              {location.pathname === "/" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"
                />
              )}
            </Link>

            {/* Marble dropdown */}
            <DropdownNavItem
              label="MARBLE"
              to="/marble"
              products={marbleLinks}
              isActive={location.pathname === "/marble"}
            />

            {/* Granite dropdown */}
            <DropdownNavItem
              label="GRANITE"
              to="/granite"
              products={graniteLinks}
              isActive={location.pathname === "/granite"}
            />

            {/* Exotic Stones dropdown */}
            <DropdownNavItem
              label="EXOTIC STONES"
              to="/exotic"
              products={exoticLinks}
              isActive={location.pathname === "/exotic"}
            />

            {/* ABOUT */}
            <Link
              to="/about"
              data-ocid="nav.link"
              className={`relative text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold pb-1 ${
                location.pathname === "/about" ? "text-gold" : "text-white/80"
              }`}
            >
              ABOUT
              {location.pathname === "/about" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"
                />
              )}
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              data-ocid="nav.link"
              className={`relative text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold pb-1 ${
                location.pathname === "/contact" ? "text-gold" : "text-white/80"
              }`}
            >
              CONTACT
              {location.pathname === "/contact" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"
                />
              )}
            </Link>

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
                    <span>RIICO Industrial Area, Kishangarh, 305801</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <Phone className="w-3 h-3 text-gold" />
                    <a
                      href="tel:+917300373111"
                      className="hover:text-gold transition-colors"
                    >
                      +91 73003 73111
                    </a>
                  </div>
                </div>

                {/* HOME */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                    delay: 0,
                  }}
                >
                  <Link
                    to="/"
                    data-ocid="nav.link"
                    onClick={() => setMobileOpen(false)}
                    className={`block text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold py-1 ${
                      location.pathname === "/"
                        ? "text-gold border-l-2 border-gold pl-3"
                        : "text-white/80"
                    }`}
                  >
                    HOME
                  </Link>
                </motion.div>

                {/* Marble mobile dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                    delay: 0.06,
                  }}
                >
                  <DropdownNavItem
                    label="MARBLE"
                    to="/marble"
                    products={marbleLinks}
                    isActive={location.pathname === "/marble"}
                    isMobile
                    onLinkClick={() => setMobileOpen(false)}
                  />
                </motion.div>

                {/* Granite mobile dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                    delay: 0.12,
                  }}
                >
                  <DropdownNavItem
                    label="GRANITE"
                    to="/granite"
                    products={graniteLinks}
                    isActive={location.pathname === "/granite"}
                    isMobile
                    onLinkClick={() => setMobileOpen(false)}
                  />
                </motion.div>

                {/* Exotic Stones mobile dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                    delay: 0.18,
                  }}
                >
                  <DropdownNavItem
                    label="EXOTIC STONES"
                    to="/exotic"
                    products={exoticLinks}
                    isActive={location.pathname === "/exotic"}
                    isMobile
                    onLinkClick={() => setMobileOpen(false)}
                  />
                </motion.div>

                {/* ABOUT */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                    delay: 0.24,
                  }}
                >
                  <Link
                    to="/about"
                    data-ocid="nav.link"
                    onClick={() => setMobileOpen(false)}
                    className={`block text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold py-1 ${
                      location.pathname === "/about"
                        ? "text-gold border-l-2 border-gold pl-3"
                        : "text-white/80"
                    }`}
                  >
                    ABOUT
                  </Link>
                </motion.div>

                {/* CONTACT */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                    delay: 0.3,
                  }}
                >
                  <Link
                    to="/contact"
                    data-ocid="nav.link"
                    onClick={() => setMobileOpen(false)}
                    className={`block text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-gold py-1 ${
                      location.pathname === "/contact"
                        ? "text-gold border-l-2 border-gold pl-3"
                        : "text-white/80"
                    }`}
                  >
                    CONTACT
                  </Link>
                </motion.div>

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
