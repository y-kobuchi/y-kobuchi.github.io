import Link from "next/link";

export default function Career() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-green-700 text-center">
        職務経歴
      </h1>
      <div className="space-y-8">
        {/* フリーランス EASM */}
        <div className="bg-white rounded-xl shadow p-6 border-l-8 border-green-400 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
              2024年10月～現在
            </span>
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
              フリーランス
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
              <span role="img" aria-label="cloud">
                ☁️
              </span>
              国産EASMサービス業務委託開発
            </h2>
            <ul className="list-disc pl-5 text-sm mb-2 text-gray-700">
              <li>
                eTLD+1にあたるドメインをもとに関連IT資産・リスク発見サービス
              </li>
              <li>インフラコード化、プログラムコーディング、単体テスト</li>
              <li>
                アジャイル開発、テストコード導入、インフラ～フロント一貫開発
              </li>
              <li>TerraformでAWS SNS/Lambda/Alarm連携</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                Python
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                TypeScript
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                AWS
              </span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                Terraform
              </span>
            </div>
          </div>
        </div>
        {/* S社 */}
        <div className="bg-white rounded-xl shadow p-6 border-l-8 border-gray-400 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
              2020年4月～2024年10月
            </span>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
              S社
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
              <span role="img" aria-label="office">
                🏢
              </span>
              ソフトウェアシステム開発
            </h2>
            <ul className="list-disc pl-5 text-sm mb-2 text-gray-700">
              <li>
                幼稚園バス見守りアカウント移行、次世代通信ドラレコ、人流分析実証実験など複数PJ
              </li>
              <li>詳細設計、開発、テスト、インフラコード化、Runbook整備</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                Python
              </span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                ShellScript
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                AWS
              </span>
            </div>
          </div>
        </div>
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
