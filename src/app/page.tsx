import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>ポートフォリオへようこそ</h1>
      <p>
        こんにちは！私はバックエンド・フロントエンド・クラウド開発を行うフルスタックエンジニアです。
      </p>
      <nav>
        <Link href="/about">自己紹介</Link> |
        <Link href="/projects">プロジェクト</Link> |
        <Link href="/contact">お問い合わせ</Link>
      </nav>
    </div>
  );
}
