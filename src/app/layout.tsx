import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "An engineer's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4 bg-green-50 text-gray-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
