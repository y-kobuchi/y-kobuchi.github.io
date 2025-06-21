import { FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-12 pt-16 pb-16">
      <div className="bg-white rounded-xl shadow p-8 border border-green-100 mb-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-green-700 flex items-center gap-2">
          <FaEnvelope />
          お問い合わせ
        </h1>
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
      </div>
    </section>
  );
}
