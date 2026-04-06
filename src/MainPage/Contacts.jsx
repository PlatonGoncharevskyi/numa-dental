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
          lg:px-10 py-3
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
            pb-5
            lg:pt-10
          "
        >
          Київ,<br />
          вул.Василя Тютюнника<br />
          51/1-a
        </div>
        {/* Карта */}
        <div className="w-full h-[300px] lg:h-[310px]  overflow-hidden shadow-lg border-2 border-[#5c5c5c]/20">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2542.2715529916804!2d30.5279622!3d50.417412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa0cc2749fd%3A0x1472c176c387d613!2sNuma.dental!5e0!3m2!1suk!2sua!4v1775505797195!5m2!1suk!2sua" 
          width="400" 
          height="300" 
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title="Numa Dental Location">
          </iframe>
        </div>

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
