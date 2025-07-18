export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen max-w-none rounded-none bg-gradient-to-r from-green-300/80 via-white/60 to-green-600/70 backdrop-blur-md shadow-xl border-t border-green-200/50 z-50">
      <div className="flex flex-row items-center px-6 py-1.5 md:px-10 md:py-2 relative">
        {/* 左スペーサー */}
        <div className="flex-1" />
        {/* 右スペーサー */}
        <div className="flex-1 flex justify-end">
          <p className="footer-copyright ml-6 text-[0.92rem] text-gray-500 font-normal whitespace-nowrap select-none">
            &copy; 2025 小渕佑真 Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
