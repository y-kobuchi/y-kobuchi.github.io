export default function About() {
  return (
    <section className="max-w-2xl mx-auto py-12 pt-16 pb-16">
      <div className="bg-white rounded-xl shadow p-8 border border-green-100 mb-8 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-4xl mb-4">
          <span role="img" aria-label="profile">
            👤
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-green-700">小渕 佑真</h1>
        <p className="text-gray-600 mb-1">こぶち ゆうま</p>
        <div className="flex flex-wrap gap-3 justify-center mt-2 mb-4">
          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">
            北海道札幌市手稲区出身
          </span>
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
            趣味：サッカー・ゲーム
          </span>
          <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs">
            好きなラーメン屋：風来堂
          </span>
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            家族構成
          </h3>
          <p className="mb-2 text-gray-700">妻・子供（来年出産予定）・猫3匹</p>
          <div className="flex gap-4 mt-2">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-20 h-20 bg-gray-100 border-2 border-dashed border-green-200 rounded-lg flex items-center justify-center text-gray-400 text-xs"
              >
                猫の写真{n}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-green-700">自己紹介</h2>
        <p className="mb-4">
          AWSを中心としたクラウド開発・インフラ自動化・データ分析基盤構築を得意とするフルスタックエンジニアです。新技術や新しい環境への適応力を活かし、プロジェクトの早期立ち上げやチーム貢献に努めてきました。今後も技術力と柔軟性を武器に、より良いサービスづくりに貢献していきたいと考えています。
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-green-700">職務要約</h2>
        <p className="mb-4">
          新卒でS社に入社後、約4年間AWSを使用したシステム開発に従事し、サーバーサイドの設計・開発・テストを担当。その後フリーランスとして幅広い技術領域に携わっています。
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2 text-green-700">
          活かせる経験・知識・技術
        </h2>
        <ul className="list-disc pl-5 mb-2">
          <li>AWSを利用したパブリッククラウド上での開発経験</li>
          <li>Pythonによるアプリケーション開発</li>
          <li>Angularを用いた画面開発</li>
        </ul>
      </div>
    </section>
  );
}
