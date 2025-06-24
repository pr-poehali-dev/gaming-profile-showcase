import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Clock",
      label: "Часов играл",
      value: "1,337",
      color: "text-retro-purple",
    },
    {
      icon: "Trophy",
      label: "Игр пройдено",
      value: "999",
      color: "text-retro-amber",
    },
    {
      icon: "Target",
      label: "Достижений",
      value: "247",
      color: "text-retro-green",
    },
    {
      icon: "Flame",
      label: "Дней подряд",
      value: "42",
      color: "text-retro-pink",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 neon-text text-retro-cyan">
        {"< СТАТИСТИКА />"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-retro-dark pixel-border border-retro-cyan p-6 text-center hover:shadow-neon transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`${stat.color} mb-4 flex justify-center`}>
              <Icon
                name={stat.icon as any}
                size={48}
                className="animate-pulse"
              />
            </div>
            <div className="text-3xl font-bold text-white mb-2 neon-text">
              {stat.value}
            </div>
            <div className="text-retro-cyan font-mono text-sm uppercase tracking-wide">
              {stat.label}
            </div>

            {/* Decorative pixel elements */}
            <div className="flex justify-center mt-4 space-x-1">
              <div className={`w-2 h-2 bg-retro-green animate-ping`}></div>
              <div
                className={`w-2 h-2 bg-retro-amber animate-ping`}
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className={`w-2 h-2 bg-retro-purple animate-ping`}
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
