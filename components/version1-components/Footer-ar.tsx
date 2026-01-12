export function FooterAR() {
  return (
    <footer className="bg-gray-900 text-white py-6" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 TheLifeCo. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="https://www.thelifeco.com/ar/privacy-policy/" className="hover:text-[#01609C] transition-colors" target="_blank" rel="noopener noreferrer">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

