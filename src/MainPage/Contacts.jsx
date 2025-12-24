import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaViber,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="
        w-full 
        bg-[#f2f2f2]
        text-[#333333]
        py-6
        xl:py-18 lg:py-14
        text-center
        font-quicksand
      "
    >
      {/* TITLE */}
      <h2
        className="
          font-blont
          font-semibold
          text-[50px] xl:text-[100px] lg-text-[100px]
          tracking-wide
          text-[#333333]
        "
      >
        КОНТАКТИ
      </h2>

      {/* WORK TIME */}
      <p
        className="
          text-center
          text-[12px]
          xl:text-[14px] lg:text-[14px]
          tracking-[0.25em]
          text-[#555555]
          mx-auto
          max-w-[260px] lg:max-w-none
        "
      >
        ЧАС РОБОТИ ПН-ПТ З 9:00 ДО 20:00<br></br> СБ-НД З 10:00 ДО 18:00
      </p>

      {/* PHONES */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-5 xl:mt-10 lg:mt-10 xl:gap-20 xl:mt-12 lg:gap-20 lg:mt-12">

        {/* PHONE 1 */}
        <div className="flex flex-col items-center">
          <a
            href="tel:+380933891363"
            className="text-[28px] xl:text-[30px] lg:text-[30px] hover:opacity-70 transition"
          >
            +380 (93) 389-13-63
          </a>
          <div className="mt-2 text-[12px] xl:text-[12px] lg:text-[12px] tracking-[0.35em] uppercase text-[#666] font-medium">
            ЗАПИС У NUMA.DENTAL
          </div>
        </div>
      </div>

      {/* ADDRESS BLOCK */}
      <div
        className="
          flex flex-col lg:flex-row justify-between items-center
          border-2 border-[#5c5c5c]
          max-w-[360px]
          lg:max-w-[680px]
          mx-auto my-14
          px-1
          lg:px-10 py-8
          bg-transparent
          text-[#333]
        "
      >
        {/* ADDRESS LEFT */}
        <div
          className="
            uppercase
            tracking-[0.20em]
            leading-[28px]
            text-[18px]
            font-semibold
            pb-10
            lg:pt-10
          "
        >
          Київ,<br />
          вул.Василя Тютюнника<br />
          51/1-a
        </div>

        {/* MAP RIGHT */}
        <a
          href="https://www.google.com/maps/place/Numa.dental+%7C+%D0%A1%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8F+%D0%9A%D0%B8%D1%97%D0%B2+%7C+%D0%B2%D0%BB%D0%B0%D1%81%D0%BD%D0%B0+%D0%BB%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%96%D1%8F+%7C+%D1%81%D1%83%D1%87%D0%B0%D1%81%D0%BD%D1%96+%D0%BA%D0%B5%D1%80%D0%B0%D0%BC%D1%96%D1%87%D0%BD%D1%96+%D0%B2%D1%96%D0%BD%D1%96%D1%80%D0%B8+%7C+%D1%96%D0%BC%D0%BF%D0%BB%D0%B0%D0%BD%D1%82%D0%B8+%D0%BF%D1%96%D0%B4+%D0%BA%D0%BB%D1%8E%D1%87/@50.4178297,30.5280052,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cfa0cc2749fd:0x1472c176c387d613!8m2!3d50.4178297!4d30.5280052!16s%2Fg%2F11qs1kdq9s?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="
            uppercase
            tracking-[0.28em]
            text-[14px]
            font-medium
            flex flex-col items-center
            gap-2
            transition
            group
          "
        >
          <span
            className="
              text-[26px]
              transition-transform
              duration-300
              group-hover:[transform:rotateY(180deg)]
            "
          >
            <FaLocationDot />
          </span>
          переглянути на карті
        </a>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-5 mt-8">

          <a
            href="https://www.instagram.com/numa.dental/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 rounded-full bg-[#333333] text-[#E6E6E6] text-[22px]
              cursor-pointer 
              transition-all duration-300 ease-in-out
              hover:bg-[#E6E6E6]
              hover:text-[#333333]
              hover:scale-110
            "
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/380933891363"
            target="_blank"
            rel="noopener noreferrer" 
            className="
              p-2 rounded-full bg-[#333333] text-[#E6E6E6] text-[22px]
              cursor-pointer 
              transition-all duration-300 ease-in-out
              hover:bg-[#E6E6E6]
              hover:text-[#333333]
              hover:scale-110
            "
          >
            <FaWhatsapp />
          </a>

          <a
            href="viber://chat?number=%2B380933891363"
            target="_blank"
            rel="noopener noreferrer"  
            className="
              p-2 rounded-full bg-[#333333] text-[#E6E6E6] text-[22px]
              cursor-pointer 
              transition-all duration-300 ease-in-out
              hover:bg-[#E6E6E6]
              hover:text-[#333333]
              hover:scale-110
            "
          >
            <FaViber />
          </a>
          <a
            href="https://t.me/numa_dental"
            target="_blank"
            rel="noopener noreferrer"   
            className="           
              p-2 rounded-full bg-[#333333] text-[#E6E6E6] text-[22px]
              cursor-pointer 
              transition-all duration-300 ease-in-out
              hover:bg-[#E6E6E6]
              hover:text-[#333333]
              hover:scale-110
            "
          >
            <FaTelegramPlane />
          </a>

      </div>
    </section>
  );
}
