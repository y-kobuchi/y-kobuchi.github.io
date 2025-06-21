import Link from "next/link";
import {
  FaUser,
  FaProjectDiagram,
  FaAward,
  FaBriefcase,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen max-w-none rounded-none bg-gradient-to-r from-green-400 via-white/40 to-green-600/80 backdrop-blur-lg shadow-2xl border-t border-green-200/60 z-50">
      {/* ホームに戻るボタン（フッター中央上に重ねて配置） */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/90 shadow-lg border border-green-300 text-green-800 font-bold text-base hover:bg-green-100 hover:scale-105 transition-all duration-200"
        >
          <FaHome className="text-xl" />
          ホームに戻る
        </Link>
      </div>
      <div className="flex flex-row justify-between items-center px-8 py-3 relative">
        <nav className="flex gap-8 text-base font-bold tracking-wide">
          <Link
            href="/about"
            className="flex items-center gap-2 text-green-800 hover:text-green-500 transition-all duration-200 hover:scale-110"
          >
            <FaUser className="text-xl" />
            自己紹介
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-green-800 hover:text-green-500 transition-all duration-200 hover:scale-110"
          >
            <FaProjectDiagram className="text-xl" />
            プロジェクト
          </Link>
          <Link
            href="/skills"
            className="flex items-center gap-2 text-green-800 hover:text-green-500 transition-all duration-200 hover:scale-110"
          >
            <FaAward className="text-xl" />
            スキル
          </Link>
          <Link
            href="/career"
            className="flex items-center gap-2 text-green-800 hover:text-green-500 transition-all duration-200 hover:scale-110"
          >
            <FaBriefcase className="text-xl" />
            経歴
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-green-800 hover:text-green-500 transition-all duration-200 hover:scale-110"
          >
            <FaEnvelope className="text-xl" />
            お問い合わせ
          </Link>
        </nav>
        {/* 中央スペースを空けるためのflexスペーサー */}
        <div className="flex-1" />
        <p className="footer-copyright ml-8 whitespace-nowrap">
          &copy; 2025 小渕佑真 Portfolio
        </p>
      </div>
    </footer>
  );
}
