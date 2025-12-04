interface WorkCardProps {
  title: string;
  description: string;
  techStack: string[];
  effort?: string;
  githubUrl?: string;
}

export function WorkCard({
  title,
  description,
  techStack,
  effort,
  githubUrl,
}: WorkCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-primary-text mb-3">{title}</h3>
      <p className="text-primary-muted mb-6">{description}</p>

      {effort && (
        <div className="mb-6 pb-6 border-b border-slate-700">
          <p className="text-sm text-primary-muted mb-2">工夫した点</p>
          <p className="text-primary-text">{effort}</p>
        </div>
      )}

      <div className="mb-6">
        <p className="text-sm text-primary-muted mb-2">技術スタック</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-accent bg-opacity-20 text-primary-accent rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary-accent hover:underline"
        >
          GitHub を見る →
        </a>
      )}
    </div>
  );
}
