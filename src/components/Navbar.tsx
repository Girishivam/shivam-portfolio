import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <Link to="/" className="group flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_8px_var(--neon-cyan)] group-hover:animate-pulse" />
            <span className="text-gradient">Shivam</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-flex magnetic-btn !px-5 !py-2 text-sm">
            Hire me
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            <span className="relative block h-2.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-foreground transition-transform ${
                  open ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile */}
        {open && (
          <div className="mt-3 rounded-2xl glass-strong p-4 md:hidden">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="magnetic-btn mt-2">
                Hire me
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
