import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaAward,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-screen max-w-none rounded-none bg-gradient-to-r from-green-400 via-white/40 to-green-600/80 backdrop-blur-lg shadow-2xl border-b border-green-200/60 z-50">
      <div className="flex flex-row justify-between items-center px-8 py-3 relative">
        <Link
          href="/"
          className="flex items-center gap-2 text-green-800 font-extrabold text-xl hover:text-green-500 transition-all duration-200 hover:scale-110"
        >
          <FaHome className="text-2xl" />
          ホーム
        </Link>
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
      </div>
    </header>
  );
}
