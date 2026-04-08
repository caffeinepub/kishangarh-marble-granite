import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const LOGO_SRC =
  "/assets/whatsapp_image_2026-03-27_at_11.07.47_pm-019d5210-5819-74a6-82a2-5e1432458363.jpeg";

const MARBLE_BG = "/assets/generated/red-dragon-marble-bg.dim_1920x1080.jpg";

type LetterItem = { char: string; key: string; delay: number };

const LINE1_LETTERS: LetterItem[] = Array.from("KHUSHI MARBLE").map(
  (char, i) => ({
    char,
    key: `line1-pos-${i}`,
    delay: 0.4 + i * 0.055,
  }),
);

const LINE2_LETTERS: LetterItem[] = Array.from("& GRANITE").map((char, i) => ({
  char,
  key: `line2-pos-${i}`,
  delay: 0.4 + 13 * 0.055 + 0.1 + i * 0.055,
}));

const DIVIDER_DELAY = 0.4 + (13 + 9) * 0.055 + 0.15;
const TAGLINE_DELAY = 0.4 + (13 + 9) * 0.055 + 0.35;

export function LogoSplash() {
  const alreadyShown =
    typeof window !== "undefined" &&
    sessionStorage.getItem("splashShown") === "true";

  const [visible, setVisible] = useState(!alreadyShown);

  useEffect(() => {
    if (alreadyShown) return;
    sessionStorage.setItem("splashShown", "true");
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alreadyShown]);

  if (alreadyShown) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="logo-splash"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Red Dragon marble background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${MARBLE_BG}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with glow */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{
                scale: [0.4, 1.1, 1.0],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 0.8,
                times: [0, 0.7, 1],
                ease: "easeOut",
              }}
              className="mb-6"
              style={{
                filter: "drop-shadow(0 0 30px oklch(0.72 0.15 74))",
              }}
            >
              <img
                src={LOGO_SRC}
                alt="Khushi Marble and Granite Logo"
                className="object-contain"
                style={{ height: "100px", width: "100px" }}
              />
            </motion.div>

            {/* KHUSHI MARBLE — letter by letter */}
            <div className="flex items-center justify-center mb-1">
              {LINE1_LETTERS.map((item) => (
                <motion.span
                  key={item.key}
                  className="shimmer-gold font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-widest"
                  style={{
                    display: "inline-block",
                    minWidth: item.char === " " ? "0.5em" : undefined,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: item.delay,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.char === " " ? "\u00A0" : item.char}
                </motion.span>
              ))}
            </div>

            {/* & GRANITE — letter by letter */}
            <div className="flex items-center justify-center mb-5">
              {LINE2_LETTERS.map((item) => (
                <motion.span
                  key={item.key}
                  className="text-white font-serif font-bold text-2xl sm:text-3xl md:text-4xl tracking-[0.35em]"
                  style={{
                    display: "inline-block",
                    minWidth: item.char === " " ? "0.5em" : undefined,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: item.delay,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.char === " " ? "\u00A0" : item.char}
                </motion.span>
              ))}
            </div>

            {/* Gold shimmer divider */}
            <motion.div
              className="marble-divider w-64 mb-5"
              style={{ transformOrigin: "center" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: DIVIDER_DELAY,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Tagline */}
            <motion.p
              className="text-white/70 font-sans text-xs tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: TAGLINE_DELAY,
                duration: 0.6,
              }}
            >
              Since 1999 &bull; Kishangarh, Rajasthan
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
