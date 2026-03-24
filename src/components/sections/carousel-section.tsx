import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/bucket/d64937ac-d448-4c12-85d7-a9b278d1373f.jpg",
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/bucket/8c6b87e7-bb2d-411c-9c87-f03c66e7094d.png",
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/bucket/39c70ed9-e738-454b-bb36-a53ba42d56a8.jpg",
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/bucket/11678ece-1eec-4cec-ab64-fef24d870115.jpg",
  "https://cdn.poehali.dev/projects/d2e21e40-9fac-4fba-ac2b-d72691debe41/bucket/ec9c56a3-ae84-4e7a-a76b-fef8ccd564c6.jpg",
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