import img1 from "/src/assets/team/no-photo-man.png";
import img2 from "/src/assets/team/no-photo-woman.png";


export default function Team(){
  const team = [
    {
      name: "Дар'я Бескоровайна",
      role: "ЛІКАР-ТЕРАПЕВТ, ЕНДОДОНТ",
      img: img2,
    },
    {
      name: "Тетяна Медвецька",
      role: "ЛІКАР-ТЕРАПЕВТ, РЕСТАВРАТОР",
      img: img2,
    },
    {
      name: "Сергій Яцук",
      role: "ЛІКАР-ХІРУРГ, ОРТОПЕД",
      img: img1,
    },
    {
      name: "Олексій Бенедерчук",
      role: "ЛІКАР-ОРТОПЕД",
      img: img1,
    },
    {
      name: "Аліса Нікітюк",
      role: "ЛІКАР-ОРТОДОНТ",
      img: img2,
    },
    {
      name: "Дар'я Потапова",
      role: "ЛІКАР-ТЕРАПЕВТ, ЕНДОДОНТ",
      img: img2,
    },
    {
      name: "Анастасія Бочкун",
      role: "ЛІКАР-ПАРАДАНТОЛОГ",
      img: img2,
    },
  ];

  return (
    <section id="team" className="w-full pb-20 font-quicksand text-[#333333]">
      {/* breadcrumb */}
      <div className="max-w-[350px] lg:max-w-[1240px] ml-10 xl:mx-auto lg:ml-20 mb-10 mt-6">
        <h1 className="text-[40px] xl:text-[60px] lg:text-[40px] font-bold text-[#404040] leading-none mt-4">
          НАША КОМАНДА<span className="text-[#404040]">.</span>
        </h1>
      </div>
      <div className="max-w-[1240px] mx-10 lg:mx-auto space-y-1 xl:ml-50 lg:ml-33 xl:mr-130 lg:mr-30 xl:text-[17px] lg:text-[15px]">
        <p className="font-[16px] leading-[26px] xl:text-[17px] lg:text-[15px]">
          <span className="font-bold">Команда Numa.Dental</span> — це лікарі, яких об’єднує спільна мета: забезпечити якісне, 
          безпечне та ефективне стоматологічне лікування. Ми цінуємо професіоналізм, відповідальність та постійний розвиток, 
          щоб кожен пацієнт почувався впевнено і спокійно.
        </p>
      </div>

      <div className="max-w-[1240px] mx-10 mr-5 xl:mx-auto lg:mx-33 xl:mt-14 lg:mt-10 lg:ml-50 lg:mr-[190px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {team.map((member, index) => (
        <div key={index} className="w-full">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-[400px] xl:h-[300px] lg:h-[250px] object-cover"
          />
          <p className="text-[#7a7a7a] xl:text-[12px] lg:text-[11px] uppercase mt-3 tracking-wide">
            {member.role}
          </p>
          <p className="xl:text-[20px] lg:text-[18px] font-semibold text-[#333333]">
            {member.name}
          </p>
        </div>
      ))}
    </div>
    </section>
  )
}
