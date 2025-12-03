import { SectionTitle } from "../components/SectionTitle";
import { WorkCard } from "../components/WorkCard";

export default function Works() {
  const works = [
    {
      id: "work-1",
      title: "幼稚園バス見守りシステム アカウント移行",
      period: "2024年2月～2024年10月 / 2024年10月～現在",
      description:
        "AWS アカウント移行プロジェクト、及び現在進行中の国産EASM（External Attack Surface Management）サービスの開発に従事。",
      techStack: [
        "Python",
        "TypeScript",
        "Angular",
        "PostgreSQL",
        "DynamoDB",
        "AWS Lambda",
        "API Gateway",
        "Terraform",
      ],
      effort:
        "API Gateway のカスタムドメイン同一リージョン制限を考慮し、別リージョンを使用する移行手法を提案・実現。証明書の作成・検証を CloudFormation 化し自動化。Terraform を使用したインフラコード化、GitHub Actions による CI/CD パイプライン構築を担当。",
      githubUrl: "https://github.com/y-kobuchi",
    },
    {
      id: "work-2",
      title: "BtoB バスロケツール開発",
      period: "2023年4月～2024年2月",
      description:
        "公共交通機関データを活用したバスロケーションシステムの開発。API 仕様書作成からデータベース設計まで一貫して担当。",
      techStack: [
        "Python",
        "PostgreSQL",
        "AWS Lambda",
        "API Gateway",
        "CloudFormation",
        "GitLab CI/CD",
      ],
      effort:
        "OpenAPI を用いた REST API 設計・実装。GTFS（公共交通機関のオープンフォーマット）に関する知識を習得し、Google への時刻表データ公開を実現。発注元との仕様調整を効率化するため事前 QA 資料を作成。",
      githubUrl: "https://github.com/y-kobuchi",
    },
    {
      id: "work-3",
      title: "BtoC ドラレコ開発（サーバーサイド）",
      period: "2022年7月～2023年4月",
      description:
        "複数企業が関わるドライブレコーダーシステムの開発。サーバーサイド開発を主に担当し、API 設計・実装、複数企業の仲介・仕様調整を実施。",
      techStack: [
        "Python",
        "DynamoDB",
        "AWS Lambda",
        "API Gateway",
        "CloudFormation",
        "AWS SNS / SES",
      ],
      effort:
        "API 実装を主導。複数企業のデータ連携を調整し、API 設計を最適化。CloudFormation によるインフラの自動化で構築時間を短縮。",
      githubUrl: "https://github.com/y-kobuchi",
    },
    {
      id: "work-4",
      title: "研究開発 バス乗客人物判定システム",
      period: "2021年3月～2022年7月",
      description:
        "動画からの人物判定と画像解析を行うシステムの研究開発。画像処理ツール、モザイク加工機能の開発を担当。",
      techStack: ["Python", "OpenCV", "AWS Lambda", "AWS VPC", "CloudFormation", "SORACOM"],
      effort:
        "動画から1フレーム毎の画像を切り出し、OpenCV を使用してモザイク加工。VPC ピアリング設定で特定 IP アドレスのみを許可。SORACOM を使用した通信制御を実現。現地実証実験対応も実施。",
      githubUrl: "https://github.com/y-kobuchi",
    },
    {
      id: "work-5",
      title: "研究開発 AI 利用システム",
      period: "2020年10月～2021年3月",
      description:
        "AI を活用したシステム開発。フロントエンドからバックエンドまで幅広く携わった新卒初プロジェクト。",
      techStack: ["Python", "Tornado", "HTML/CSS", "JavaScript", "PostgreSQL", "AWS EC2"],
      effort:
        "3画面の UI 開発。バックエンドから取得したデータを可視化。Python フレームワーク Tornado の使い方を習得。",
      githubUrl: "https://github.com/y-kobuchi",
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg text-primary-text py-24 px-6 pt-32">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Works" subtitle="プロジェクト実績" />

        <div className="mb-12 p-6 bg-slate-900 border border-slate-700 rounded-lg">
          <p className="text-primary-muted leading-relaxed">
            4年以上の AWS クラウド開発経験。API
            設計・実装、データベース設計、インフラストラクチャ・アズ・コード化など、
            要件定義から本番運用まで幅広い工程に携わってきました。
          </p>
        </div>

        <div className="space-y-8">
          {works.map((work) => (
            <div key={work.id}>
              <div className="mb-4">
                <p className="text-sm text-primary-accent font-semibold">{work.period}</p>
              </div>
              <WorkCard {...work} />
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-900 border border-slate-700 rounded-lg text-center">
          <p className="text-primary-muted mb-4">
            その他のプロジェクトや詳細についてのお問い合わせは、お気軽にご連絡ください。
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-accent text-primary-bg font-semibold rounded-lg hover:opacity-90 transition"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </main>
  );
}
