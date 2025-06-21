import Link from "next/link";
import Image from "next/image";
import { FaUser, FaAward, FaBriefcase, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-6 overflow-hidden">
      {/* 背景divは削除（body全体にアニメーション背景を適用） */}
      <div className="flex flex-col items-center mb-16">
        <Image
          src="/globe.svg"
          alt="Profile Globe"
          width={120}
          height={120}
          className="mb-6 drop-shadow-2xl rounded-full border-4 border-green-200 bg-white/60"
        />
        <h1 className="text-6xl font-extrabold mb-4 text-green-700 tracking-tight text-center drop-shadow-lg">
          <ruby>
            小渕 佑真
            <rt>こぶち ゆうま</rt>
          </ruby>
          <br className="sm:hidden" />
          <span className="block text-3xl font-bold text-green-900 mt-4 bg-gradient-to-r from-green-200 via-white/60 to-green-100 px-4 py-2 rounded-xl shadow">
            Engineer Portfolio
          </span>
        </h1>
        <p className="text-xl text-green-900 text-center max-w-2xl mb-6 bg-white/70 rounded-lg px-6 py-3 shadow">
          AWSを中心としたクラウド開発・インフラ自動化・データ分析基盤構築が得意なフルスタックエンジニアのポートフォリオです。
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link href="/about">
            <span className="bg-gradient-to-r from-green-200 to-green-400 text-green-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-green-300 hover:scale-105 transition cursor-pointer">
              自己紹介
            </span>
          </Link>
          <Link href="/skills">
            <span className="bg-gradient-to-r from-green-200 to-green-400 text-green-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-green-300 hover:scale-105 transition cursor-pointer">
              スキル・資格
            </span>
          </Link>
          <Link href="/career">
            <span className="bg-gradient-to-r from-green-200 to-green-400 text-green-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-green-300 hover:scale-105 transition cursor-pointer">
              職務経歴
            </span>
          </Link>
          <Link href="/projects">
            <span className="bg-gradient-to-r from-green-200 to-green-400 text-green-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-green-300 hover:scale-105 transition cursor-pointer">
              プロジェクト
            </span>
          </Link>
          <Link href="/contact">
            <span className="bg-gradient-to-r from-green-200 to-green-400 text-green-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-green-300 hover:scale-105 transition cursor-pointer">
              お問い合わせ
            </span>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* 職務要約 */}
        <section className="bg-gradient-to-br from-white/90 to-green-50 rounded-2xl shadow-xl border border-green-100 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-green-700 flex items-center gap-2">
              <FaUser />
              職務要約
            </h2>
            <p className="text-green-900 mb-4 font-medium">
              AWSを活用したシステム開発・インフラ自動化を中心に、サーバーサイドからフルスタックまで幅広く経験。新技術への適応力も強みです。
            </p>
          </div>
          <div className="text-right">
            <Link href="/about">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 hover:scale-105 transition cursor-pointer">
                詳細はこちら
              </span>
            </Link>
          </div>
        </section>
        {/* 活かせる経験・知識・技術 */}
        <section className="bg-gradient-to-br from-green-50 via-white/80 to-green-100 rounded-2xl shadow-xl border border-green-100 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-green-700 flex items-center gap-2">
              <FaStar />
              活かせる経験・知識・技術
            </h2>
            <ul className="list-disc pl-6 text-green-900 mb-4 font-medium space-y-1">
              <li>AWSクラウド開発</li>
              <li>Pythonアプリケーション開発</li>
              <li>フロントエンド（Angular等）</li>
            </ul>
          </div>
          <div className="text-right">
            <Link href="/about">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 hover:scale-105 transition cursor-pointer">
                詳細はこちら
              </span>
            </Link>
          </div>
        </section>
        {/* 職務経歴（直近のみ抜粋） */}
        <section className="bg-gradient-to-br from-white/90 to-green-50 rounded-2xl shadow-xl border border-green-100 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-green-700 flex items-center gap-2">
              <FaBriefcase />
              職務経歴（抜粋）
            </h2>
            <div className="mb-2">
              <h3 className="font-bold">2024年10月～現在 フリーランス</h3>
              <p className="text-sm text-green-800">
                国産EASMサービス業務委託開発
              </p>
            </div>
            <div>
              <h3 className="font-bold">2020年4月～2024年10月 S社</h3>
              <p className="text-sm text-green-800">ソフトウェアシステム開発</p>
            </div>
          </div>
          <div className="text-right">
            <Link href="/career">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 hover:scale-105 transition cursor-pointer">
                詳細はこちら
              </span>
            </Link>
          </div>
        </section>
        {/* スキル・資格 */}
        <section className="bg-gradient-to-br from-green-50 via-white/80 to-green-100 rounded-2xl shadow-xl border border-green-100 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-green-700 flex items-center gap-2">
              <FaAward />
              スキル・資格
            </h2>
            <ul className="list-disc pl-6 text-green-900 mb-4 font-medium space-y-1">
              <li>Python・JavaScript・TypeScript・ShellScript</li>
              <li>MySQL・PostgreSQL・SQLite</li>
              <li>AWS主要サービス</li>
              <li>基本情報技術者・AWS認定・普通自動車免許</li>
            </ul>
          </div>
          <div className="text-right">
            <Link href="/skills">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 hover:scale-105 transition cursor-pointer">
                詳細はこちら
              </span>
            </Link>
          </div>
        </section>
        {/* 自己PR */}
        <section className="bg-gradient-to-br from-white/90 to-green-50 rounded-2xl shadow-xl border border-green-100 p-8 flex flex-col justify-between md:col-span-2">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-green-700 flex items-center gap-2">
              <FaStar />
              自己PR
            </h2>
            <p className="text-green-900 mb-4 font-medium">
              AWSを活用した多様なサービス開発経験と、新技術への高い適応力を活かし、クラウド領域の発展に貢献します。
            </p>
          </div>
          <div className="text-right">
            <Link href="/pr">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200 hover:scale-105 transition cursor-pointer">
                詳細はこちら
              </span>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
