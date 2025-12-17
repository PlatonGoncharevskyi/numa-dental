export default function AboutHome() {
  return (
    <section
      className="
        w-full 
        bg-white 
        font-quicksand
        text-[#555555]
        xl:py-26
        lg:py-20
      "
    >
      {/* MAIN CENTER CONTAINER */}
      <div className="max-w-[1100px] mx-auto px-10 xl:px-4 lg:px-20">

        {/* TITLE */}
        <h2
          className="
            text-[50px] xl:text-[100px] lg:text-[80px]
            font-extrabold
            text-[#333333]
            tracking-tight
            xl:mb-10 lg:mb-10
          "
        >
          ПРО НАС.
        </h2>

        {/* FLEX LIKE ORIGINAL */}
        <div
          className="
            flex flex-col md:flex-row
            gap-3
            xl:gap-20
            lg:gap-20
            text-[14px]
            xl:text-[18px]
            lg:text-[16px]
            leading-[180%]
          "
        >

          {/* LEFT BLOCK */}
          <div className="flex-1 space-y-3 xl:space-y-8  text-left">
            <p>
            <span className="font-bold">Numa.Dental</span> — це сучасна стоматологічна клініка, де поєднуються професіоналізм лікарів, передові технології
            та уважне ставлення до кожного пацієнта. Ми створюємо простір, у якому турбота про здоров’я зубів та естетику
            усмішки стає комфортною і зрозумілою.
            </p>

            <p>
              Ми працюємо з використанням <span className="font-bold">сучасних методик</span> у терапевтичній, хірургічній, ортопедичній, ендодонтичній 
              та ортодонтичній стоматології. У своїй практиці застосовуємо доказові клінічні протоколи, інноваційне 
              обладнання та матеріали від провідних світових виробників, ефективність яких підтверджена часом і досвідом.
            </p>

          </div>

          {/* RIGHT BLOCK */}
          <div className="flex-1 space-y-3  xl:space-y-8 text-left">
            <p>
              <span className="font-bold">Наша філософія</span> — індивідуальний підхід до кожного пацієнта. 
              Ми ретельно аналізуємо клінічну ситуацію, пропонуємо оптимальні варіанти лікування 
              та супроводжуємо пацієнта на всіх етапах — від первинної консультації до завершення лікування.
            </p>

            <p>
              У <span className="font-bold">Numa.Dental</span> ми об’єднуємо команду досвідчених лікарів, 
              які постійно вдосконалюють свої навички, навчаються та впроваджують сучасні рішення для досягнення 
              прогнозованого і довготривалого результату.
            </p>

            <div className="text-center xl:pt-4 ">
              <a
                href="/about-clinic#team"
                className="
                  inline-block
                  bg-[#444444]
                  text-white
                  font-semibold
                  xl:text-[20px]
                  xl:text-[18px]
                  tracking-[0.25em]
                  px-5
                  xl:px-16
                  lg:px-10
                  py-4
                  xl:py-6
                  lg:py-5
                  rounded-full
                  transition
                  hover:bg-[#555555]
                "
              >
                НАША КОМАНДА
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
