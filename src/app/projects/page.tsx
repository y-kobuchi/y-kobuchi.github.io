import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "プロジェクト一", description: "プロジェクト一の説明です。" },
  { title: "プロジェクト二", description: "プロジェクト二の説明です。" },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1>プロジェクト</h1>
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <Link href="/">← ホームに戻る</Link>
    </div>
  );
}
