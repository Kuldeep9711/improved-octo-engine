
import FeaturedCourses from "@/components/FeaturedCourses";
import MusicScchoolTestimonialcards from "@/components/Testimonialcards";
import { ThemeToggle } from "@/components/themes/theme-button";
import HeroSection from "@/components/ui/HeroSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Upcomingwebinar from "@/components/Upcomingwebinar";
import Instructor from "@/components/Instructor";


export default function Home() {
  return (
    <main className="min-h-screen  antialiased bg-grid-white/[0.02] ">
      <ThemeToggle />
      <HeroSection />
      < FeaturedCourses />
      <WhyChooseUs />
      <MusicScchoolTestimonialcards />
      <Upcomingwebinar />
       <Instructor />

    </main>
  );
}
