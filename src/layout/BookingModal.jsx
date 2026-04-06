import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzRtf1uXrPdZu9if3XbKhUVzK9-nzQ7Ts63prvrjcwD3u-Qt4gURWiaAd2JiNfBSPMJcA/exec";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [utmSource, setUtmSource] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");
    if (source) {
      setUtmSource(source);
      sessionStorage.setItem("utm_source", source);
    } else {
      const savedUtm = sessionStorage.getItem("utm_source");
      if (savedUtm) setUtmSource(savedUtm);
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      name: formData.name,
      email: formData.email || "не вказано",
      phone: formData.phone,
      utm_source: utmSource || "site"
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({ name: "", phone: "" });
      }, 5000);
    } catch (error) {
      console.error("Помилка відправки:", error);
      setStatus("error");
    }
  };

  return (
    <div 
          className="fixed inset-0 z-[1000] items-start pt-25 md:pt-15 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={onClose}
        >
      <div 
        className="relative bg-white w-[90%] max-w-md p-8 rounded-2xl shadow-2xl font-quicksand animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закриття */}        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 p-2 text-gray-500 hover:text-black transition-colors"
        >
          <FiX size={24} />
        </button>
        {status === "success" ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-[#333333] mb-2">Дякуємо!</h3>
            <p className="text-gray-600">Ваша заявка успішно надіслана. Наш адміністратор зв'яжеться з вами найближчим часом.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-[#333333] mb-6 text-center">Записатися на прийом</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Ваше ім'я</label>
                <input
                  type="text"
                  required
                  placeholder="Ім'я"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 text-opacity-60">
                  E-mail (необов'язково)
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Номер телефону</label>
                <input
                  type="tel"
                  required
                  placeholder="+380 (XX) XXX-XX-XX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="cursor-pointer mt-4 w-full h-[56px] flex items-center justify-center bg-[#333333] text-white rounded-full font-semibold uppercase tracking-wider transition-all hover:bg-[#1a1a1a] disabled:opacity-70"
              >
                {status === "loading" ? "Відправка..." : "Відправити"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">Виникла помилка. Спробуйте пізніше або зателефонуйте нам.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}