import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mega Tronix Ai</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          منصتك الذكية لسحب أفضل المنتجات تلقائيًا من كبرى المتاجر الإلكترونية مثل Amazon و AliExpress.
          يعرض لك المنتجات الأكثر مبيعًا، الأعلى تقييمًا، والأحدث، بدعم لغات متعددة ونظام إشعارات ذكي.
        </p>
        <button className="text-lg px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition">
          قريبًا على الإنترنت
        </button>
        <p className="text-sm text-gray-400 mt-6">© 2025 Mega Tronix Ai. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  );
}