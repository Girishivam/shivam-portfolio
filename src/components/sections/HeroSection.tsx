import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";
import { profile } from "@/data/portfolio";
import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const socials = [
  { Icon: FiGithub, href: profile.socials.github, label: "GitHub" },
  { Icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { Icon: FiTwitter, href: profile.socials.twitter, label: "Twitter" },
  { Icon: FiInstagram, href: profile.socials.instagram, label: "Instagram" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/30 to-background" />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
            <span className="block text-gradient">{profile.name}</span>
            <span className="mt-3 block shimmer-text text-2xl font-medium md:text-3xl lg:text-4xl">
              Building the future, one pixel at a time.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-mono text-sm uppercase tracking-[0.2em] text-[var(--neon-cyan)] md:text-base">
            {profile.role}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.tagline}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="magnetic-btn">
              <FiMail className="text-lg" />
              Get in touch
            </a>
            <a href="\resume (2).pdf" download className="ghost-btn">
              <FiDownload className="text-lg" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground backdrop-blur transition-all hover:border-[var(--neon-cyan)] hover:text-foreground hover:shadow-[0_0_20px_var(--neon-cyan)]"
              >
                <Icon className="text-base transition-transform group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div className="glass relative w-64 rounded-2xl p-5 neon-border animate-float">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
              ./status
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Focus</span><span>Full Stack + AI</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Learning</span><span>AWS · ML</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Stack</span><span>React · Node</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Vibe</span><span className="text-[var(--neon-cyan)]">Cosmic ✦</span></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <FiArrowDown />
          </motion.div>
        </div>
      </motion.a>
    </section>
  );
}
