import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/files/c5b8cd67-acec-4c11-9f6a-6731523b25e4.jpg",
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/files/f4974002-d6af-4713-9cba-f0e815c01624.jpg",
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/files/4c46d538-4752-4c98-bc1f-dc87bc2d0c75.jpg",
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/files/11b4309e-a374-4230-bbc9-6eb1372a827f.jpg",
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/files/ca96fc1e-db99-4b2c-8a18-842858989014.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Работы, которые ищут своего владельца.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}