import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams } from "@tanstack/react-router";
import {
  ArrowUpNarrowWide,
  Bath,
  Building2,
  ChefHat,
  Droplets,
  Flower2,
  Home,
  Layers,
  MapPin,
  MessageCircle,
  MoveUpRight,
  Phone,
  Sparkles,
  Trees,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { allProducts } from "../data/products";

function getAppIcon(app: string) {
  const lower = app.toLowerCase();
  if (lower.includes("floor")) return <Home className="w-4 h-4" />;
  if (lower.includes("wall") || lower.includes("cladding"))
    return <Layers className="w-4 h-4" />;
  if (lower.includes("counter") || lower.includes("kitchen"))
    return <ChefHat className="w-4 h-4" />;
  if (lower.includes("bath") || lower.includes("vanity"))
    return <Bath className="w-4 h-4" />;
  if (lower.includes("stair")) return <ArrowUpNarrowWide className="w-4 h-4" />;
  if (lower.includes("pool")) return <Droplets className="w-4 h-4" />;
  if (lower.includes("garden") || lower.includes("landscape"))
    return <Trees className="w-4 h-4" />;
  if (lower.includes("exterior") || lower.includes("facade"))
    return <Building2 className="w-4 h-4" />;
  if (lower.includes("temple") || lower.includes("sculpt"))
    return <Sparkles className="w-4 h-4" />;
  if (lower.includes("feature")) return <MoveUpRight className="w-4 h-4" />;
  if (lower.includes("pav") || lower.includes("monument"))
    return <Flower2 className="w-4 h-4" />;
  return <Home className="w-4 h-4" />;
}

function formatFinish(f: string): string {
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

export function ProductDetail() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const product = allProducts.find((p) => p.slug === slug);

  const isMarble = product?.category === "marble";
  const backPath = isMarble
    ? "/marble"
    : product?.category === "granite"
      ? "/granite"
      : "/exotic";
  const backLabel = isMarble
    ? "Marble"
    : product?.category === "granite"
      ? "Granite"
      : "Exotic";

  const allImages = product
    ? product.images && product.images.length > 0
      ? product.images
      : [product.image]
    : [];
  const [activeImage, setActiveImage] = useState(allImages[0] ?? "");

  if (!product) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center" data-ocid="product.error_state">
          <h1 className="font-serif text-3xl text-[#1a1a1a] mb-4">
            Product Not Found
          </h1>
          <p className="text-[#5a5a5a] mb-6">
            The product you are looking for does not exist.
          </p>
          <a href="/marble" className="text-gold underline hover:opacity-80">
            ← Back to Marble Collection
          </a>
        </div>
      </main>
    );
  }

  const whatsappText = encodeURIComponent(
    `I'm interested in ${product.name}. Please share the quote.`,
  );
  const whatsappUrl = `https://wa.me/919829184713?text=${whatsappText}`;

  return (
    <main className="bg-background min-h-screen">
      {/* Hero — dark gradient overlay on stone image */}
      <section
        className="relative h-96 flex items-end"
        style={{
          backgroundImage: `url('${activeImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-10 w-full">
          <motion.a
            href={backPath}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-1 text-white/70 hover:text-gold text-sm mb-4 transition-colors"
            data-ocid="product.link"
          >
            ← Back to {backLabel}
          </motion.a>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-4xl md:text-5xl font-bold mb-2"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 text-white/70 text-sm"
          >
            <MapPin className="w-4 h-4 text-gold" />
            {product.origin}
          </motion.p>
        </div>
      </section>

      {/* Content — light bg */}
      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* LEFT: Images + Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Main image */}
              <div className="rounded-lg overflow-hidden h-80 w-full">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-3">
                  {allImages.slice(0, 4).map((img, i) => (
                    <button
                      // biome-ignore lint/suspicious/noArrayIndexKey: thumbnail list is static
                      key={`thumbnail-${i}`}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-16 rounded-md overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
                        activeImage === img
                          ? "border-gold shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                      data-ocid={`product.item.${i + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Full Description */}
              <div>
                <h2 className="font-serif text-2xl text-[#1a1a1a] font-semibold mb-4">
                  About This Stone
                </h2>
                <p className="text-[#5a5a5a] leading-relaxed text-base">
                  {product.fullDescription}
                </p>
              </div>

              {/* Finishes */}
              <div>
                <h3 className="font-serif text-lg text-[#1a1a1a] font-semibold mb-3">
                  Available Finishes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.finishes.map((f) => (
                    <Badge
                      key={f}
                      variant="outline"
                      className="border-gold/50 text-gold bg-transparent text-sm px-3 py-1"
                    >
                      {formatFinish(f)}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Info Card + Applications + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Product Info Card */}
              <div
                className="rounded-lg border border-gold/30 bg-white p-6 space-y-4"
                data-ocid="product.card"
              >
                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] border-b border-gold/20 pb-3">
                  Product Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5a5a5a]">MOQ</span>
                    <span className="text-[#1a1a1a] font-medium">
                      2000 sqft (outside Rajasthan)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5a5a5a]">Available At</span>
                    <span className="text-[#1a1a1a] font-medium">
                      Khushi Marble, Kishangarh
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5a5a5a]">Contact</span>
                    <span className="text-gold font-semibold">9829184713</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5a5a5a]">Category</span>
                    <span className="text-[#1a1a1a] font-medium capitalize">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5a5a5a]">Origin</span>
                    <span className="text-[#1a1a1a] font-medium">
                      {product.origin}
                    </span>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div
                className="rounded-lg border border-border bg-white p-6"
                data-ocid="product.panel"
              >
                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-4">
                  Applications
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.applications.map((app) => (
                    <div
                      key={app}
                      className="flex items-center gap-2 bg-beige rounded-md px-3 py-2 text-sm text-[#1a1a1a]"
                    >
                      <span className="text-gold flex-shrink-0">
                        {getAppIcon(app)}
                      </span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gold text-black font-black tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 border border-gold gap-2"
                  data-ocid="product.primary_button"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Request Quote on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-gold/50 text-gold hover:bg-gold/10 font-semibold text-base gap-2"
                  data-ocid="product.secondary_button"
                >
                  <a href="tel:9829184713">
                    <Phone className="w-5 h-5" />
                    Call: 9829184713
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
