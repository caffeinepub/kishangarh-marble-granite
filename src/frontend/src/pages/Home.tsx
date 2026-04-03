import { Link } from "@tanstack/react-router";
import { Award, Gem, PlayCircle, Truck, Users } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ParticleField } from "../components/ParticleField";

const HERO_IMAGE = "/assets/generated/italian-marble-bg.dim_1920x1080.jpg";

const showroomImages = [
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.44_pm_1-019d206a-162c-76ee-bfc6-ac679313b294-1.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.44_pm_2-019d206a-1913-751f-b00b-9cf063fd1d16-2.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.45_pm-019d206a-1a1b-7713-a00d-ada60a4fc413-3.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.44_pm-019d206a-19e5-76e9-ba72-31afca159055-4.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.43_pm_2-019d206a-1ab3-73a8-8e8e-5552da680178-5.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.43_pm_1-019d206a-1c32-74ef-b24e-9e2e4d187cfb-6.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.42_pm_1-019d206a-1e31-754e-a5af-266bc9e11194-7.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.43_pm-019d206a-1e23-72fc-b1cb-cd615941d12e-8.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.42.45_pm_1-019d206a-1ec5-70b4-bd19-8587031ca862-9.jpeg",
  "/assets/uploads/whatsapp_image_2026-03-24_at_8.46.07_pm-019d206c-0c49-759f-a307-1c1c49abea69-10.jpeg",
];

