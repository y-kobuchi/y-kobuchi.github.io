import Link from "next/link";

export default function PR() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">自己PR</h1>
      <p className="mb-2">
        <b>多種多様なサービス経験：</b>{" "}
        AWSを利用した開発に携わり、主要サービスの利用経験・理解が深いです。詳細設計から結合テストまで幅広く対応し、インフラのコード化や改修も実績があります。これらの経験を活かし、パブリッククラウド領域の開発に貢献できます。
      </p>
      <p>
        <b>新技術や新環境への適応力：</b>{" "}
        複数プロジェクトで新技術・新環境に迅速に順応し、ドキュメント整備や有識者への質問で工数削減に努めてきました。今後は後輩や後任の方がスムーズに業務できる仕組み作りにも貢献したいと考えています。
      </p>
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
