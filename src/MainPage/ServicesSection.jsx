import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import slider3 from "../assets/sliders/slider3.png";
import slider5 from "../assets/sliders/slider5.png";
import BookingModal from "../layout/BookingModal";

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
    adaptiveHeight: true, // Додано для кращої поведінки на мобільних
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="services" className="relative w-full overflow-hidden pb-16 mt-10 font-quicksand">
      {/* Декоративний фон (прихований на мобільних для чистоти) */}
      <div className="hidden lg:block absolute right-0 xl:top-[172px] lg:top-[140px] xl:bottom-[30px] lg:bottom-[1px] xl:w-[150px] lg:w-[110px] bg-[#404040] z-0"></div>
      
      <h2 className="text-[40px] md:text-[60px] xl:text-[100px] lg:text-[80px] font-extrabold text-[#333333] tracking-tight xl:pl-50 lg:pl-30 pl-6 mb-8 uppercase">
        Послуги.
      </h2>

      <div className="max-w-[1300px] mx-auto relative z-10 xl:pl-20 lg:pl-30">
        <div className="relative xl:w-fit lg:w-fit xl:ml-[-60px] lg:ml-[-40px]">
          <div className="wrap-slider-service w-full bg-[#f2f2f2] px-6 py-8 md:px-10 lg:w-[760px] xl:w-[1020px] xl:py-14 relative z-10">
            
            <Slider ref={sliderRef} {...settings}>
              {serviceItems.map((item, index) => (
                <div key={index} className="outline-none">
                  <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-0">
                    
                    {/* IMAGE: Зменшено висоту на мобільних (h-[200px]) */}
                    <div
                      className="w-full h-[220px] md:h-[300px] lg:w-[45%] lg:h-[400px] xl:h-[500px] bg-cover bg-center rounded-lg lg:rounded-none shadow-sm lg:shadow-none"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />

                    {/* CONTENT */}
                    <div className="w-full flex items-center lg:w-[55%] lg:pl-12">
                      <div className="w-full">
                        <h3 className="text-[#333] text-[26px] md:text-[34px] xl:text-[50px] lg:text-[45px] font-bold uppercase leading-tight mb-4">
                          {item.title}
                        </h3>

                        {/* TEXT: Прибрано обмеження 250px для кращої читабельності */}
                        <p className="text-[#444] text-[15px] md:text-[16px] xl:text-[18px] leading-relaxed max-w-[450px] mb-8">
                          {item.text}
                        </p>

                        {/* CTA BUTTON: Зроблено темною для кращого акценту */}
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="inline-flex justify-center items-center rounded-full
                            w-full md:w-[240px] h-[56px] bg-[#333333] text-white
                            font-semibold text-[14px] uppercase tracking-[0.2em]
                            hover:bg-[#555555] active:scale-95
                            transition-all duration-300"
                        >
                          записатися
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ARROWS (Тільки десктоп) */}
          <div className="hidden absolute xl:right-[-160px] lg:right-[-108px] top-1/2 -translate-y-1/2 xl:flex lg:flex flex-row text-[#333333] xl:text-[56px] lg:text-[48px] gap-4">
            <button onClick={() => sliderRef.current?.slickPrev()} className="hover:text-[#666] transition cursor-pointer">
              <IoIosArrowRoundBack />
            </button>
            <button onClick={() => sliderRef.current?.slickNext()} className="hover:text-[#666] transition cursor-pointer">
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
              <BookingModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}