const youtubeVideos = [
  {
    id: "8DCNH23wXnE",
    title:
      "Pink Marble Price & Design | Budget-Friendly Patterned Marble for Flooring",
  },
  {
    id: "osWgjBi5Vp4",
    title:
      "Steel Grey Leather Finish Granite @ ₹60/sqft | Best Anti-Skid Granite for Stairs",
  },
  {
    id: "YF0RANCTPhQ",
    title:
      "Titanium Black Granite | Luxury Black Granite Flooring at Best Price",
  },
  {
    id: "8Ahyh4GP4Ew",
    title:
      "Alaska Pink Granite Luxury Look | Price ₹80–100/Sqft | Granite in Kishangarh",
  },
  {
    id: "p3y0-gsWjP0",
    title:
      "Classic Red Granite Price in Kishangarh | Best Outdoor Flooring Stone",
  },
  {
    id: "1vy12or6PPg",
    title:
      "Markino Black Granite | Outdoor Flooring Granite | Price ₹45–55 Per Sqft",
  },
  {
    id: "io24sJ-XD64",
    title:
      "Morwad White Marble Price | Best Quality Marble at ₹20–₹30 Per Sq Ft",
  },
  {
    id: "9Whc1OLHMSo",
    title: "White Marble Home | Beautiful White Marble Flooring Ideas",
  },
  {
    id: "6zkUafqMZXg",
    title: "Toranto Marble Sale | Khushi Marbles Kishangarh",
  },
  {
    id: "ruKGV-ddUZw",
    title: "Khushi Marbles | Premium Marble & Granite Kishangarh",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10,000+", label: "Projects Completed" },
  { value: "150+", label: "Stone Varieties" },
  { value: "Pan India", label: "Delivery" },
];

const whyUs = [
  {
    icon: <Award className="w-8 h-8 text-gold" />,
    label: "25+ Years Experience",
    desc: "Your most trusted source for marble in Kishangarh and granite in Kishangarh since 1999",
  },
  {
    icon: <Gem className="w-8 h-8 text-gold" />,
    label: "Premium Quality",
    desc: "Hand-selected slabs from top quarries — the finest marble in Kishangarh, delivered worldwide",
  },
  {
    icon: <Truck className="w-8 h-8 text-gold" />,
    label: "Pan-India Delivery",
    desc: "Secure packaging and on-time delivery anywhere in India",
  },
  {
    icon: <Users className="w-8 h-8 text-gold" />,
    label: "Expert Guidance",
    desc: "Dedicated stone consultants for every project",
  },
];

const featuredProjects = [
  {
    title: "Living Room Flooring",
    location: "Home Interior",
    tag: "Marble Application",
    image: "/assets/generated/hyperlapse-home-living.dim_800x600.jpg",
  },
  {
    title: "Kitchen Countertop",
    location: "Modern Home",
    tag: "Granite Counters",
    image: "/assets/generated/hyperlapse-kitchen-granite.dim_800x600.jpg",
  },
  {
    title: "Office Lobby",
    location: "Commercial Space",
    tag: "Marble Flooring",
    image: "/assets/generated/hyperlapse-office-lobby.dim_800x600.jpg",
  },
  {
    title: "Luxury Bathroom",
    location: "Premium Residence",
    tag: "Full Marble",
    image: "/assets/generated/hyperlapse-bathroom-marble.dim_800x600.jpg",
  },
  {
    title: "Building Exterior",
    location: "Commercial Project",
    tag: "Granite Cladding",
    image: "/assets/generated/hyperlapse-exterior-granite.dim_800x600.jpg",
  },
  {
    title: "Grand Staircase",
    location: "Luxury Villa",
    tag: "Marble Steps",
    image: "/assets/generated/hyperlapse-staircase.dim_800x600.jpg",
  },
];

const heroWords = ["Timeless", "Stone.", "Extraordinary", "Spaces."];

// Pre-computed kinetic title letters with stable keys
const KINETIC_TITLE = "Marble & Granite In Action";
const kineticLetters = Array.from(KINETIC_TITLE).map((char, i) => ({
  char,
  key: `kin-pos-${i}`,
  delay: i * 0.03,
}));

const customOrderItems = [
  {
    image: "/assets/generated/gravel-custom-order.dim_600x400.jpg",
    label: "Natural Gravel",
    desc: "Rounded river gravel in bulk, ideal for drainage, landscaping, and pathway designs.",
  },
  {
    image: "/assets/generated/cobble-custom-order.dim_600x400.jpg",
    label: "Cobblestone",
    desc: "Premium granite cobblestones for driveways, pathways, and heritage exterior paving.",
  },
  {
    image: "/assets/generated/marble-chip-custom-order.dim_600x400.jpg",
    label: "Marble Chips",
    desc: "White marble chips in assorted grades for garden paths, pool surrounds, and decorative fills.",
  },
];

// Gold marble divider between collection sections
function GoldDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <motion.div
        className="marble-divider"
        style={{ transformOrigin: "left center" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10 md:mb-14"
    >
      <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3 text-gold">
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {/* Animated marble divider */}
      <div className="flex justify-center mt-3">
        <motion.div
          className="marble-divider w-24"
          style={{ transformOrigin: "left center" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgPositionY = useTransform(scrollY, [0, 500], ["0%", "30%"]);

  return (
    <main>
      {/* Gold accent bar */}
      <div className="h-1 bg-gold w-full" />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${HERO_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: bgPositionY,
          }}
        />

        {/* Floating particles */}
        <ParticleField />

        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative max-w-[1200px] mx-auto px-4 py-16 md:py-24 w-full">
          {/* Shimmer subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="shimmer-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            Kishangarh, Rajasthan — Premier Source for Marble &amp; Granite
          </motion.p>

          {/* Staggered word reveal for headline */}
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-3xl">
            <AnimatePresence>
              {heroWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                  {/* Line break after "Stone." */}
                  {word === "Stone." && <span className="block" />}
                </motion.span>
              ))}
            </AnimatePresence>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-base md:text-lg max-w-xl mb-8 md:mb-10 font-sans"
          >
            Premium marble, granite, and exotic stones sourced from the world's
            finest quarries — delivered to your project anywhere in India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link
                to="/marble"
                data-ocid="hero.primary_button"
                className="btn-gold-glow inline-block px-6 md:px-8 py-3 md:py-4 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-200 border-2 border-gold ring-2 ring-offset-1 ring-gold"
              >
                EXPLORE COLLECTIONS
              </Link>
            </motion.div>
            <a
              href="https://wa.me/919829184713?text=I would like to get a quote"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-sans font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-dark transition-colors"
            >
              GET A QUOTE
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-dark py-5">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-2"
              >
                <p className="font-serif text-gold text-2xl md:text-3xl font-bold">
                  <AnimatedCounter value={s.value} />
                </p>
                <p className="text-white/60 text-xs font-sans tracking-wider uppercase mt-1">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COLLECTIONS SHOWCASE ===== */}
      <section className="bg-background">
        <div className="max-w-[1200px] mx-auto px-4 pt-14 md:pt-20 pb-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3 text-gold"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground"
          >
            Our Exquisite Collections
          </motion.h2>
          <div className="flex justify-center mt-3 mb-2">
            <motion.div
              className="marble-divider w-24"
              style={{ transformOrigin: "left center" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </section>

      {/* --- MARBLE Sub-section --- */}
      <section
        data-ocid="collections.marble"
        className="py-16 md:py-24 bg-background"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image — left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-sm shadow-stone"
            >
              <img
                src="/assets/generated/marble-slab-hero.dim_900x600.jpg"
                alt="Premium Marble Slab"
                className="w-full h-72 md:h-96 lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            {/* Text — right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
            >
              <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3 text-gold">
                OUR MARBLE COLLECTION
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5 uppercase tracking-wide">
                Timeless Marble
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-7">
                From pure white Makrana to luxurious Statuario and Green Onyx —
                our marble collection spans 26+ varieties sourced from India's
                finest quarries. Perfect for flooring, wall cladding,
                countertops, and statement pieces. MOQ: 2000 sqft for pan-India
                delivery.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/marble"
                  data-ocid="collections.marble.button"
                  className="btn-gold-glow inline-block px-7 py-3.5 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border-2 border-gold"
                >
                  EXPLORE MARBLE →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* --- GRANITE Sub-section --- */}
      <section
        data-ocid="collections.granite"
        className="py-16 md:py-24 bg-beige"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text — left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3 text-gold">
                OUR GRANITE COLLECTION
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5 uppercase tracking-wide">
                Enduring Granite
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-7">
                Black Galaxy, Kashmir Gold, Red Multicolor — 24+ premium
                granites ideal for kitchen counters, exterior facades, flooring,
                and stairs. Unmatched hardness with natural beauty that lasts
                generations.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/granite"
                  data-ocid="collections.granite.button"
                  className="btn-gold-glow inline-block px-7 py-3.5 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border-2 border-gold"
                >
                  EXPLORE GRANITE →
                </Link>
              </motion.div>
            </motion.div>
            {/* Image — right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="overflow-hidden rounded-sm shadow-stone order-1 lg:order-2"
            >
              <img
                src="/assets/generated/granite-slab-hero.dim_900x600.jpg"
                alt="Premium Granite Slab"
                className="w-full h-72 md:h-96 lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* --- EXOTIC STONE Sub-section --- */}
      <section
        data-ocid="collections.exotic"
        className="py-16 md:py-24 bg-background"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image — left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-sm shadow-stone"
            >
              <img
                src="/assets/generated/exotic-stone-slab-hero.dim_900x600.jpg"
                alt="Exotic Stone Slab"
                className="w-full h-72 md:h-96 lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            {/* Text — right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
            >
              <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3 text-gold">
                EXOTIC &amp; RARE STONES
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5 uppercase tracking-wide">
                Extraordinary Exotic Stones
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-7">
                Blue Bahia, Honey Onyx, Labradorite, and 12 more ultra-rare
                stones for the world's most prestigious interiors. Each slab is
                a unique work of art — sourced globally and curated for
                discerning architects and designers.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/exotic"
                  data-ocid="collections.exotic.button"
                  className="btn-gold-glow inline-block px-7 py-3.5 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border-2 border-gold"
                >
                  EXPLORE EXOTIC →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* --- CUSTOM ORDER Sub-section --- */}
      <section
        data-ocid="collections.custom"
        className="py-16 md:py-24 bg-beige"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3 text-gold"
            >
              CUSTOM ORDERS
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mb-2"
            >
              Bespoke Stone Solutions
            </motion.h3>
            <div className="flex justify-center mt-3">
              <motion.div
                className="marble-divider w-24"
                style={{ transformOrigin: "left center" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* 3-card row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mb-10">
            {customOrderItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  delay: i * 0.12,
                }}
                className="group overflow-hidden rounded-sm shadow-stone"
              >
                {/* Image with overlay label */}
                <div className="relative overflow-hidden h-52 md:h-60">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                    style={{ transition: "transform 0.6s ease" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-gold font-serif text-xl font-bold tracking-wide">
                      {item.label}
                    </h4>
                  </div>
                </div>
                {/* Card body */}
                <div className="bg-card p-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-muted-foreground text-base leading-relaxed mb-7">
              Custom cuts, pebbles, gravel, cobblestone, and marble chips for
              architects, landscapers, and premium construction projects.
              Available in bulk orders with custom sizing.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                data-ocid="collections.custom.button"
                className="btn-gold-glow inline-block px-8 py-4 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-200 border-2 border-gold ring-2 ring-offset-1 ring-gold"
              >
                PLACE CUSTOM ORDER →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Showroom Gallery Strip */}
      <section className="bg-background py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 mb-6">
          <SectionHeading
            eyebrow="Our Showroom"
            title="Visit Us in Kishangarh"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {showroomImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08, zIndex: 10 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: i * 0.06,
                }}
                className="relative overflow-hidden rounded-sm h-36 md:h-44 group"
              >
                <img
                  src={src}
                  alt={`Khushi Marble showroom ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-12 md:py-20 bg-dark">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3"
            >
              Watch &amp; Learn
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-white uppercase tracking-wide"
            >
              Our YouTube Channel
            </motion.h2>
            <div className="flex justify-center mt-3">
              <motion.div
                className="marble-divider w-24"
                style={{ transformOrigin: "left center" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-sm mt-3 max-w-xl mx-auto font-sans"
            >
              Explore stone types, pricing, and design inspiration on our
              YouTube channel.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {youtubeVideos.map((video, i) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                data-ocid={`youtube.item.${i + 1}`}
                className="group block rounded-sm overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.4,
                      }}
                    >
                      <PlayCircle className="w-10 h-10 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                </div>
                <div className="bg-card p-2">
                  <p className="text-foreground text-xs leading-snug line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://www.youtube.com/@khushimarbles7384?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="youtube.primary_button"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#FF0000] text-white font-black text-xs tracking-widest uppercase shadow-md hover:bg-[#cc0000] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
              SUBSCRIBE ON YOUTUBE
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects (Hyperlapse) */}
      <section className="py-12 md:py-20 bg-dark">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3"
            >
              Real Projects
            </motion.p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white uppercase tracking-wide flex flex-wrap justify-center">
              {kineticLetters.map((item) => (
                <motion.span
                  key={item.key}
                  className="inline-block"
                  style={{
                    display: "inline-block",
                    minWidth: item.char === " " ? "0.35em" : undefined,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: item.delay,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.char === " " ? "\u00A0" : item.char}
                </motion.span>
              ))}
            </h2>
            <div className="flex justify-center mt-3">
              <motion.div
                className="marble-divider w-24"
                style={{ transformOrigin: "left center" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {featuredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-ocid={`projects.item.${i + 1}`}
                className="relative overflow-hidden rounded-sm group hover:ring-2 hover:ring-gold hover:ring-offset-2 transition-all"
              >
                {/* Tag badge */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-gold text-black font-sans text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm">
                    {p.tag}
                  </span>
                </div>

                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <p className="text-white font-serif text-sm font-semibold leading-tight">
                    {p.title}
                  </p>
                  <p className="text-gold font-sans text-xs mt-0.5">
                    {p.location}
                  </p>
                  <p className="text-white/60 font-sans text-[10px] uppercase tracking-widest mt-0.5">
                    {p.tag}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 md:py-20 bg-beige">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3"
            >
              Our Advantage
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide"
            >
              Why Khushi Marble and Granite
            </motion.h2>
            <div className="flex justify-center mt-3">
              <motion.div
                className="marble-divider w-24"
                style={{ transformOrigin: "left center" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto"
            >
              The #1 destination for marble in Kishangarh and granite in
              Kishangarh — quality you can see and feel.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "oklch(0.72 0.15 74)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  delay: i * 0.1,
                }}
                className="text-center p-5 md:p-6 border border-border hover:border-gold transition-colors rounded-sm bg-card"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact snippet */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-sm overflow-hidden shadow-stone"
            >
              <iframe
                title="Kishangarh Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.123456789!2d74.8540!3d26.5860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8f0e9a4e3e3d%3A0xc1234567890abcde!2sKishangarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Visit Us
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Come See Our Showroom
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Our 10,000 sq ft showroom in Kishangarh displays hundreds of
                slabs in every variety. Walk in and let our stone experts help
                you find the perfect material for your project.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>
                  <strong className="text-foreground">Address:</strong> Makrana
                  Road, Kishangarh, 305801
                </li>
                <li>
                  <strong className="text-foreground">Phone:</strong>{" "}
                  <a
                    href="tel:+919252991720"
                    className="hover:text-gold transition-colors duration-300"
                  >
                    +91 92529 9172
                  </a>
                  {" / "}
                  <a
                    href="tel:+919829184713"
                    className="hover:text-gold transition-colors duration-300"
                  >
                    +91 98291 84713
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:khushimarblesksg@gmail.com"
                    className="hover:text-gold transition-colors duration-300"
                  >
                    khushimarblesksg@gmail.com
                  </a>
                </li>
              </ul>
              <Link
                to="/contact"
                data-ocid="home.contact_button"
                className="inline-block px-6 py-3 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border border-gold"
              >
                GET DIRECTIONS
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
