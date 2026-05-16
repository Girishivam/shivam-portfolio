import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { useRef } from "react";

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.06 }}
      className="group relative overflow-hidden rounded-3xl glass-strong p-7 neon-border transition-transform duration-300 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.82 0.18 210 / 0.18), transparent 60%)",
        }}
      />

      {/* Preview */}
      <div className={`relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} border border-white/10`}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
            <span>● ● ●</span>
            <span>{p.category}</span>
          </div>
          <div>
            <div className="text-5xl font-black text-white/90 leading-none mix-blend-overlay">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
        </div>
        <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-white/20 blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative">
        <h3 className="flex items-start justify-between gap-3 text-xl font-semibold leading-tight">
          {p.title}
          <FiArrowUpRight className="mt-1 shrink-0 text-[var(--neon-cyan)] transition-transform group-hover:rotate-45" />
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-[var(--neon-cyan)] transition-colors"
          >
            <FiGithub /> Code
          </a>
          <span className="text-white/10">·</span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-[var(--neon-cyan)] transition-colors"
          >
            <FiExternalLink /> Live
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-label">03 · Projects</span>
            <h2 className="mt-6 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
              Things I've <span className="text-gradient">built & broken</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A mix of academic, personal and creative experiments — built to learn, ship and iterate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
