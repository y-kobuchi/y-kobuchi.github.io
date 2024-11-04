interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
