interface SkillCardProps {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

export function SkillCard({ name, level, icon }: SkillCardProps) {
  const getLevelValue = () => {
    switch (level) {
      case "beginner":
        return 1;
      case "intermediate":
        return 2;
      case "advanced":
        return 4;
      case "expert":
        return 5;
    }
  };

  const levelValue = getLevelValue();
  const levelColors = {
    beginner: "bg-slate-600",
    intermediate: "bg-slate-500",
    advanced: "bg-primary-accent",
    expert: "bg-primary-accent",
  };

  const levelBars = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    isFilled: i < levelValue,
  }));

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-lg font-semibold text-primary-text">{name}</h3>
      </div>
      <div className="flex gap-1">
        {levelBars.map((bar) => (
          <div
            key={bar.id}
            className={`h-2 w-full rounded ${
              bar.isFilled ? levelColors[level] : "bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
