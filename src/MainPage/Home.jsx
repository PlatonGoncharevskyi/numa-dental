import Image from "../assets/background_home.png";

export default function Home() {
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

        {/* BUTTON */}
        <a
          href="https://t.me/numa_dental"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-10
            flex
            justify-center
            items-center
            rounded-full
            w-[220px]
            h-[60px]
            bg-white
            text-[#555555]
            
            font-quicksand
            font-medium
            text-[15px]
            uppercase
            tracking-[0.225em]
            transition-all duration-500
            hover:bg-[#555555]
            hover:text-white
            cursor-pointer
            select-none
          "
        >
          записатися
        </a>
      </div>
    </section>
  );
}
