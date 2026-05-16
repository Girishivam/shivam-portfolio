import { motion } from "framer-motion";
import { skillGroups, levelMeta } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="section-label">02 · Skills</span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            A <span className="text-gradient">growing toolkit</span> — honest about where I am.
          </h2>
          <p className="mt-5 text-muted-foreground">
            I prefer realistic levels over fake percentages. Here's where I'm comfortable, where I'm learning, and what I'm exploring next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
              className="group relative rounded-2xl glass-strong p-7 neon-border"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-purple)]/20 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  0{gi + 1}
                </span>
              </div>

              <ul className="relative mt-6 space-y-4">
                {group.skills.map((s, si) => {
                  const meta = levelMeta[s.level];
                  return (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{s.name}</span>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          {s.level}
                        </span>
                      </div>
                      <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${meta.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.2 + si * 0.07, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${meta.color}, var(--neon-purple))`,
                            boxShadow: `0 0 12px ${meta.color}`,
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
