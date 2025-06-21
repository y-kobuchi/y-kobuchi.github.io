import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "小渕佑真のPortfolio",
  description: "An engineer's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen relative bg-green-50">
        <Header />
        <main className="flex-grow px-4 py-4 max-w-4xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
