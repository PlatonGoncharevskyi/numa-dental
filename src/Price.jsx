import { useState, useEffect  } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


export default function Price() {

    useEffect(() => {
    document.title = "Price – Numa.Dental";
  }, []);

  const priceData = [
    {
      title: "Консультація / діагностика",
      items: [
        { name: "Консультація лікаря-стоматолога", price: "500 ₴" },
        { name: "Комп’ютерна томографія", price: "від 1 000 до 1 500 ₴" },
      ],
      description:
  "Консультація включає огляд, аналіз стану ротової порожнини та складання індивідуального плану лікування. За необхідності проводиться додаткова діагностика для максимально точної оцінки клінічної ситуації.",
    },

    {
      title: "Терапевтична стоматологія",
      items: [
        { name: "Професійна гігієна", price: "від 3 000 до 4 000 ₴" },
        { name: "Пломбування зубів", price: "від 2 000 до 4 000 ₴" },
        { name: "Художні реставрації", price: "від 3 800 до 5 200 ₴" },
      ],
      description:
  "Терапевтичне лікування спрямоване на збереження здоров’я зубів та відновлення їх функції й естетики. Усі процедури виконуються з використанням сучасних матеріалів та методик, що забезпечують довготривалий результат.",
    },

    {
      title: "Хірургічна стоматологія",
      items: [
        { name: "Видалення зубів", price: "від 3 000 до 7 000 ₴" },
        { name: "Імплантація", price: "від 30 000 до 44 000 ₴" },
      ],
      description:
  "Хірургічні втручання проводяться з дотриманням сучасних протоколів безпеки та комфорту пацієнта. Метод лікування та його обсяг визначаються індивідуально після консультації та обстеження.",

    },

    {
      title: "Ортопедична стоматологія",
      items: [
        { name: "Вініри, керамічні коронки", price: "від 14 000 до 26 000 ₴" },
        { name: "Коронка на імпланті", price: "від 12 000 до 18 000 ₴" },
      ],
      description:
  "Ортопедичне лікування дозволяє відновити функцію жування та естетику посмішки. Підбір конструкцій здійснюється індивідуально з урахуванням анатомічних особливостей та побажань пацієнта.",

    },

    {
      title: "Ендодонтія",
      items: [
        { name: "Первинна ендодонтія", price: "від 6 300 до 14 200 ₴" },
        { name: "Повторна ендодонтія", price: "від 8 300 до 16 200 ₴" },
      ],
      description:
  "Ендодонтичне лікування спрямоване на збереження зубів навіть у складних клінічних випадках. Процедури виконуються з використанням сучасних технологій, що забезпечують точність та прогнозований результат.",

    },

    {
      title: "Ортодонтична стоматологія",
      items: [
        { name: "Брекет-системи", price: "від 15 000 до 35 000 ₴" },
        { name: "Елайнери", price: "індивідуально" },
        { name: "Ретейнери", price: "від 3 000 ₴" },
        { name: "Зняття брекет-системи", price: "2 500 ₴" },
      ],
      description:
  "Ортодонтичне лікування допомагає виправити прикус та вирівняти зуби для досягнення функціонального й естетичного результату. Вартість залежить від складності випадку та обраної ортодонтичної системи.",

    },

    {
      title: "Пародонтологія",
      items: [],
      description:
  "Пародонтологічне лікування спрямоване на профілактику та лікування захворювань ясен і тканин, що утримують зуби. План лікування та його вартість визначаються індивідуально після огляду.",

    },
    
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleBlock = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="w-full py-20 font-quicksand text-[#333333]">

      {/* breadcrumb */}
      <div className="max-w-[1240px] ml-10 xl:mx-auto mb-5 lg:ml-20 lg:mb-10 lg:mt-6 ">
        <p className="lg:text-[14px] text-[12px] text-[#555555] tracking-wide">
          <a href="/" className="text-[#555555] hover:opacity-70 tracking-[0.1em]">
            ГОЛОВНА
          </a>
          <span className="text-[#404040] font-semibold"> / PRICE</span>
        </p>

        <h1 className="text-[40px] mt-2 lg:text-[60px] font-blont text-[#404040] leading-none lg:mt-4">
          PRICE<span className="text-[#404040]">.</span>
        </h1>
      </div>

      <div className="max-w-[1240px] xl:mx-auto lg:mx-15 space-y-1">

        {priceData.map((block, index) => (
          <div key={index} className="pb-2 lg:pb-5">
            <button
              onClick={() => toggleBlock(index)}
              className="flex items-center gap-3 w-full text-left pl-10 lg:pl-[80px] py-2"
            >
              <h2 className="text-[16px] lg:text-[20px] font-semibold text-[#404040] tracking-wide uppercase mr-5 cursor-pointer">
                {block.title}
              </h2>

              {openIndexes.includes(index) ? (
                <IoIosArrowUp className="text-[#404040] cursor-pointer text-[20px] lg:text-[30px]" />
              ) : (
                <IoIosArrowDown className="text-[#404040] cursor-pointer text-[20px] lg:text-[30px]" />
              )}
            </button>

            <div
              className={`
                transition-all duration-500 overflow-hidden
                ${
                  openIndexes.includes(index)
                    ? "max-h-[1000px] opacity-100 mt-6"
                    : "max-h-0 opacity-0 mt-0"
                }
              `}
            >
              <div className="bg-[#f2f2f2] p-5 mx-5 lg:p-10 lg:ml-[80px]">
                {block.description && (
                  <div className="mb-8 max-w-[800px] text-[14px] lg:text-[16px] leading-relaxed text-[#404040]">
                    {block.description}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">

                  {block.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start">

                      <div>
                        <h3 className="text-[#1] font-bold text-[13px] lg:text-[16px] uppercase">
                          {item.name}
                        </h3>
                      </div>

                      <div className="text-[13px] lg:text-[16px] text-[#1]">
                        {item.price}
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
