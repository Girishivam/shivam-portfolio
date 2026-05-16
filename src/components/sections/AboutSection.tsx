import { motion } from "framer-motion";
import { aboutHighlights } from "@/data/portfolio";
import { FiCpu, FiCloud, FiCode, FiZap } from "react-icons/fi";

const pillars = [
  { Icon: FiCode, title: "Full Stack Craft", text: "Building end-to-end applications with React, Node and modern tooling." },
  { Icon: FiCpu, title: "Exploring AI/ML", text: "Currently learning machine learning, deep learning and computer vision." },
  { Icon: FiCloud, title: "Cloud Curious", text: "Learning AWS fundamentals, deployment workflows and modern infra." },
  { Icon: FiZap, title: "Creative Frontend", text: "Obsessed with motion, 3D and immersive interfaces." },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">01 · About</span>
            <h2 className="mt-6 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
              A student dev with a <span className="text-gradient">cosmic curiosity</span> for what's next.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm Shivam — currently pursuing my <span className="text-foreground">B.Tech in Computer Science & Artificial Intelligence</span>, graduating in 2026. I spend most of my time building things on the web and learning whatever feels exciting next.
              </p>
              <p>
                I'm passionate about <span className="text-foreground">full stack development</span> and immersive UI experiences, and I'm actively <span className="text-foreground">exploring machine learning concepts</span>, computer vision and <span className="text-foreground">AWS / cloud fundamentals</span>.
              </p>
              <p>
                My focus right now is shipping real, project-based experience — not titles. I care about clean code, thoughtful design and continuously learning the tools that shape the future.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutHighlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-gradient">{h.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 self-center">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 neon-border transition-all hover:-translate-y-1"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--neon-cyan)]/30 to-[var(--neon-purple)]/30 blur-3xl transition-opacity group-hover:opacity-100 opacity-40" />
                <p.Icon className="relative text-2xl text-[var(--neon-cyan)]" />
                <h3 className="relative mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
