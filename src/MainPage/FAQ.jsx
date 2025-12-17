import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "Як заздалегідь потрібно записуватися на прийом?",
      a: "Рекомендуємо планувати візит за 1–2 тижні до бажаної дати, особливо для консультацій та складних процедур.",
    },
    {
      q: "Чи потрібно здавати аналізи або робити знімки перед першим візитом?",
      a: "У більшості випадків додаткові аналізи не потрібні. За необхідності лікар призначить рентген або КТ безпосередньо під час консультації.",
    },
    {
      q: "Як проходить перша консультація в клініці?",
      a: "Під час першого візиту лікар проводить огляд, за потреби — діагностику, обговорює можливі варіанти лікування та складає індивідуальний план.",
    },
    {
      q: "Чи болісні стоматологічні процедури?",
      a: "Усі процедури в Numa Dental проводяться з використанням сучасної анестезії, що забезпечує максимальний комфорт і безболісність для пацієнта.",
    },
    {
      q: "Скільки часу займає лікування карієсу?",
      a: "У більшості випадків лікування карієсу займає один візит тривалістю від 30 до 60 хвилин, залежно від складності випадку.",
    },
    {
      q: "Чи можна записатися на прийом онлайн?",
      a: "Так, ви можете швидко записатися онлайн через сайт або звернутися до адміністраторів клініки зручним для вас способом.",
    },
    {
      q: "Як підготуватися до стоматологічного прийому?",
      a: "Рекомендуємо поїсти за 1–2 години до візиту та провести звичну гігієну порожнини рота. Додаткова підготовка зазвичай не потрібна.",
    },

  ];

  return (
    <section className="w-full py-10 xl:py-24 lg:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[50px] xl:text-[100px] lg:text-[80px] font-blont font-extrabold text-[#333333] pl-6  xl:mb-12 lg:mb-8 lg:pl-20">
          FAQ.
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-8 xl:px-20 lg:px-20 px-6" >
          <div className="border-t border-[#a0a0a0] w-full mb-6"></div>
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#a0a0a0] pb-6">
              
              {/* QUESTION ROW */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-[#444444] xl:text-[25px] lg:text-[20px] font-medium hover:opacity-80 transition">
                  {item.q}
                </h3>

                <button className="text-[#333333] xl:text-[28px] lg:text-[26px]">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>
              </div>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#555555] xl:text-[18px] lg:text-[16px] leading-relaxed xl:mt-2">
                  {item.a}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
