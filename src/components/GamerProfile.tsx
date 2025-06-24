import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import GamesShowcase from "./GamesShowcase";
import AchievementsSection from "./AchievementsSection";

const GamerProfile = () => {
  return (
    <div className="min-h-screen bg-retro-darker crt-effect">
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        <StatsSection />
        <GamesShowcase />
        <AchievementsSection />
      </div>
    </div>
  );
};

export default GamerProfile;
