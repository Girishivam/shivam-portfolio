import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivam Giri — Full Stack Developer · AI Enthusiast · Cloud Learner" },
      {
        name: "description",
        content:
          "Portfolio of Shivam Giri, a B.Tech CS-AI student (2026) building immersive web experiences, exploring AI and AWS cloud.",
      },
      { property: "og:title", content: "Shivam Giri — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Full Stack Developer, AI Enthusiast and Creative Technologist. Student dev shipping real projects.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <SmoothScroll />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
