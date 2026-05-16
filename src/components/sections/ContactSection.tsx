import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiCheck } from "react-icons/fi";

const socials = [
  { Icon: FiGithub, href: profile.socials.github, label: "GitHub" },
  { Icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { Icon: FiTwitter, href: profile.socials.twitter, label: "Twitter" },
  { Icon: FiInstagram, href: profile.socials.instagram, label: "Instagram" },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — wire up EmailJS by setting your service/template IDs.
    // import emailjs from '@emailjs/browser'; emailjs.sendForm(...)
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">06 · Contact</span>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Let's build something <span className="text-gradient">stellar</span>.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Recruiter, collaborator, or just curious — drop a message. I usually reply within a day.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 text-base text-foreground hover:text-[var(--neon-cyan)] transition-colors"
            >
              <FiMail /> {profile.email}
            </a>

            <div className="mt-8 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:border-[var(--neon-cyan)] hover:text-foreground hover:shadow-[0_0_20px_var(--neon-cyan)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl glass-strong p-7 md:p-9 neon-border"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-purple)]/20 blur-3xl" />
            <div className="relative space-y-5">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Subject" name="subject" placeholder="What's this about?" />
              <Field label="Message" name="message" placeholder="Tell me a bit..." textarea />

              <button
                type="submit"
                disabled={loading || sent}
                className="magnetic-btn w-full disabled:opacity-70"
              >
                {sent ? (<><FiCheck /> Sent — talk soon</>) : loading ? "Sending…" : (<><FiSend /> Send message</>)}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[var(--neon-cyan)] focus:shadow-[0_0_0_3px_oklch(0.82_0.18_210/0.15),0_0_20px_oklch(0.82_0.18_210/0.35)]";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required rows={4} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
