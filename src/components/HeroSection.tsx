import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="text-center py-16 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-retro-purple text-6xl animate-pulse">
          {"<"}
        </div>
        <div className="absolute top-20 right-20 text-retro-cyan text-4xl animate-bounce">
          {">"}
        </div>
        <div className="absolute bottom-20 left-20 text-retro-green text-5xl animate-ping">
          □
        </div>
        <div className="absolute bottom-10 right-10 text-retro-amber text-3xl animate-spin">
          ◇
        </div>
      </div>

      <div className="relative z-10">
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-retro-purple to-retro-cyan pixel-border border-retro-green shadow-neon-lg rounded-pixel relative">
          <div className="w-full h-full flex items-center justify-center text-6xl animate-pixel-pulse">
            🎮
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-retro-green rounded-full animate-pulse"></div>
        </div>

        {/* Name and title */}
        <h1
          className="text-6xl font-bold mb-4 neon-text text-retro-purple glitch-text text-center"
          data-text="ИГРОК_2024"
        >
          ♰bastarddemon♰
        </h1>

        <div className="text-retro-cyan text-xl mb-2 font-mono"></div>

        <div className="text-retro-green text-lg mb-8 animate-scroll-left whitespace-nowrap mx-0">
          •● W E L C O M E- T O -M Y -P R O F I L E ●•
        </div>

        {/* Quick stats */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-retro-amber neon-text">
              LVL
            </div>
            <div className="text-4xl font-bold text-white">999</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-retro-pink neon-text">
              XP
            </div>
            <div className="text-4xl font-bold text-white">99,999</div>
          </div>
          <div className="text-center">
            <Icon
              name="Zap"
              className="text-retro-green text-3xl mx-auto mb-1"
            />
            <div className="text-xl font-bold text-retro-green">ONLINE</div>
          </div>
        </div>

        {/* Status bar */}
        <div className="max-w-md mx-auto bg-retro-dark pixel-border border-retro-purple p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-retro-cyan">HP</span>
            <span className="text-white">100/100</span>
          </div>
          <div className="w-full bg-retro-darker h-4 pixel-border border-retro-green mb-3">
            <div className="bg-gradient-to-r from-retro-green to-retro-cyan h-full w-full animate-pixel-pulse"></div>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-retro-amber">ENERGY</span>
            <span className="text-white">85/100</span>
          </div>
          <div className="w-full bg-retro-darker h-4 pixel-border border-retro-amber">
            <div className="bg-gradient-to-r from-retro-amber to-retro-pink h-full w-4/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
