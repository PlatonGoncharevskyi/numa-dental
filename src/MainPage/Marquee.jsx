export default function Marquee() {
  const items = [
    "РЕСТАВРАЦІЯ",
    "ОРТОДОНТІЯ",
    "ІМПЛАНТАЦІЯ",
    "ОБСТЕЖЕННЯ",
    "ХІРУРГІЯ",
    "РЕСТАВРАЦІЇ",
    "ГІГІЄНА ТА ВІДБІЛЮВАННЯ",
    "ОРТОПЕДІЯ",
    "ЛІКУВАННЯ КАРІЄСУ",
  ];

  return (
    <>
      {/* KEYFRAMES */}
      <style>
        {`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>

      <div
        className="
          mt-[-60px] w-full xl:h-[90px] bg-[#404040] z-30 relative overflow-hidden flex items-center
          text-white
          text-[18px]
          h-[60px]
          xl:text-[26px]
          lg:text-[20px]
          lg:h-[70px]
          uppercase
          font-semibold
          tracking-[0.18em]
          select-none
        "
      >
        <div
          className="
            flex 
            whitespace-nowrap
            animate-[marqueeScroll_15s_linear_infinite]
          "
        >
          {items.map((item, index) => (
            <span key={index} className="mx-3 xl:mx-10 lg:mx-10">
              {item}
            </span>
          ))}


          {items.map((item, index) => (
            <span key={`dup-${index}`} className="mx-3 xl:mx-10 lg:mx-10">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
