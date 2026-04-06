import { useState } from "react";
import Image from "../assets/background_home.png";
import BookingModal from "../layout/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="
        relative
        w-full
        min-h-[600px]
        xl:min-h-[700px]
        lg:min-h-[660px]
        md:min-h-[660px]
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        text-[#404040]
        font-quicksand
      "
      style={{ backgroundImage: `url(${Image})` }}
    >
      {/* GRADIENT OVERLAY — white → transparent */}
      <div
        className="
          absolute top-0 left-0 w-full h-full
          bg-gradient-to-b
          from-white
          via-white/70
          to-transparent
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative flex flex-col items-center text-center px-4">
        {/* BIG TITLE */}
        <h1
          className="
            font-blont
            text-[80px] xl:text-[120px] lg:text-[110px] md:text-[100px]
            font-normal
            leading-none
            text-[#333333]
          "
        >
          numa<span className="-ml-[6px] text-[0.6em] -translate-y-[40px] xl:-translate-y-[48px] lg:-translate-y-[48px] inline-block">•</span>
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            xl:text-[22px] lg:text-[18px]
            tracking-[0.25em]
            text-[#555555]
          "
        >
          dental clinic
        </p>

        {/* BUTTON — змінено на button для виклику функції */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="
            mt-10
            flex
            justify-center
            items-center
            rounded-full
            w-[230px] sm:w-[280px]
            h-[64px]
            bg-[#333333]
            text-white
            shadow-lg
            shadow-black/10
            font-quicksand
            font-semibold
            text-[16px]
            uppercase
            tracking-[0.2em]
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
          записатися
        </button>
      </div>

      {/* Підключаємо модалку */}
      {isModalOpen && (
        <BookingModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}