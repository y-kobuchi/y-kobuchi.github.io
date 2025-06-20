import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-green-200 via-white/60 to-green-100 backdrop-blur-md shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-green-700 font-extrabold text-xl hover:text-green-900 transition"
        >
          <FaHome className="text-green-500 text-2xl" />
          <span>小渕佑真</span>
        </Link>
      </div>
    </header>
  );
}
