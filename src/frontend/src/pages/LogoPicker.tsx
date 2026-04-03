import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const logos = [
  {
    id: 1,
    src: "/assets/generated/logo-1-art-deco.dim_400x200.png",
    label: "Logo 1",
    style: "Art Deco",
    desc: "Gold serif KMG with ornamental borders on marble",
  },
  {
    id: 2,
    src: "/assets/generated/logo-2-crest.dim_400x200.png",
    label: "Logo 2",
    style: "Heraldic Crest",
    desc: "Royal shield with KMG in gold on marble",
  },
  {
    id: 3,
    src: "/assets/generated/logo-3-hexagon.dim_400x200.png",
    label: "Logo 3",
    style: "Geometric",
    desc: "Modern gold hexagon with marble interior",
  },
  {
    id: 4,
    src: "/assets/generated/logo-4-medallion.dim_400x200.png",
    label: "Logo 4",
    style: "Medallion Seal",
    desc: "Circular gold seal with KMG and laurel wreath — currently active",
    active: true,
  },
  {
    id: 5,
    src: "/assets/generated/logo-5-columns.dim_400x200.png",
    label: "Logo 5",
    style: "Roman Columns",
    desc: "Classical marble columns with KMG engraved",
  },
  {
    id: 6,
    src: "/assets/generated/logo-6-diamond.dim_400x200.png",
    label: "Logo 6",
    style: "Diamond",
    desc: "Faceted diamond outline with KMG monogram",
  },
  {
    id: 7,
    src: "/assets/generated/logo-7-crown.dim_400x200.png",
    label: "Logo 7",
    style: "Royal Crown",
    desc: "Gold crown above KMG on Italian marble",
  },
  {
    id: 8,
    src: "/assets/generated/logo-8-marble-letters.dim_400x200.png",
    label: "Logo 8",
    style: "Marble Letters",
    desc: "KMG letters carved in marble texture with gold outline",
  },
  {
    id: 9,
    src: "/assets/generated/logo-9-mandala.dim_400x200.png",
    label: "Logo 9",
    style: "Indian Mandala",
    desc: "Rajasthani mandala in gold with KMG at center",
  },
  {
    id: 10,
    src: "/assets/generated/logo-10-bold-slash.dim_400x200.png",
    label: "Logo 10",
    style: "Bold Slash",
    desc: "Contemporary diagonal gold slash through KMG",
  },
];

export function LogoPicker() {
  const [selected, setSelected] = useState<number | null>(4);

  return (
    <main className="min-h-screen bg-dark">
      {/* Header */}
      <section
        className="relative py-16 md:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.8)), url('/assets/generated/italian-marble-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-xs font-sans tracking-widest uppercase transition-colors"
              data-ocid="logos.link"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Site
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3"
          >
            Brand Identity
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-serif text-white text-4xl md:text-5xl font-bold mb-4"
          >
            Choose Your Logo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="text-white/50 font-sans text-sm max-w-xl mx-auto"
          >
            Pick the one that best represents your brand. Each logo features KMG
            on an Italian marble background with gold accents.
          </motion.p>

          {/* Decorative divider */}
          <div className="flex justify-center mt-5">
            <motion.div
              className="marble-divider w-32"
              style={{ transformOrigin: "center" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {logos.map((logo, i) => {
              const isSelected = selected === logo.id;
              return (
                <motion.div
                  key={logo.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative group rounded-sm overflow-hidden flex flex-col transition-all duration-300 ${
                    isSelected
                      ? "ring-2 ring-gold shadow-[0_0_24px_rgba(201,168,76,0.35)]"
                      : "ring-1 ring-white/10 hover:ring-gold/50"
                  }`}
                  data-ocid={`logos.item.${i + 1}`}
                >
                  {/* Active badge */}
                  {logo.active && (
                    <div className="absolute top-2 left-2 z-10 bg-gold text-black text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-sm">
                      Active
                    </div>
                  )}

                  {/* Selected check */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                      <Check
                        className="w-3.5 h-3.5 text-black"
                        strokeWidth={3}
                      />
                    </div>
                  )}

                  {/* Logo image */}
                  <div
                    className="bg-[#111] p-3 border-b border-white/10 flex items-center justify-center"
                    style={{ minHeight: "110px" }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.label}
                      className="w-full h-auto object-contain max-h-24"
                      style={{ aspectRatio: "2/1" }}
                    />
                  </div>

                  {/* Info */}
                  <div className="bg-[#1a1a1a] px-3 pt-3 pb-4 flex flex-col flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-white/40 font-sans text-[10px] font-bold tracking-widest uppercase">
                        {logo.label}
                      </span>
                      <span className="text-gold font-sans text-[10px] font-bold tracking-widest uppercase">
                        {logo.style}
                      </span>
                    </div>
                    <p className="text-white/50 font-sans text-xs leading-relaxed mb-4 flex-1">
                      {logo.desc}
                    </p>

                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelected(logo.id)}
                      data-ocid={`logos.select_button.${i + 1}`}
                      className={`w-full py-2 text-xs font-black tracking-widest uppercase transition-all duration-200 border ${
                        isSelected
                          ? "bg-gold text-black border-gold cursor-default"
                          : "bg-transparent border-gold/40 text-gold hover:bg-gold hover:text-black hover:border-gold"
                      }`}
                    >
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 justify-center">
                          <Check className="w-3 h-3" strokeWidth={3} />
                          Selected
                        </span>
                      ) : (
                        "Select This Logo"
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 text-center"
          >
            <div className="inline-block bg-gold/10 border border-gold/20 rounded-sm px-6 py-4 max-w-xl">
              <p className="text-white/60 font-sans text-xs leading-relaxed">
                To apply a new logo, tell us which number you prefer (e.g.{" "}
                <span className="text-gold font-semibold">"Use Logo 7"</span>)
                and we'll update the navbar, footer, and splash screen
                immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
