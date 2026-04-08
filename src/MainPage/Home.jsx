import { useState } from "react";
import Image from "../assets/pop-up.jpg";
import BookingModal from "../layout/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="
        relative
        w-full
        min-h-[750px]
        xl:min-h-[850px]
        lg:min-h-[800px]
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        font-quicksand
        overflow-hidden
      "
      style={{ backgroundImage: `url(${Image})` }}
    >
      {/* М'який оверлей для читабельності тексту */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1.5px]" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        
        {/* LOGO AREA */}
        <div className="mb-8 opacity-90 scale-90 md:scale-100">
           <h2 className="text-[50px] md:text-[60px] font-blont text-[#333333] leading-none">
             numa<span className="-ml-[6px] text-[0.6em] -translate-y-[20px] inline-block">•</span>
           </h2>
           <p className="text-[15px] text-[#7a7a7a] -mt-[10px] pr-18 xl:pr-26 tracking-wide font-quicksand">
             dental clinic
           </p>
        </div>

        {/* MAIN H1 - Твоя фраза як головний "гачок" */}
        <h1 className="
          font-blont
          text-[26px] md:text-[60px] lg:text-[72px]
          font-bold text-[#333]
          leading-[1.1] mb-10
          max-w-[900px]
          tracking-tight
        ">
          Будь впевнений <br className="hidden md:block" />
          в своїй посмішці
        </h1>

        {/* CTA BUTTON */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="
            flex
            justify-center
            items-center
            rounded-full
            w-[260px]
            h-[64px]
            bg-[#333333]
            text-white
            shadow-lg
            shadow-black/10
            font-quicksand
            font-semibold
            text-[14px]
            uppercase
            tracking-[0.13em]
            transition-all
            duration-300
            hover:bg-[#1a1a1a]
            hover:shadow-xl
            hover:-translate-y-1
            active:scale-95
            cursor-pointer
            select-none
          "
        >
          записатися на прийом
        </button>

        {/* SUBTITLE / USP - Конкретна цінність */}
        <p className="
          text-[13px] md:text-[20px] lg:text-[22px]
          text-[#333] mt-20
          max-w-2xl leading-relaxed
        ">
          Сучасна цифрова стоматологія в центрі Києва.
          Ми поєднуємо безболісне лікування та естетику для вашого комфорту.
        </p>


        
        <div className="mt-12 flex items-center gap-2 text-[#333] text-sm">
           <span className="flex text-[#FFB800]">★★★★★</span>
           <span>4.9 (172 відгуки в Google)</span>
        </div>
      </div>

      {isModalOpen && (
        <BookingModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}