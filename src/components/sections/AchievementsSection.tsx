import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { FiAward } from "react-icons/fi";

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="section-label">05 · Highlights</span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            Small wins, big <span className="text-gradient">momentum</span>.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all hover:-translate-y-1 neon-border"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--neon-cyan)]/25 to-[var(--neon-purple)]/25 blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
              <FiAward className="relative text-2xl text-[var(--neon-cyan)]" />
              <h3 className="relative mt-4 text-lg font-semibold">{a.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
