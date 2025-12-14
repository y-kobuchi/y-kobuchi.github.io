## Copilot / AI エージェント向け説明
このリポジトリで AI アシスタントが素早く生産的に動けるよう、プロジェクト固有のパターンと開発フローをまとめます。

### 全体像
- Next.js 16（App Router）+ TypeScript のポートフォリオサイト。UI は Tailwind CSS を利用しています。
- ルートやページは `src/app/*` 配下（例: `src/app/about/page.tsx`、`src/app/works/page.tsx`）。
- 共通コンポーネントは `src/app/components` に配置（`Header`/`Footer`/`SectionTitle`/`WorkCard`/`SkillCard`）。
- 多くのコンテンツは静的でページ内に配列で埋め込まれているため、繰り返しのデータは `src/app/data` にまとめると管理が楽になります。

### 重要なファイル・ルール
- 主要スクリプトは `package.json` にあり、開発/ビルド/起動/整形/チェックを実行できます（`dev|build|start|lint|format|check`）。
- Lint/Format/Check は `biome` を使用（`biome.json`）。CI でも利用されます。ローカルで `npm run lint` / `npm run format` / `npm run check` を実行してください。
- 色やヘッダーのグラデーションは `tailwind.config.js` に定義済み（`primary.*` トークンを使う）。ハードコードしたカラーを避けること。
- グローバルなベース CSS は `src/app/globals.css`。
- `next.config.ts` に `@` エイリアス（`src`）と `turbopack` が有効化されています。`@/...` 形式の import を使うと相対パスが減ります。

### コンポーネントと型の慣習
- コンポーネントは TypeScript で `interface Props` を定義し、関数コンポーネントで実装するパターンです（例: `WorkCard`, `SkillCard`）。
- ページ/レイアウト/大域コンポーネントは default export、ユーティリティコンポーネントは named export にしている点に留意してください。
- クライアント側の振る舞いがあるコンポーネントは `"use client"` をファイル先頭に置きます（例: `Header`）。
- ページ毎に埋め込みデータがあるため、同じデータが複数ページで必要なら `src/app/data` にまとめてインポートしてください。

### ルーティングと構造
- App Router: 新しいページは `src/app/<route>/page.tsx` を作成。ネストルートは `layout.tsx` を追加して分割可能です。
- 全体の共通レイアウトは `src/app/layout.tsx`（ここで `Header` と `Footer` を読み込んでいます）。

### 開発フローと CI
- ローカル開発: `npm run dev`。ブラウザで `http://localhost:3000` を確認できます。
- ビルド/実行: `npm run build` / `npm run start`。
- CI: GitHub Actions の `.github/workflows/nextjs.yml` で Node 20 かつ Pages へのデプロイフローが組まれています。デフォルトブランチ `main` で自動デプロイ。

### 追加・拡張時の具体的手順
- 新しいページを追加する: `src/app/foo/page.tsx` を作成、必要なら `src/app/foo/layout.tsx` を追加。
- クライアントサイドの状態や hook を使うコンポーネントは `"use client"` を先頭に付与。
- スタイルは Tailwind を利用し、可能な限り `tailwind.config.js` のトークンを使う。

### 品質とチェック
- 単体テストはありません。TypeScript の型と biome の lint/check が品質ゲートです。
- PR の前に `npm run format && npm run lint` を実行してください。CI で失敗したら修正が必要です。

### 例: よく使うコードスニペット
- エイリアスを使ったインポート:
- `import Header from "@/app/components/Header"`（`@` は `src` へのエイリアス）
- シンプルなページの雛形:

```tsx
export default function Page() {
	return <main>...</main>;
}
```

WorkCard の使い方は `src/app/components/WorkCard.tsx` を参照してください。

### 参照・参考ファイル
- 仕様・設計: [docs/設計書.md](docs/設計書.md)
- レイアウトと共通コンポーネント: [src/app/layout.tsx](src/app/layout.tsx) / [src/app/components](src/app/components)
- Lint/Formatter: `biome.json`
- CI: [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml)

### PR 作成時のちょっとした注意
- `npm run format && npm run lint` を実行してから PR を作成すること。
- 変更にデータを含む場合は `src/app/data` にまとめる（同一データの重複を避ける）。
- 色やスタイルは既存のトークンを使い、既成の Tailwind クラスに合わせる。
