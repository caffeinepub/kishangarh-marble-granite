import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { Category } from "../backend";
import { ProductCard } from "../components/ProductCard";
import { marbleProducts } from "../data/products";
import { useProductsByCategory } from "../hooks/useQueries";

const SKELETON_IDS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"];

const headingWords = ["Marble", "Collection"];

export function Marble() {
  const { data: backendProducts, isLoading } = useProductsByCategory(
    Category.marble,
  );

  const products =
    backendProducts && backendProducts.length > 0
      ? backendProducts.map((p) => {
          const local = marbleProducts.find((m) => m.name === p.name);
          return {
            ...p,
            image: local?.image ?? marbleProducts[0].image,
            images: local?.images,
            slug: local?.slug ?? p.name.toLowerCase().replace(/\s+/g, "-"),
          };
        })
      : marbleProducts;

  return (
    <main>
      <section
        className="relative py-24 flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(43,46,47,0.75), rgba(43,46,47,0.75)), url('/assets/generated/marble-makrana.dim_800x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3"
          >
            Our Collection
          </motion.p>
          <h1 className="font-serif text-white text-5xl font-bold uppercase tracking-wide mb-3">
            {headingWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          {/* Animated divider */}
          <div className="flex justify-center mb-4">
            <motion.div
              className="marble-divider w-24"
              style={{ transformOrigin: "left center" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-white/70 mt-2 max-w-xl mx-auto"
          >
            From the sacred quarries of Makrana to the hills of Banswara —
            discover India's finest and world's most coveted marbles.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          {isLoading ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              data-ocid="marble.loading_state"
            >
              {SKELETON_IDS.map((id) => (
                <div key={id} className="rounded-sm overflow-hidden">
                  <Skeleton className="h-56 w-full" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p, i) => (
                <ProductCard
                  key={p.name}
                  name={p.name}
                  origin={p.origin}
                  description={p.description}
                  finishes={p.finishes}
                  image={p.image}
                  images={p.images}
                  slug={p.slug}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
