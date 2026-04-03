import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";

const NEW_LOGO =
  "/assets/whatsapp_image_2026-03-27_at_11.07.47_pm-019d5210-5819-74a6-82a2-5e1432458363.jpeg";

const socialLinks = [
  {
    href: "https://www.instagram.com/khushi_marbles",
    label: "Instagram",
    icon: <SiInstagram size={22} />,
  },
  {
    href: "https://www.facebook.com/khushimarblesksg",
    label: "Facebook",
    icon: <SiFacebook size={22} />,
  },
  {
    href: "https://www.youtube.com/@khushimarbles7384",
    label: "YouTube",
    icon: <SiYoutube size={22} />,
  },
  {
    href: "https://wa.me/919829184713",
    label: "WhatsApp",
    icon: <SiWhatsapp size={22} />,
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-dark text-white border-t-2 border-gold">
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={NEW_LOGO}
              alt="Khushi Marble and Granite Logo"
              className="h-14 w-14 object-contain"
            />
            <span className="font-serif text-gold text-sm font-bold tracking-wider uppercase leading-tight">
              Khushi Marble
              <br />& Granite
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Kishangarh's premier supplier of fine marble and granite.
            Established in 1999 by Mr. Ramsahay Prajapat, serving architects,
            builders, and homeowners for over 25 years.
          </p>
          <div className="flex gap-5">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{
                  scale: 1.3,
                  rotate: 8,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                className="text-white/50 hover:text-gold transition-colors duration-200"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Products
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Marble Collection", to: "/marble" },
              { label: "Granite Collection", to: "/granite" },
              { label: "Exotic Stones", to: "/exotic" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex gap-2 items-start text-white/60 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
              <span>Makrana Road, Kishangarh, 305801</span>
            </li>
            <li className="flex gap-2 items-start text-white/60 text-sm">
              <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+919252991720"
                  className="hover:text-gold transition-colors duration-200"
                >
                  +91 92529 9172
                </a>
                <a
                  href="tel:+919829184713"
                  className="hover:text-gold transition-colors duration-200"
                >
                  +91 98291 84713
                </a>
              </div>
            </li>
            <li className="flex gap-2 items-center text-white/60 text-sm">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              <a
                href="mailto:khushimarblesksg@gmail.com"
                className="hover:text-gold transition-colors duration-200 break-all"
              >
                khushimarblesksg@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Animated marble divider above copyright */}
      <div className="px-4">
        <div className="marble-divider" />
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>© {year} Khushi Marble and Granite. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link
              to="/logos"
              className="hover:text-gold transition-colors underline underline-offset-2"
              data-ocid="footer.link"
            >
              Change Logo →
            </Link>
            <span>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
