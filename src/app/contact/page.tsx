import { SectionTitle } from "../components/SectionTitle";

export default function Contact() {
  return (
    <main className="min-h-screen bg-primary-bg text-primary-text py-24 px-6 pt-32">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact" subtitle="お問い合わせ" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 連絡先情報 */}
          <section>
            <h3 className="text-2xl font-bold text-primary-text mb-8">
              連絡先
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-primary-muted mb-2">メール</p>
                <a
                  href="mailto:kob_y0220@outlook.jp"
                  className="text-primary-accent hover:underline text-lg"
                >
                  kob_y0220@outlook.jp
                </a>
              </div>
              <div>
                <p className="text-sm text-primary-muted mb-2">GitHub</p>
                <a
                  href="https://github.com/y-kobuchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-accent hover:underline text-lg"
                >
                  github.com/y-kobuchi
                </a>
              </div>
              <div>
                <p className="text-sm text-primary-muted mb-2">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/%E4%BD%91%E7%9C%9F-%E5%B0%8F%E6%B8%95-1bb970371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-accent hover:underline text-lg"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* 補足 */}
        <section className="mt-16 p-8 bg-slate-900 border border-slate-700 rounded-lg">
          <h3 className="text-lg font-bold text-primary-text mb-3">補足</h3>
          <p className="text-primary-muted leading-relaxed">
            お仕事のご依頼、技術相談、その他のお問い合わせなど、いつでもお気軽にご連絡ください。
            通常、24時間以内にご返信させていただきます。
          </p>
        </section>
      </div>
    </main>
  );
}
