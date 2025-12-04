import Link from "next/link";
import { SectionTitle } from "./components/SectionTitle";

export default function Home() {
  return (
    <main className="bg-primary-bg text-primary-text">
      {/* メインビジュアル */}
      <section className="py-24 px-6 text-center pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-primary-text">
            小渕 佑真
          </h1>
          <p className="text-2xl text-primary-accent mb-8 font-semibold">
            Full Stack Engineer
          </p>
          <p className="text-xl text-primary-muted mb-12 leading-relaxed max-w-2xl mx-auto">
            AWS・Python・TypeScript
            を中心に、スケーラブルで信頼性の高いシステムを構築します。
            フリーランスエンジニアとして、要件定義から運用まで一貫してサポートします。
          </p>

          {/* CTA ボタン */}
          <div className="flex gap-6 justify-center">
            <Link
              href="/works"
              className="px-8 py-3 bg-primary-accent text-primary-bg font-semibold rounded-lg hover:opacity-90 transition"
            >
              実績を見る
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-primary-accent text-primary-accent font-semibold rounded-lg hover:bg-primary-accent hover:text-primary-bg transition"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* スキルダイジェスト */}
      <section className="py-24 px-6 bg-slate-900 bg-opacity-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="スキル" subtitle="主要な技術スタック" />

          <div className="grid grid-cols-3 gap-6 mb-12">
            {[
              { name: "AWS", level: "expert" },
              { name: "Python", level: "expert" },
              { name: "TypeScript", level: "advanced" },
            ].map((skill) => {
              const getLevelValue = () => {
                switch (skill.level) {
                  case "expert":
                    return 5;
                  case "advanced":
                    return 4;
                  default:
                    return 3;
                }
              };
              const levelValue = getLevelValue();
              const levelBars = Array.from({ length: 5 }, (_, i) => ({
                id: i,
                isFilled: i < levelValue,
              }));

              return (
                <div
                  key={skill.name}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-primary-text mb-2">
                    {skill.name}
                  </h3>
                  <div className="flex gap-1 justify-center">
                    {levelBars.map((bar) => (
                      <div
                        key={bar.id}
                        className={`h-2 w-2 rounded-full ${
                          bar.isFilled ? "bg-primary-accent" : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/skills"
              className="text-primary-accent hover:underline font-semibold"
            >
              全スキルを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 実績紹介 */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="実績" subtitle="これまで携わったプロジェクト" />

          <div className="grid grid-cols-1 gap-6 mb-12">
            {[
              {
                id: "work-1",
                title:
                  "国産EASM（External Attack Surface Management）サービス開発",
                tech: [
                  "Python",
                  "TypeScript",
                  "React",
                  "PostgreSQL",
                  "DynamoDB",
                  "AWS Lambda",
                  "API Gateway",
                  "Terraform",
                  "GitHub Actions",
                ],
              },
              {
                id: "work-2",
                title: "幼稚園バス見守りシステム アカウント移行",
                tech: ["Python", "AWS Lambda", "API Gateway", "CloudFormation"],
              },
              {
                id: "work-3",
                title: "BtoB バスロケツール開発",
                tech: ["Python", "PostgreSQL", "AWS Lambda", "API Gateway"],
              },
            ].map((work) => (
              <div
                key={work.id}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-primary-text mb-3">
                  {work.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {work.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-accent bg-opacity-20 text-primary-accent rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/works"
              className="inline-block px-8 py-3 border border-primary-accent text-primary-accent font-semibold rounded-lg hover:bg-primary-accent hover:text-primary-bg transition"
            >
              全プロジェクトを確認する →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
