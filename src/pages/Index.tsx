import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TechSection } from "@/components/TechSection";
import { CommunitySection } from "@/components/CommunitySection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TechSection />
        <CommunitySection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;