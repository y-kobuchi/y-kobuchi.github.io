import { SectionTitle } from "../components/SectionTitle";
import { SkillCard } from "../components/SkillCard";

export default function Skills() {
  const skillsByCategory = [
    {
      id: "cat-1",
      category: "プログラミング言語",
      skills: [
        { name: "Python", level: "expert" as const, period: "4年2ヶ月" },
        {
          name: "TypeScript",
          level: "intermediate" as const,
          period: "10ヶ月",
        },
        {
          name: "JavaScript",
          level: "intermediate" as const,
          period: "1年6ヶ月",
        },
        {
          name: "ShellScript",
          level: "advanced" as const,
          period: "3年2ヶ月",
        },
      ],
    },
    {
      id: "cat-2",
      category: "AWS サービス",
      skills: [
        { name: "Lambda", level: "expert" as const },
        { name: "API Gateway", level: "expert" as const },
        { name: "CloudFormation", level: "advanced" as const },
        { name: "DynamoDB", level: "advanced" as const },
        { name: "RDS", level: "advanced" as const },
        { name: "S3", level: "advanced" as const },
        { name: "EC2", level: "advanced" as const },
        { name: "VPC", level: "advanced" as const },
        { name: "Route53", level: "advanced" as const },
        { name: "SNS / SQS", level: "advanced" as const },
        { name: "CloudWatch", level: "advanced" as const },
        { name: "Step Functions", level: "intermediate" as const },
      ],
    },
    {
      id: "cat-3",
      category: "データベース",
      skills: [
        {
          name: "PostgreSQL",
          level: "intermediate" as const,
          period: "4年2ヶ月",
        },
        { name: "MySQL", level: "intermediate" as const, period: "1年4ヶ月" },
        { name: "DynamoDB", level: "advanced" as const },
        { name: "SQLite", level: "intermediate" as const },
      ],
    },
    {
      id: "cat-4",
      category: "フロントエンド",
      skills: [
        { name: "Angular", level: "advanced" as const },
        { name: "HTML/CSS", level: "advanced" as const },
        { name: "JavaScript", level: "advanced" as const },
        { name: "React", level: "intermediate" as const },
      ],
    },
    {
      id: "cat-5",
      category: "DevOps / インフラ",
      skills: [
        { name: "Terraform", level: "advanced" as const },
        { name: "Docker", level: "intermediate" as const },
        { name: "CI/CD（GitLab Actions）", level: "advanced" as const },
        { name: "GitHub Actions", level: "intermediate" as const },
        { name: "Linux", level: "advanced" as const },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg text-primary-text py-24 px-6 pt-32">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Skills" subtitle="保有スキル・技術スタック" />

        <div className="mb-12 p-6 bg-slate-900 border border-slate-700 rounded-lg">
          <p className="text-primary-muted leading-relaxed mb-4">
            4年以上の実務経験を積んだ技術スタックです。AWS を中心としたクラウドシステム開発、 Python
            によるバックエンド開発、Terraform
            によるインフラストラクチャ・アズ・コード化が得意分野です。
          </p>
          <p className="text-primary-muted leading-relaxed">
            新しい技術にも積極的に取り組んでおり、TypeScript、Next.js、playwright
            などの導入経験があります。
          </p>
        </div>

        {skillsByCategory.map((category) => (
          <section key={category.id} className="mb-16">
            <h3 className="text-2xl font-bold text-primary-text mb-6">{category.category}</h3>
            <div className="grid grid-cols-2 gap-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="relative">
                  <SkillCard name={skill.name} level={skill.level} />
                  {skill.period && (
                    <p className="text-xs text-primary-muted mt-2">{skill.period}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* 補足 */}
        <section className="mt-16 pt-12 border-t border-slate-700">
          <h3 className="text-xl font-bold text-primary-text mb-6">レベル定義</h3>
          <ul className="space-y-4 text-primary-muted">
            <li className="flex gap-3">
              <span className="text-primary-accent font-bold">●</span>
              <div>
                <strong className="text-primary-text">Expert：</strong>
                5年以上の実務経験あり、新人指導・コードレビュー可能なレベル
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-accent font-bold">●</span>
              <div>
                <strong className="text-primary-text">Advanced：</strong>
                2年以上の実務経験あり、複雑な案件や設計対応が可能なレベル
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-accent font-bold">●</span>
              <div>
                <strong className="text-primary-text">Intermediate：</strong>
                基本的な知識と経験あり、サポート環境での対応が可能なレベル
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
