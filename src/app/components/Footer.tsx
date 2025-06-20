import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaAward,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-green-200 via-white/60 to-green-100 backdrop-blur-md shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2">
        <nav className="flex gap-4 text-sm font-semibold mb-2 md:mb-0">
          <Link
            href="/"
            className="flex items-center gap-1 text-green-700 hover:text-green-900 transition"
          >
            <FaHome />
            ホーム
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 text-green-700 hover:text-green-900 transition"
          >
            <FaUser />
            自己紹介
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-green-700 hover:text-green-900 transition"
          >
            <FaProjectDiagram />
            プロジェクト
          </Link>
          <Link
            href="/skills"
            className="flex items-center gap-1 text-green-700 hover:text-green-900 transition"
          >
            <FaAward />
            スキル
          </Link>
          <Link
            href="/career"
            className="flex items-center gap-1 text-green-700 hover:text-green-900 transition"
          >
            <FaBriefcase />
            経歴
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-green-700 hover:text-green-900 transition"
          >
            <FaEnvelope />
            お問い合わせ
          </Link>
        </nav>
        <p className="text-xs text-neutral-500 text-center md:text-right">
          &copy; 2025 小渕佑真 Portfolio
        </p>
      </div>
    </footer>
  );
}
