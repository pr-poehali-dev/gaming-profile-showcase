import Icon from "@/components/ui/icon";

const GamesShowcase = () => {
  const games = [
    {
      title: "PIXEL_QUEST",
      status: "COMPLETED",
      progress: 100,
      icon: "🗡️",
      color: "border-retro-green",
      bgColor: "bg-retro-green",
    },
    {
      title: "SPACE_RUNNER",
      status: "PLAYING",
      progress: 75,
      icon: "🚀",
      color: "border-retro-cyan",
      bgColor: "bg-retro-cyan",
    },
    {
      title: "RETRO_ARCADE",
      status: "NEXT",
      progress: 0,
      icon: "🕹️",
      color: "border-retro-purple",
      bgColor: "bg-retro-purple",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 neon-text text-retro-green">
        {"< ИГРОВАЯ_БИБЛИОТЕКА />"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className={`bg-retro-dark pixel-border ${game.color} p-6 hover:shadow-neon-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${game.bgColor} ${Math.random() > 0.7 ? "opacity-50" : "opacity-0"}`}
                    style={{
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Game icon */}
              <div className="text-6xl mb-4 text-center animate-bounce">
                {game.icon}
              </div>

              {/* Game title */}
              <h3 className="text-xl font-bold text-white mb-2 text-center font-mono">
                {game.title}
              </h3>

              {/* Status */}
              <div
                className={`text-center mb-4 font-mono text-sm ${
                  game.status === "COMPLETED"
                    ? "text-retro-green"
                    : game.status === "PLAYING"
                      ? "text-retro-cyan"
                      : "text-retro-purple"
                }`}
              >
                {"> " + game.status}
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-retro-amber mb-1">
                  <span>PROGRESS</span>
                  <span>{game.progress}%</span>
                </div>
                <div className="w-full bg-retro-darker h-3 pixel-border border-retro-amber">
                  <div
                    className={`${game.bgColor} h-full transition-all duration-1000`}
                    style={{ width: `${game.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action button */}
              <button className="retro-button w-full group-hover:animate-glitch">
                {game.status === "COMPLETED"
                  ? "REPLAY"
                  : game.status === "PLAYING"
                    ? "CONTINUE"
                    : "START"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesShowcase;
