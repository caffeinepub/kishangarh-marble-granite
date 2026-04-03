import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { motion, useMotionValue } from "motion/react";
import { useRef, useState } from "react";
import type { Finish } from "../backend";
import { QuoteFormModal } from "./QuoteFormModal";

interface ProductCardProps {
  name: string;
  origin: string;
  description: string;
  finishes: Finish[];
  image: string;
  images?: string[];
  slug: string;
  index?: number;
}

function formatFinish(f: Finish): string {
  const map: Record<string, string> = {
    polished: "Polished",
    honed: "Honed",
    flamed: "Flamed",
    leathered: "Leathered",
    sandblasted: "Sandblasted",
    bushHammered: "Bush Hammered",
  };
  return map[f] ?? f;
}

export function ProductCard({
  name,
  origin,
  description,
  finishes,
  image,
  images,
  slug,
  index = 0,
}: ProductCardProps) {
  const allImages = images && images.length > 0 ? images : [image];
  const [activeImage, setActiveImage] = useState(allImages[0]);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 8);
    rotateY.set(x * 8);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <>
      <motion.article
        ref={cardRef}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -4,
          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        className="bg-white rounded-sm overflow-hidden shadow-stone group hover:shadow-xl transition-shadow duration-300 flex flex-col"
      >
        <Link
          to="/product/$slug"
          params={{ slug }}
          className="relative overflow-hidden h-48 sm:h-56 block"
        >
          <img
            src={activeImage}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </Link>

        {allImages.length > 1 && (
          <div className="flex gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-200 overflow-x-auto">
            {allImages.slice(0, 4).map((img, i) => (
              <motion.button
                // biome-ignore lint/suspicious/noArrayIndexKey: thumbnail list is static
                key={`thumbnail-${i}`}
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveImage(img)}
                className={`w-10 h-9 sm:w-12 sm:h-10 rounded-sm overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                  activeImage === img
                    ? "border-gold shadow-sm"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label={`View image of ${name}`}
              >
                <img
                  src={img}
                  alt={`${name} thumbnail`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}

        <div className="p-4 sm:p-5 flex flex-col flex-1 bg-white">
          <Link to="/product/$slug" params={{ slug }}>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1a1a1a] mb-1 hover:text-gold transition-colors leading-tight">
              {name}
            </h3>
          </Link>
          <p className="flex items-center gap-1 text-[#777] text-xs font-sans tracking-wider uppercase mb-3">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            {origin}
          </p>
          <p className="text-sm text-[#5a5a5a] leading-relaxed mb-4 flex-1 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {finishes.map((f) => (
              <Badge
                key={f}
                variant="outline"
                className="text-xs border-gold/50 text-gold bg-transparent"
              >
                {formatFinish(f)}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <motion.div className="flex-1" whileTap={{ scale: 0.96 }}>
              <Button
                onClick={() => setQuoteOpen(true)}
                size="sm"
                className="w-full bg-gold text-black font-black text-xs tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border border-gold gap-1.5"
                data-ocid="marble.quote_button"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Request Quote
              </Button>
            </motion.div>
            <Link to="/product/$slug" params={{ slug }}>
              <motion.div whileTap={{ scale: 0.96 }}>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gold/50 text-gold hover:bg-gold/10 text-xs font-semibold"
                  data-ocid="marble.secondary_button"
                >
                  Details
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.article>

      <QuoteFormModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName={name}
      />
    </>
  );
}
