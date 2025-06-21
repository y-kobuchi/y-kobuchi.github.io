import { FaStar } from "react-icons/fa";

export default function PR() {
  return (
    <section className="max-w-2xl mx-auto py-12 pt-16 pb-16">
      <div className="bg-white rounded-xl shadow p-8 border border-green-100 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-green-700 flex items-center gap-2">
          <FaStar />
          自己PR
        </h1>
        <p className="mb-2">
          <b>多種多様なサービス経験：</b>{" "}
          AWSを利用した開発に携わり、主要サービスの利用経験・理解が深いです。詳細設計から結合テストまで幅広く対応し、インフラのコード化や改修も実績があります。これらの経験を活かし、パブリッククラウド領域の開発に貢献できます。
        </p>
        <p>
          <b>新技術や新環境への適応力：</b>{" "}
          複数プロジェクトで新技術・新環境に迅速に順応し、ドキュメント整備や有識者への質問で工数削減に努めてきました。今後は後輩や後任の方がスムーズに業務できる仕組み作りにも貢献したいと考えています。
        </p>
      </div>
    </section>
  );
}
