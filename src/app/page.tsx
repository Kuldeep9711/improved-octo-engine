
import FeaturedCourses from "@/components/FeaturedCourses";
import { ThemeToggle } from "@/components/themes/theme-button";
import HeroSection from "@/components/ui/HeroSection";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen  antialiased bg-grid-white/[0.02] ">
      <ThemeToggle />
      <HeroSection />
      < FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
