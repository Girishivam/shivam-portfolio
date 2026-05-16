import { motion } from "framer-motion";
import { journey } from "@/data/portfolio";

export function JourneySection() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="section-label">04 · Learning Journey</span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            No company titles yet — just a <span className="text-gradient">trajectory</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            I'm a fresher. Instead of inflating experience, here's the honest path I've walked through college and self-study.
          </p>
        </div>

        <div className="relative">
          {/* Glowing line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-purple)] to-transparent md:left-1/2" />

          <ul className="space-y-12">
            {journey.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                  <div className="relative h-3 w-3 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_16px_var(--neon-cyan)]">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[var(--neon-cyan)] opacity-40" />
                  </div>
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
                    {item.year}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
                <div />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
