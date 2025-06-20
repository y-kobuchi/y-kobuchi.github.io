import Link from "next/link";
import { FaCar, FaChartLine, FaCloud, FaTools } from "react-icons/fa";

const projects = [
  {
    title: "センサーデータ分析・通知システム",
    icon: <FaCloud className="text-blue-400 text-xl" />,
    period: "2023年～2024年",
    tech: ["AWS", "CloudFormation", "Route53", "Certificate Manager"],
    points: [
      "センサーデータをデータレイクに保存し、閾値超過時に自動通知",
      "ダッシュボード機能実装・移行自動化・証明書発行自動化",
    ],
    desc: "IoTセンサーからのデータをAWS上で一元管理し、リアルタイムで異常検知・通知。運用自動化も推進。",
  },
  {
    title: "次世代通信ドラレコ開発",
    icon: <FaCar className="text-green-500 text-xl" />,
    period: "2022年～2023年",
    tech: ["AWS", "CloudFormation", "Lambda", "IoT Core"],
    points: [
      "クラウド運用型ドラレコシステム設計・開発",
      "リソース稼働制御でコスト60%削減・運用効率化",
    ],
    desc: "車載デバイスとクラウドを連携し、効率的なデータ収集・分析・コスト最適化を実現。",
  },
  {
    title: "人流分析実証実験",
    icon: <FaChartLine className="text-pink-500 text-xl" />,
    period: "2021年～2022年",
    tech: ["AI", "VPC", "セキュリティグループ", "Python"],
    points: [
      "駅構内カメラ映像をAIで分析し人流を可視化",
      "VPCピアリング・動画モザイクツール開発も担当",
    ],
    desc: "AI映像解析とクラウド連携で、リアルな人流データを可視化・分析。セキュリティにも配慮。",
  },
];

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-extrabold mb-10 text-green-700 text-center tracking-tight flex items-center justify-center gap-2">
        <FaTools className="inline-block text-green-400 text-2xl" />
        代表プロジェクト
      </h1>
      <div className="grid gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-6 border border-green-200 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3 mb-2">
              {p.icon}
              <h2 className="text-xl font-bold text-green-700 flex-1">
                {p.title}
              </h2>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                {p.period}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="list-disc pl-5 text-gray-700 text-sm mb-2">
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/">
          <span className="inline-block bg-gray-200 text-green-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition shadow cursor-pointer">
            ← ホームに戻る
          </span>
        </Link>
      </div>
    </section>
  );
}
