import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center border border-green-200">
        <h1 className="text-2xl font-bold mb-4 text-green-700">お問い合わせ</h1>
        <p className="mb-6 text-gray-700">
          ご質問・ご相談などお気軽にご連絡ください。
        </p>
        <a
          href="mailto:kob_y0220@outlook.jp"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition mb-4"
        >
          メールで問い合わせる
        </a>
        {/* SNSやGitHubなど他の連絡手段があればここに追加 */}
        <div className="mt-6">
          <Link href="/">
            <span className="inline-block bg-gray-200 text-green-700 px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition cursor-pointer">
              ← ホームに戻る
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
