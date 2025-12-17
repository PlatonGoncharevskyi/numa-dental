import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaViber,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#404040] text-white font-quicksand py-12">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            lg:grid-cols-4
            gap-12
          "
        >

          {/* LOGO */}
          <div className="max-w-[260px] mx-auto sm:mx-0 text-center sm:text-left">
            <Link to="/" className="flex flex-col items-center sm:items-start mb-6">
              <div className="flex items-center font-blont text-[40px]">
                numa
                <span className="-ml-[6px] text-[0.6em] -translate-y-[12px] inline-block">•</span>
              </div>
              <div className="text-[12px] text-white/70 -mt-[4px] tracking-wide">
                dental clinic
              </div>
            </Link>

            <p className="text-[15px] leading-[22px] opacity-90">
              Ліцензовано згідно із наказом МОЗ України №2224 від <br />
              01.10.2020. numa.dental
            </p>
          </div>

          {/* MENU — tablet+ */}
          <div className="hidden sm:block">
            <h3 className="text-[18px] font-semibold tracking-[0.15em] uppercase mb-5">
              Меню
            </h3>
            <ul className="space-y-1">
              <li><Link className="hover:opacity-70" to="/about-clinic">Про клініку</Link></li>
              <li><Link className="hover:opacity-70" to="/about-clinic#team">Лікарі</Link></li>
              <li><Link className="hover:opacity-70" to="/#contacts">Контакти</Link></li>
              <li><Link className="hover:opacity-70" to="/price">Ціни</Link></li>
            </ul>
          </div>

          {/* SOCIAL TEXT — tablet+ (right side) */}
          <div className="hidden sm:block sm:col-start-3 lg:col-start-auto">
            <h3 className="text-[18px] font-semibold tracking-[0.15em] uppercase mb-5">
              Соц.мережі
            </h3>
            <ul className="space-y-1">
              <li><a className="hover:opacity-70" href="https://www.instagram.com/numa.dental/" target="_blank">Instagram</a></li>
              <li><a className="hover:opacity-70" href="https://wa.me/380933891363" target="_blank">WhatsApp</a></li>
              <li><a className="hover:opacity-70" href="viber://chat?number=%2B380933891363" target="_blank">Viber</a></li>
              <li><a className="hover:opacity-70" href="https://t.me/numa_dental" target="_blank">Telegram</a></li>
            </ul>
          </div>

          {/* SERVICES — desktop only */}
          <div className="hidden lg:block">
            <h3 className="text-[18px] font-semibold tracking-[0.15em] uppercase mb-5">
              Послуги
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              <FooterService label="Гігієна" href="/?service=hygiene#services" />
              <FooterService label="Ортодонтія" href="/?service=orthodont#services" />
              <FooterService label="Хірургія" href="/?service=surgery#services" />
              <FooterService label="Обстеження" href="/?service=exam#services" />
              <FooterService label="Імплантації" href="/?service=implant#services" />
              <FooterService label="Ендодонтія" href="/?service=endo#services" />
              <FooterService label="Реставрації" href="/?service=caries#services" />
              <FooterService label="Ортопедія" href="/?service=ortho#services" />
            </div>
          </div>
        </div>

        {/* MOBILE SOCIAL ICONS */}
        <div className="flex justify-center gap-5 mt-10 sm:hidden">
          <FooterIcon href="https://www.instagram.com/numa.dental/" icon={<FaInstagram />} />
          <FooterIcon href="https://wa.me/380933891363" icon={<FaWhatsapp />} />
          <FooterIcon href="viber://chat?number=%2B380933891363" icon={<FaViber />} />
          <FooterIcon href="https://t.me/numa_dental" icon={<FaTelegramPlane />} />
        </div>

      </div>
    </footer>
  );
}

function FooterService({ label, href }) {
  return (
    <button
      onClick={() => (window.location.href = href)}
      className="text-left hover:opacity-70 transition cursor-pointer"
    >
      {label}
    </button>
  );
}

function FooterIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-3 rounded-full bg-[#E6E6E6] text-[#333333] text-[22px]
        transition-all duration-300
        hover:bg-[#333333]
        hover:text-[#E6E6E6]
        hover:scale-110
      "
    >
      {icon}
    </a>
  );
}
