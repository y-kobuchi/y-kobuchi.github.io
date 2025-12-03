import { SectionTitle } from "../components/SectionTitle";

export default function About() {
  return (
    <main className="min-h-screen bg-primary-bg text-primary-text py-24 px-6 pt-32">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About" subtitle="経歴・背景" />

        {/* 職務要約 */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-primary-text mb-4">職務要約</h3>
          <p className="text-primary-muted leading-relaxed mb-4">
            シーズ・ラボで4年間、AWS
            を利用したシステム開発に従事し、サーバーサイドの設計・開発・テストを担当してきました。
            その後、2024年10月からフリーランスに転向し、セキュアスカイ・テクノロジーにて業務委託として開発を進めています。
          </p>
          <p className="text-primary-muted leading-relaxed">
            OpenAPI を用いた API Gateway と Lambda の開発が得意で、API
            設計からデータベース設計まで一貫して担当した経験があります。
          </p>
        </section>

        {/* 経歴 */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-primary-text mb-8">経歴</h3>
          <div className="space-y-8">
            {[
              {
                id: "job-1",
                period: "2024年10月～現在",
                title: "フリーランスエンジニア",
                company: "セキュアスカイ・テクノロジー（業務委託）",
                description:
                  "国産EASM（External Attack Surface Management）サービスの開発に従事。インフラコード化、バックエンド、フロントエンド開発を一貫して担当。アジャイル開発で2週間ごとのサイクルで開発を進行。",
              },
              {
                id: "job-2",
                period: "2020年4月～2024年10月",
                title: "ソフトウェアシステムエンジニア",
                company: "株式会社シーズ・ラボ",
                description:
                  "AWS を使用したシステム開発に4年間従事。バス見守りシステムのアカウント移行、ドラレコシステム、人流分析プロジェクトなど、複数のプロジェクトでサーバーサイド開発を担当。",
              },
              {
                id: "job-3",
                period: "2020年4月～2021年4月",
                title: "新人研修・OJT",
                company: "株式会社シーズ・ラボ",
                description:
                  "プログラミングの基礎、AWS の基本サービスを習得。最初のプロジェクトとして AI 利用システムの開発に参画。",
              },
            ].map((item) => (
              <div key={item.id} className="border-l-2 border-primary-accent pl-6">
                <p className="text-sm text-primary-accent font-semibold mb-2">{item.period}</p>
                <h4 className="text-lg font-bold text-primary-text mb-1">{item.title}</h4>
                <p className="text-sm text-primary-muted mb-2">{item.company}</p>
                <p className="text-primary-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* エンジニアとしての強み */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-primary-text mb-8">エンジニアとしての強み</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-primary-accent mb-2">
                多種多様なサービス経験
              </h4>
              <p className="text-primary-muted leading-relaxed">
                AWS の主要サービス（EC2、Lambda、CloudFormation、API Gateway、RDS、DynamoDB、S3
                等）を常に使用してきており、サービスへの理解も深いです。
                開発工程としては詳細設計から結合テストまでの経験があります。インフラはコード化されており、ソースの改修実績も豊富です。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-accent mb-2">新技術への適応力</h4>
              <p className="text-primary-muted leading-relaxed">
                複数のプロジェクトで様々な環境や新技術に触れ、ドキュメント理解や有識者への質問を通じて工数削減に工夫しています。
                後輩や後任がスムーズに業務に従事できるような仕組み作りにも力を入れています。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-accent mb-2">コード品質と可読性</h4>
              <p className="text-primary-muted leading-relaxed">
                他者が読んでもわかりやすいコード記述を心がけています。オブジェクト指向を意識したフォルダ構成、詳細なコメント、充実したドキュメント作成を大切にしています。
              </p>
            </div>
          </div>
        </section>

        {/* 資格 */}
        <section>
          <h3 className="text-2xl font-bold text-primary-text mb-6">資格</h3>
          <ul className="space-y-3 text-primary-muted">
            {[
              {
                id: "cert-1",
                name: "AWS Certified Cloud Practitioner",
                date: "2023年4月取得",
              },
              {
                id: "cert-2",
                name: "基本情報技術者試験",
                date: "2022年6月合格",
              },
              {
                id: "cert-3",
                name: "普通自動車第一種運転免許",
                date: "2017年8月取得",
              },
            ].map((cert) => (
              <li key={cert.id} className="flex items-start gap-4">
                <span className="text-primary-accent font-bold mt-1">✓</span>
                <div>
                  <div className="text-primary-text font-semibold">{cert.name}</div>
                  <div className="text-sm text-primary-muted">{cert.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
