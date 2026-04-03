import {
  Clock,
  Gem,
  Layers,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";

const PHONE1 = "+91 92529 9172";
const PHONE1_RAW = "+919252991720";
const PHONE2 = "+91 98291 84713";
const PHONE2_RAW = "+919829184713";
const EMAIL = "khushimarblesksg@gmail.com";
const ADDRESS = "Makrana Road, Kishangarh, 305801";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/khushimarblesksg",
    icon: <SiFacebook size={26} color="#1877F2" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/khushi_marbles",
    icon: <SiInstagram size={26} color="#E1306C" />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@khushimarbles7384",
    icon: <SiYoutube size={26} color="#FF0000" />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/919829184713",
    icon: <SiWhatsapp size={26} color="#25D366" />,
  },
];

const customOrders = [
  {
    icon: <Gem className="w-8 h-8 text-gold" />,
    title: "Pebbles",
    description:
      "Natural river pebbles available in white, black, and multi-colour varieties. Perfect for landscaping, garden paths, water features, and decorative flooring inlays.",
    uses: [
      "Garden Paths",
      "Water Features",
      "Decorative Flooring",
      "Pool Surrounds",
    ],
    waText:
      "I am interested in Pebbles - please send me pricing and availability details",
  },
  {
    icon: <Layers className="w-8 h-8 text-gold" />,
    title: "Gravel",
    description:
      "Crushed stone gravel in various sizes and colours for driveways, drainage systems, garden beds, and construction fill. Available in white, grey, and mixed varieties.",
    uses: ["Driveways", "Drainage", "Garden Beds", "Construction Fill"],
    waText:
      "I am interested in Gravel - please send me pricing and availability details",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-gold" />,
    title: "Marble Chips",
    description:
      "Premium white and multi-colour marble chips for landscaping, terrazzo flooring, garden decoration, and architectural accents. Available in multiple sizes.",
    uses: [
      "Terrazzo Flooring",
      "Garden Decoration",
      "Landscaping",
      "Architectural Accents",
    ],
    waText:
      "I am interested in Marble Chips - please send me pricing and availability details",
  },
];

export function Contact() {
  return (
    <main>
      {/* Header */}
      <section
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(30,70,50,0.70), rgba(30,70,50,0.70)), url('/assets/generated/marble-statuario.dim_800x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-4xl md:text-5xl font-bold uppercase tracking-wide mb-3"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold/80 font-sans text-sm tracking-wider"
          >
            Leading Supplier of Marble in Kishangarh &amp; Granite in Kishangarh
          </motion.p>
        </div>
      </section>

      {/* Map + Contact Details */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-sm overflow-hidden shadow-stone"
            >
              <iframe
                title="Kishangarh Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57072.123456789!2d74.8240!3d26.5760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8fa0b2c3d4e5%3A0xabcdef1234567890!2sKishangarh%2C%20Rajasthan%20305801!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Visit Our Showroom
              </h2>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-4 items-start border-l-2 border-gold/40 pl-4 py-1">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground text-xs uppercase tracking-wider mb-1">
                      Address
                    </p>
                    <p className="text-muted-foreground text-sm">{ADDRESS}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start border-l-2 border-gold/40 pl-4 py-1">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground text-xs uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${PHONE1_RAW}`}
                      className="block text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      {PHONE1}
                    </a>
                    <a
                      href={`tel:${PHONE2_RAW}`}
                      className="block text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      {PHONE2}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start border-l-2 border-gold/40 pl-4 py-1">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground text-xs uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-muted-foreground text-sm hover:text-gold transition-colors break-all"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start border-l-2 border-gold/40 pl-4 py-1">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground text-xs uppercase tracking-wider mb-1">
                      Business Hours
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Monday – Saturday: 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>

              <div className="h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent mb-6" />

              {/* Social Media */}
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white border border-gold/30 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-[68px]"
                    >
                      {s.icon}
                      <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                        {s.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Order Materials */}
      <section className="py-12 md:py-20 bg-beige">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Bulk & Bespoke Supply
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              Custom Order Materials
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
              Beyond marble and granite, we supply a range of specialty
              materials for landscaping, construction, and architectural
              finishing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customOrders.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-gold/30 rounded-sm p-6 shadow-stone hover:shadow-xl hover:border-gold transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="mb-5">
                  <p className="text-xs font-sans font-bold tracking-widest uppercase text-gold mb-2">
                    Common Uses
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.uses.map((use) => (
                      <span
                        key={use}
                        className="text-xs px-2 py-1 bg-gold/10 text-foreground rounded-sm border border-gold/20"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={`https://wa.me/919829184713?text=${encodeURIComponent(item.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`contact.${item.title.toLowerCase().replace(" ", "_")}.primary_button`}
                  className="inline-block w-full text-center px-5 py-3 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border border-gold"
                >
                  REQUEST QUOTE
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Quote card */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="p-6 md:p-8 bg-beige rounded-sm border border-gold/20 max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              Request a Quote
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Send us details about your project and we'll respond within 24
              hours with pricing and availability.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Quote Request — Khushi Marble and Granite`}
              data-ocid="contact.primary_button"
              className="inline-block px-6 py-3 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border border-gold"
            >
              EMAIL US A QUOTE REQUEST
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
