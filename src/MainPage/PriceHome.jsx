import { LuBookOpen } from "react-icons/lu";

export default function PriceHome() {
  return (
    <section className="w-full bg-white pt-10 pb-20 lg:pt-20 lg:pb-32 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        <h2
          className="
            inline-flex
            text-[130px]
            xl:text-[260px]
            lg:text-[200px]
            leading-none
            xl:tracking-[0.25em]
            lg:tracking-[0.2em]
            text-[#333333]
            font-blont
          "
        >
          <a
            href="/price"
            className="
              hover:text-[#555555]
              transition-colors
              duration-300
              cursor-pointer
              inline-block
            "
          >
            PRICE
          </a>
        </h2>

        <a
          href="/price"
          className="
            flex 
            items-center 
            gap-3 
            bg-[#333333] 
            hover:bg-[#555555] 
            text-white 
            px-6 
            py-3 
            lg:px-10 
            lg:py-4 
            rounded-full 
            shadow-lg 
            transition-all 
            duration-300 
            hover:scale-105
            active:scale-95
          "
        >
          <LuBookOpen className="text-[24px] lg:text-[30px]" />
          
          <span className="
            uppercase 
            font-semibold 
            tracking-wider 
            text-[14px] 
            lg:text-[18px]
            whitespace-nowrap
          ">
            Відкрити прайс-лист послуг
          </span>
        </a>

      </div>
    </section>
  );
}

/*
        <h2
          className="
            inline-flex
            text-[130px]
            xl:text-[260px]
            lg:text-[200px]
            leading-none
            xl:tracking-[0.25em]
            lg:tracking-[0.2em]
            text-[#333333]
            font-blont
          "
        >
          <a
            href="/price"
            className="
              hover:text-[#555555]
              transition-colors
              duration-300
              cursor-pointer
              inline-block
            "
          >
            PRICE
          </a>
        </h2>
        */