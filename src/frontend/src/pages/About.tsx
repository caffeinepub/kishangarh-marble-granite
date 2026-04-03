import { motion } from "motion/react";
import { useCompanyInfo } from "../hooks/useQueries";

export function About() {
  const { data: company } = useCompanyInfo();

  return (
    <main>
      {/* Header */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(43,46,47,0.75), rgba(43,46,47,0.75)), url('/assets/generated/marble-makrana.dim_800x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-5xl font-bold uppercase tracking-wide"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Established 1999
              </p>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                The Stone Capital's Finest
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {company?.name ?? "Khushi Marble and Granite"} was founded in
                  1999 by{" "}
                  <strong className="text-foreground">
                    Mr. Ramsahay Prajapat
                  </strong>{" "}
                  in Kishangarh — the world-renowned stone trading capital of
                  India. Nestled in the heart of Rajasthan, our city has been
                  the global hub for marble and granite for over a century.
                </p>
                <p>
                  We began as a small trading house, supplying local contractors
                  with Makrana white marble. Over 25 years, we have grown into
                  one of the region's most respected stone suppliers, serving
                  luxury hotels, landmark buildings, and discerning homeowners
                  across India and beyond.
                </p>
                <p>
                  Our commitment is simple: source only the finest stone, select
                  every slab by hand, and deliver an unmatched client experience
                  from specification to installation.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/assets/generated/marble-makrana.dim_800x600.jpg"
                alt="Makrana Marble"
                className="rounded-sm w-full h-48 object-cover"
              />
              <img
                src="/assets/generated/granite-kashmir-gold.dim_800x600.jpg"
                alt="Kashmir Gold"
                className="rounded-sm w-full h-48 object-cover mt-8"
              />
              <img
                src="/assets/generated/marble-black.dim_800x600.jpg"
                alt="Black Marble"
                className="rounded-sm w-full h-48 object-cover"
              />
              <img
                src="/assets/generated/exotic-blue-bahia.dim_800x600.jpg"
                alt="Blue Bahia"
                className="rounded-sm w-full h-48 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder highlight */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Founder
            </p>
            <h2 className="font-serif text-3xl font-bold mb-3">
              Mr. Ramsahay Prajapat
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
              With a lifelong passion for natural stone, Mr. Prajapat
              established Khushi Marble and Granite in 1999 with a vision to
              bring the finest quality marble and granite from Kishangarh's
              quarries to homes and landmarks across India. His dedication to
              craftsmanship and honest business values continue to guide our
              team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-beige">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-foreground uppercase">
              Our Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                body: "Every slab is hand-selected at the quarry. We reject anything that doesn't meet our exacting standards for colour, grain, and structural integrity.",
              },
              {
                title: "Integrity",
                body: "Transparent pricing, honest advice, and no hard selling. We guide you to the stone that suits your project — not just the most expensive option.",
              },
              {
                title: "Heritage",
                body: "We are custodians of a centuries-old craft. Kishangarh's stone artisans are among the most skilled in the world, and we are proud to support that tradition.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-background rounded-sm shadow-stone"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
