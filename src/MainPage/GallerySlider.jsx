import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
import { useRef } from "react";

import slide1 from "/src/assets/sliders/slider1.jpg";
import slide2 from "/src/assets/sliders/slider2.png";
import slide3 from "/src/assets/sliders/slider3.png";
import slide4 from "/src/assets/sliders/slider4.png";
import slide5 from "/src/assets/sliders/slider5.png";
import slide6 from "/src/assets/sliders/slider6.png";



export default function GallerySlider() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [slide1, slide2, slide3, slide4, slide5, slide6];

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1800px] mx-auto px-4">

        {/* header */}
        <div className="relative mb-5 lg:mb-20 md:mb-10 lg:mt-10 md:mt-5">
          <h2 className="text-[#333333] text-[15px] xl:text-[38px] lg:text-[38px] md:text-[30px] font-blont font-semibold leading-tight pl-5 lg:pl-20 md:pl-10">
            ЗАВЖДИ РАДІ ВІТАТИ ВАС <br />
            У НАШОМУ МЕДИЧНОМУ ПРОСТОРІ
          </h2>

        <div className="absolute right-1 -bottom-3 text-[30px] xl:right-25 xl:-bottom-15 lg:right-25 lg:-bottom-15 flex items-center text-[#333333] xl:text-[46px] lg:text-[46px]
                        md:right-10 md:-bottom-10 md:text-[40px]">
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              className="hover:opacity-70 transition cursor-pointer"
            >
              <IoIosArrowRoundBack />
            </button>

            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              className="hover:opacity-70 transition cursor-pointer"
            >
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>

        {/* slider */}
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <div
                className="h-[180px] xl:h-[420px] lg:h-[420px] md:h-[280px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}
