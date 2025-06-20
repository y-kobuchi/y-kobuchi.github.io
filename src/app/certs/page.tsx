import Link from "next/link";

export default function Certs() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">資格</h1>
      <ul className="list-disc pl-5 text-sm">
        <li>普通自動車第一種運転免許（2017年8月取得）</li>
        <li>基本情報技術者試験（2022年6月合格）</li>
        <li>AWS Certified Cloud Practitioner（2023年4月取得）</li>
      </ul>
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
