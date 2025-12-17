import arrow from "/src/assets/arrow.svg"

export default function PriceHome() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-5 xl:ml-12 lg:ml-10 xl:pt-20 lg:pt-20 pb-30 lg:mt-15" >

      {/* BIG PRICE */}
      <div className="flex justify-center">
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
      </div>

      <div className="lg:block absolute left-[45%] lg:left-[52%] xl:left-[52%] bottom-0 invert-[20%]">
        <img
          src={arrow}
          alt="arrow"
          className="xl:w-[150px] xl:h-[170px]
                     lg:w-[130px] lg:h-[150px]
                     w-[60px] h-[200px]"
        />
      </div>

      <p
        className="
          absolute
          right-[5%]
          text-[12px]
          bottom-17
          xl:right-[15%]
          lg:right-[12%]
          xl:bottom-0
          lg:bottom-5
          text-left
          xl:text-[25px]
          lg:text-[18px]
          leading-relaxed
          text-[#555555]
        "
      >
        Натисніть тут, щоб відкрити <br />
        прайс послуг
      </p>

    </section>
  );
}
