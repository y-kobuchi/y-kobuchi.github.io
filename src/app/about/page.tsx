"use client"; // これをファイルの最上部に追加

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AboutPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1>自己紹介</h1>
      <p>
        私はウェブ開発を専門とするエンジニアです。以下は私の主な経験とスキルです。
      </p>

      <h2>経験</h2>
      <ul>
        <li>Reactを使用したフロントエンド開発</li>
        <li>Next.jsを用いたSPAの開発</li>
        <li>Node.jsによるバックエンドAPIの構築</li>
        <li>RESTful APIの設計と実装</li>
      </ul>

      <h2>スキル</h2>
      <ul>
        <li>JavaScript（ES6+）</li>
        <li>TypeScript</li>
        <li>HTML/CSS</li>
        <li>Git/GitHub</li>
        <li>データベース（MongoDB, MySQL）</li>
        <li>UI/UXデザイン</li>
      </ul>

      <Link href="/">← ホームに戻る</Link>
    </div>
  );
}
