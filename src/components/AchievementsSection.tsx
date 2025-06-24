import Icon from "@/components/ui/icon";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "FIRST_BLOOD",
      description: "Первая победа",
      icon: "Sword",
      unlocked: true,
      rarity: "COMMON",
      color: "text-retro-green",
    },
    {
      title: "SPEED_DEMON",
      description: "Скоростное прохождение",
      icon: "Zap",
      unlocked: true,
      rarity: "RARE",
      color: "text-retro-cyan",
    },
    {
      title: "COLLECTOR",
      description: "100% коллекция",
      icon: "Star",
      unlocked: true,
      rarity: "EPIC",
      color: "text-retro-purple",
    },
    {
      title: "LEGEND",
      description: "Мастер всех игр",
      icon: "Crown",
      unlocked: false,
      rarity: "LEGENDARY",
      color: "text-retro-amber",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 neon-text text-retro-amber">
        {"< ДОСТИЖЕНИЯ />"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`bg-retro-dark pixel-border p-6 text-center transition-all duration-300 hover:shadow-neon relative overflow-hidden ${
              achievement.unlocked
                ? `border-retro-green hover:scale-105`
                : "border-gray-600 opacity-60"
            }`}
          >
            {/* Rarity indicator */}
            <div
              className={`absolute top-2 right-2 text-xs font-mono px-2 py-1 pixel-border ${
                achievement.rarity === "COMMON"
                  ? "border-retro-green text-retro-green"
                  : achievement.rarity === "RARE"
                    ? "border-retro-cyan text-retro-cyan"
                    : achievement.rarity === "EPIC"
                      ? "border-retro-purple text-retro-purple"
                      : "border-retro-amber text-retro-amber"
              }`}
            >
              {achievement.rarity}
            </div>

            {/* Achievement icon */}
            <div
              className={`mb-4 flex justify-center ${achievement.color} ${
                achievement.unlocked ? "animate-pixel-pulse" : "grayscale"
              }`}
            >
              <Icon name={achievement.icon as any} size={48} />
            </div>

            {/* Title */}
            <h3
              className={`text-lg font-bold mb-2 font-mono ${
                achievement.unlocked ? "text-white neon-text" : "text-gray-500"
              }`}
            >
              {achievement.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm mb-4 ${
                achievement.unlocked ? "text-retro-cyan" : "text-gray-600"
              }`}
            >
              {achievement.description}
            </p>

            {/* Status */}
            <div
              className={`font-mono text-xs ${
                achievement.unlocked ? "text-retro-green" : "text-gray-500"
              }`}
            >
              {achievement.unlocked ? "✓ UNLOCKED" : "✗ LOCKED"}
            </div>

            {/* Unlock effect */}
            {achievement.unlocked && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-retro-amber animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Achievement progress */}
      <div className="mt-12 text-center">
        <div className="max-w-md mx-auto bg-retro-dark pixel-border border-retro-amber p-6">
          <h3 className="text-xl font-bold text-retro-amber mb-4 neon-text">
            ПРОГРЕСС ДОСТИЖЕНИЙ
          </h3>
          <div className="flex justify-between text-white mb-2">
            <span>3 из 4</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-retro-darker h-6 pixel-border border-retro-green">
            <div className="bg-gradient-to-r from-retro-green to-retro-amber h-full w-3/4 animate-pixel-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
