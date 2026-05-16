import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 md:flex-row md:px-10">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Designed & built with curiosity.
        </p>
      </div>
    </footer>
  );
}
