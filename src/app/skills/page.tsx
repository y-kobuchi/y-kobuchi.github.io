import Link from "next/link";
import {
  FaPython,
  FaJs,
  FaDatabase,
  FaAws,
  FaCar,
  FaCertificate,
} from "react-icons/fa";

const skills = [
  { name: "Python", icon: <FaPython className="text-blue-400" />, level: 3 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 2 },
  { name: "TypeScript", icon: <FaJs className="text-blue-500" />, level: 2 },
  { name: "ShellScript", icon: <FaJs className="text-gray-500" />, level: 2 },
  { name: "MySQL", icon: <FaDatabase className="text-green-700" />, level: 2 },
  {
    name: "PostgreSQL",
    icon: <FaDatabase className="text-blue-700" />,
    level: 2,
  },
  { name: "SQLite", icon: <FaDatabase className="text-gray-700" />, level: 1 },
  { name: "AWS", icon: <FaAws className="text-orange-400" />, level: 3 },
];

const certs = [
  {
    name: "普通自動車第一種運転免許",
    icon: <FaCar className="text-gray-500" />,
  },
  {
    name: "基本情報技術者試験",
    icon: <FaCertificate className="text-blue-500" />,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    icon: <FaAws className="text-orange-400" />,
  },
];

function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className={
            i < level
              ? "inline-block w-3 h-3 rounded-full bg-green-500"
              : "inline-block w-3 h-3 rounded-full bg-gray-200"
          }
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 border border-green-200 mb-8">
        <h1 className="text-3xl font-extrabold mb-8 text-green-700 text-center tracking-tight flex items-center justify-center gap-2">
          <FaAws className="inline-block text-green-400 text-2xl" />
          テクニカルスキル & 資格
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
              <FaPython className="text-blue-400" /> スキル
            </h2>
            <ul className="space-y-3">
              {skills.map((s) => (
                <li key={s.name} className="flex items-center gap-3">
                  {s.icon}
                  <span className="font-medium w-28">{s.name}</span>
                  <SkillLevel level={s.level} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
              <FaCertificate className="text-yellow-500" /> 資格
            </h2>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c.name} className="flex items-center gap-3">
                  {c.icon}
                  <span className="font-medium">{c.name}</span>
                </li>
              ))}
            </ul>
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
