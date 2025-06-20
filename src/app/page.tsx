import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <div className="flex flex-col items-center mb-12">
        <Image
          src="/globe.svg"
          alt="Profile Globe"
          width={96}
          height={96}
          className="mb-4 drop-shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-2 text-green-700 tracking-tight text-center">
          小渕 佑真
          <br className="sm:hidden" />
          <span className="block text-2xl font-bold text-gray-700 mt-2">
            Engineer Portfolio
          </span>
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-xl mb-4">
          AWSを中心としたクラウド開発・インフラ自動化・データ分析基盤構築が得意なフルスタックエンジニアのポートフォリオです。
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <Link href="/about">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 transition cursor-pointer">
              自己紹介
            </span>
          </Link>
          <Link href="/skills">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 transition cursor-pointer">
              スキル・資格
            </span>
          </Link>
          <Link href="/career">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 transition cursor-pointer">
              職務経歴
            </span>
          </Link>
          <Link href="/projects">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 transition cursor-pointer">
              プロジェクト
            </span>
          </Link>
          <Link href="/contact">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 transition cursor-pointer">
              お問い合わせ
            </span>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 職務要約 */}
        <section className="bg-white rounded-xl shadow p-6 border border-green-100 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-green-700">職務要約</h2>
            <p className="text-gray-700 mb-2">
              AWSを活用したシステム開発・インフラ自動化を中心に、サーバーサイドからフルスタックまで幅広く経験。新技術への適応力も強みです。
            </p>
          </div>
          <div className="text-right">
            <Link href="/about" className="text-blue-600 underline">
              詳細はこちら
            </Link>
          </div>
        </section>

        {/* 活かせる経験・知識・技術 */}
        <section className="bg-white rounded-xl shadow p-6 border border-green-100 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-green-700">
              活かせる経験・知識・技術
            </h2>
            <ul className="list-disc pl-5 text-gray-700 mb-2">
              <li>AWSクラウド開発</li>
              <li>Pythonアプリケーション開発</li>
              <li>フロントエンド（Angular等）</li>
            </ul>
          </div>
          <div className="text-right">
            <Link href="/about" className="text-blue-600 underline">
              詳細はこちら
            </Link>
          </div>
        </section>

        {/* 職務経歴（直近のみ抜粋） */}
        <section className="bg-white rounded-xl shadow p-6 border border-green-100 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-green-700">
              職務経歴（抜粋）
            </h2>
            <div className="mb-1">
              <h3 className="font-bold">2024年10月～現在 フリーランス</h3>
              <p className="text-sm text-gray-600">
                国産EASMサービス業務委託開発
              </p>
            </div>
            <div>
              <h3 className="font-bold">2020年4月～2024年10月 S社</h3>
              <p className="text-sm text-gray-600">ソフトウェアシステム開発</p>
            </div>
          </div>
          <div className="text-right">
            <Link href="/career" className="text-blue-600 underline">
              詳細はこちら
            </Link>
          </div>
        </section>

        {/* スキル・資格 */}
        <section className="bg-white rounded-xl shadow p-6 border border-green-100 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-green-700">
              スキル・資格
            </h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
              <li>Python・JavaScript・TypeScript・ShellScript</li>
              <li>MySQL・PostgreSQL・SQLite</li>
              <li>AWS主要サービス</li>
              <li>基本情報技術者・AWS認定・普通自動車免許</li>
            </ul>
          </div>
          <div className="text-right">
            <Link href="/skills" className="text-blue-600 underline">
              詳細はこちら
            </Link>
          </div>
        </section>

        {/* 自己PR */}
        <section className="bg-white rounded-xl shadow p-6 border border-green-100 flex flex-col justify-between md:col-span-2">
          <div>
            <h2 className="text-xl font-bold mb-2 text-green-700">自己PR</h2>
            <p className="text-gray-700 mb-2">
              AWSを活用した多様なサービス開発経験と、新技術への高い適応力を活かし、クラウド領域の発展に貢献します。
            </p>
          </div>
          <div className="text-right">
            <Link href="/pr" className="text-blue-600 underline">
              詳細はこちら
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
