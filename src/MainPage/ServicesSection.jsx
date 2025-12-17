import Slider from "react-slick";
import { useRef, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import slider3 from "../assets/sliders/slider3.png";
import slider5 from "../assets/sliders/slider5.png";

export let sliderRefGlobal = null;

export const serviceItems = [
  {
    id: "exam",
    title: "Обстеження / первинний огляд",
    img: slider3,
    text:
      "Проводимо комплексний огляд ротової порожнини та оцінку стану зубів і ясен. Формуємо індивідуальний план лікування з урахуванням клінічної ситуації та ваших потреб."
  },

  {
    id: "hygiene",
    title: "Гігієна та відбілювання",
    img: slider5,
    text:
      "Професійно очищаємо зуби від нальоту та каменю, покращуємо стан ясен і естетику усмішки. Підбираємо безпечні методи відбілювання для природного результату."
  },

  {
    id: "caries",
    title: "Лікування карієсу / Реставрації",
    img: slider3,
    text:
      "Виконуємо лікування карієсу та естетичні реставрації з використанням сучасних матеріалів. Відновлюємо форму, функцію та природний вигляд зубів."
  },

  {
    id: "endo",
    title: "Ендодонтія",
    img: slider5,
    text:
      "Проводимо лікування кореневих каналів із застосуванням сучасних технологій. Прагнемо зберегти зуб навіть у складних клінічних випадках."
  },

  {
    id: "ortho",
    title: "Ортопедія",
    img: slider3,
    text:
      "Відновлюємо втрачені або пошкоджені зуби за допомогою коронок та ортопедичних конструкцій. Підбираємо рішення для функціонального та естетичного результату."
  },

  {
    id: "surgery",
    title: "Хірургія",
    img: slider5,
    text:
      "Виконуємо хірургічні втручання з дотриманням сучасних стандартів безпеки. Забезпечуємо комфорт пацієнта на кожному етапі лікування."
  },

  {
    id: "implant",
    title: "Імплантація",
    img: slider3,
    text:
      "Проводимо імплантацію з використанням перевірених систем. Відновлюємо функцію жування та природну естетику усмішки."
  },

  {
    id: "orthodont",
    title: "Ортодонтія",
    img: slider5,
    text:
      "Виправляємо прикус і вирівнюємо зуби за допомогою сучасних ортодонтичних систем. Підбираємо оптимальний варіант лікування індивідуально."
  },
];


export function goToService(id) {
  const index = serviceItems.findIndex((item) => item.id === id);
  if (sliderRefGlobal && index !== -1) {
    sliderRefGlobal.slickGoTo(index);
  }
}

export default function ServicesSection() {

  const sliderRef = useRef(null);

  useEffect(() => {
    sliderRefGlobal = sliderRef.current;
  }, []);

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");

  if (service) {
    // Дати час слайдеру намалюватися
    setTimeout(() => {
      goToService(service);
    }, 400);
  }
}, []);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section id="services" className="relative w-full overflow-hidden pb-16 mt-10">
      
      <div className="absolute right-0 xl:top-[172px] lg:top-[140px] xl:bottom-[30px] lg:bottom-[1px] xl:w-[150px] lg:w-[110px] bg-[#404040] z-0"></div>
      <h2 className="
            text-[50px] xl:text-[100px] lg:text-[80px]
            font-extrabold
            text-[#333333]
            tracking-tight
            xl:ml-8 xl:ml-5 mb-5 xl:pl-50 lg:pl-30 pl-10">
          ПОСЛУГИ.
        </h2>
      <div className="max-w-[1300px] mx-auto relative z-10 xl:pl-20 lg:pl-30">
        <div className="relative xl:w-fit lg:w-fit xl:ml-[-60px] lg:ml-[-40px] xl:h-[600px] lg:h-[400px]">
          <div
            className="
              wrap-slider-service
              w-full
              bg-[#f2f2f2]
              px-10 py-8
              md:px-8 md:py-8
              lg:w-[760px] lg:px-8 lg:py-8
              xl:w-[1020px] xl:px-10 xl:py-14
              relative z-10
            "
          >

            <Slider ref={sliderRef} {...settings}>
              {serviceItems.map((item, index) => (
                <div key={index} className="item">
                  <div className="cell flex flex-col lg:flex-row w-full">


                    {/* LEFT IMAGE */}
                   <div
                      className="
                        left
                        w-full
                        h-[350px]
                        md:h-[320px]
                        lg:w-[45%] lg:h-[400px]
                        xl:h-[500px]
                        bg-cover bg-center
                      "
                      style={{ backgroundImage: `url(${item.img})` }}
                    />


                    {/* RIGHT CONTENT */}
                    <div
                      className="
                        right
                        w-full
                        flex
                        items-center
                        px-4 pt-4
                        lg:w-[55%] lg:pl-10 lg:pt-0
                      "
                    >
                      <div className="data">

                        <h3 className="text-[#333] text-[30px] xl:text-[50px] lg:text-[45px] font-quicksand uppercase leading-tight mb-3">
                          {item.title}
                        </h3>

                        <p className="text-[#333] xl:text-[16px] lg:text-[14px] leading-relaxed w-[250px]">
                          {item.text}
                        </p>

                        <a
                          href="https://t.me/numa_dental"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center items-center rounded-full
                            w-[220px] h-[60px] bg-white text-[#555555]
                            font-quicksand font-medium text-[15px]
                            uppercase tracking-[0.225em]
                            hover:bg-[#555555] hover:text-white
                            transition-all duration-500 mt-15"
                        >
                          записатися
                        </a>

                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ARROWS */}
          <div className="hidden absolute xl:right-[-160px] lg:right-[-108px] top-1/2 -translate-y-1/2 
                          xl:flex lg:flex flex-row text-[#333333] xl:text-[46px] lg:text-[40px] xl:gap-3 lg:gap-2">

            <button onClick={() => sliderRef.current?.slickPrev()}
              className="hover:opacity-70 transition cursor-pointer">
              <IoIosArrowRoundBack />
            </button>

            <button onClick={() => sliderRef.current?.slickNext()}
              className="hover:opacity-70 transition cursor-pointer">
              <IoIosArrowRoundForward />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
