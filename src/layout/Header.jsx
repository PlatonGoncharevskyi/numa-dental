import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaInstagram, FaViber, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [showCircle, setShowCircle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFromTop, setOpenFromTop] = useState(true); 

  // Show floating button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowCircle(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when scrolling UP
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScrollClose = () => {
      const currentY = window.scrollY;
      if (currentY < lastY) {
        setMenuOpen(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, []);

  return (
    <>
      {/* MAIN HEADER */}
      <header className="w-full absolute  top-0 left-0 z-[300] text-[#333333] font-quicksand tracking-wide bg-transparent">
        <div className="max-w-[1400px] mx-auto px-10 xl:px-20 lg:pr-20 lg:pl-20 py-6 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex flex-col leading-none hover:opacity-70 transition">
            <div className="flex items-center font-blont text-[35px] xl:text-[44px] lg:text-[44px] text-[#333333]">
              numa
              <span className="-ml-[6px] text-[0.6em] -translate-y-[14px] inline-block">•</span>
            </div>
            <div className="text-[12px] text-[#7a7a7a] -mt-[4px] tracking-wide font-quicksand">
              dental clinic
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex items-center gap-8 text-[16px] font-medium">
            <Link to="/about-clinic" className="hover:opacity-70 transition">ПРО КЛІНІКУ</Link>
            <Link to="/price" className="font-extrabold hover:opacity-70 transition">PRICE</Link>
            <Link to="/about-clinic#team" className="hover:opacity-70 transition">КОМАНДА</Link>

            {/* DROPDOWN SERVICES */}
            <div className="relative group">
              <div
                className="flex items-center gap-1 hover:opacity-70 transition text-[16px] tracking-wide cursor-pointer"
                onClick={() => { window.location.href = "/#services"; }}
              >
                ПОСЛУГИ
                <span className="text-[6px] mt-[2px] transition-transform duration-300 group-hover:[transform:rotateZ(180deg)]">
                  ▼
                </span>
              </div>

              <div
                className="
                  absolute left-[-13px] top-[100%]
                  text-[#333333]
                  opacity-0 invisible translate-y-1
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-300
                  grid grid-cols-2 gap-x-[130px]
                "
              >
                <button onClick={() => (window.location.href = "/?service=hygiene#services")} className="block text-left px-3 py-1 hover:opacity-70 cursor-pointer">ГІГІЄНА</button>
                <button onClick={() => (window.location.href = "/?service=orthodont#services")} className="block text-left px-3 py-1 hover:opacity-70 cursor-pointer">ОРТОДОНТІЯ</button>
                <button onClick={() => (window.location.href = "/?service=surgery#services")} className="block text-left px-3 py-1 hover:opacity-70 cursor-pointer">ХІРУРГІЯ</button>
                <button onClick={() => (window.location.href = "/?service=exam#services")} className="block text-left px-3 py-1 hover:opacity-70 cursor-pointer">ОБСТЕЖЕННЯ</button>

                <button onClick={() => (window.location.href = "/?service=implant#services")} className="block text-left px-3 py-1 hover:opacity-70 cursor-pointer">ІМПЛАНТАЦІЇ</button>
                <button onClick={() => (window.location.href = "/?service=endo#services")} className="block text-left px-3 py-1 hover:opacity-70 cursor-pointer">ЕНДОНТІЯ</button>
                <button onClick={() => (window.location.href = "/?service=caries#services")} className="block text-left px-3 py-1 hover:opacity-70 cursor-pointer">РЕСТАВРАЦІЇ</button>
                <button onClick={() => (window.location.href = "/?service=ortho#services")} className="block text-left px-3 py-1 hover:opacity-70 cursor-pointer">ОРТОПЕДІЯ</button>
              </div>
            </div>

            <a href="/#contacts" className="hover:opacity-70 transition">КОНТАКТИ</a>
          </nav>

          {/* SOCIALS */}
          <div className="hidden md:flex items-center gap-3 md:pr-10">
            <a href="https://www.instagram.com/numa.dental/" target="_blank" className="p-2 rounded-full bg-[#333333] text-white text-[20px] hover:bg-[#E6E6E6] hover:text-[#333] hover:scale-110 transition"><FaInstagram /></a>
            <a href="https://wa.me/380933891363" target="_blank" className="p-2 rounded-full bg-[#333333] text-white text-[20px] hover:bg-[#E6E6E6] hover:text-[#333] hover:scale-110 transition"><FaWhatsapp /></a>
            <a href="viber://chat?number=%2B380933891363" target="_blank" className="p-2 rounded-full bg-[#333333] text-white text-[20px] hover:bg-[#E6E6E6] hover:text-[#333] hover:scale-110 transition"><FaViber /></a>
            <a href="https://t.me/numa_dental" target="_blank" className="p-2 rounded-full bg-[#333333] text-white text-[20px] hover:bg-[#E6E6E6] hover:text-[#333] hover:scale-110 transition"><FaTelegramPlane /></a>
          </div>
        </div>
      </header>

      {/* FLOATING MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(true)}
        className={`
          fixed lg:top-8 top-6 right-0 z-[350] p-2 bg-[#333333] text-white rounded-full
          text-[20px] mr-[70px] cursor-pointer
          transition-all duration-300 ease-out
          md: right-[-50px] md:top-[27px]
          ${

            "md:opacity-100 md:translate-y-0 md:pointer-events-auto " +

            (showCircle && !menuOpen
              ? "xl:opacity-100 xl:translate-y-0 xl:pointer-events-auto"
              : "xl:opacity-0 xl:-translate-y-4 xl:pointer-events-none")
          }
        `}
      >
        <FiMenu />
      </button>

      {/* TABLET MENU HEADER */}

      <div
        className={`
          hidden md:block
          fixed left-0 w-full
          bg-white z-[350]
          transition-all duration-300 ease-out
          ${openFromTop ? "top-0" : "top-[96px]"}
          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"}
        `}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between lg:ml-50 xl:ml-90">

          <nav className="flex items-center gap-20 text-[16px] text-[#333333] font-medium">
            <Link to="/about-clinic" onClick={() => setMenuOpen(false)}>ПРО КЛІНІКУ</Link>
            <Link to="/price" onClick={() => setMenuOpen(false)} className="font-extrabold">PRICE</Link>
            <a href="/about-clinic#team" onClick={() => setMenuOpen(false)}>КОМАНДА</a>
            <a href="/#services" onClick={() => setMenuOpen(false)}>ПОСЛУГИ</a>
            <a href="/#contacts" onClick={() => setMenuOpen(false)}>КОНТАКТИ</a>
          </nav>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 bg-[#333] text-white rounded-full text-[20px] cursor-pointer"
          >
            <FiX />
          </button>

        </div>
      </div>
      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`
            fixed inset-0 bg-white z-[500]
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          md:hidden
          ${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"}
                  `}
        >
        {/* TOP */}
        <div className="flex items-center justify-between pl-10 pr-5 pt-6">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex flex-col leading-none">
            <div className="flex items-center font-blont text-[35px] text-[#333333]">
              numa
              <span className="-ml-[6px] text-[0.6em] -translate-y-[14px] inline-block">•</span>
            </div>
            <div className="text-[12px] text-[#7a7a7a] -mt-[4px] tracking-wide font-quicksand">
              dental clinic
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 mt-[-7px] bg-[#333] text-white rounded-full text-[20px]"
          >
            <FiX />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-10 mt-20 font-blont">
          <div className="font-quicksand text-[#333333] text-[35px] font-extrabold mb-6">
            МЕНЮ
          </div>

          <nav className="flex flex-col gap-3 text-[16px] font-medium text-[#333333] font-bold ml-5">
            <Link to="/about-clinic" onClick={() => setMenuOpen(false)}>ПРО КЛІНІКУ</Link>
            <Link to="/price" onClick={() => setMenuOpen(false)} className="font-extrabold font-blont">PRICE</Link>
            <Link to="/about-clinic#team" onClick={() => setMenuOpen(false)}>КОМАНДА</Link>
            <Link to="/#services" onClick={() => setMenuOpen(false)}>ПОСЛУГИ</Link>
            <Link to="/#contacts" onClick={() => setMenuOpen(false)}>КОНТАКТИ</Link>
          </nav>
        </div>

        {/* SOCIALS BOTTOM */}
      <div className="flex justify-center gap-5 mt-8">

          <a
            href="https://www.instagram.com/numa.dental/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 rounded-full bg-[#333333] text-[#E6E6E6] text-[22px]
              cursor-pointer 
              transition-all duration-300 ease-in-out
              hover:bg-[#E6E6E6]
              hover:text-[#333333]
              hover:scale-110
            "
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/380933891363"
            target="_blank"
            rel="noopener noreferrer" 
            className="
              p-2 rounded-full bg-[#333333] text-[#E6E6E6] text-[22px]
              cursor-pointer 
              transition-all duration-300 ease-in-out
              hover:bg-[#E6E6E6]
              hover:text-[#333333]
              hover:scale-110
            "
          >
            <FaWhatsapp />
          </a>

          <a
            href="viber://chat?number=%2B380933891363"
            target="_blank"
            rel="noopener noreferrer"  
            className="
              p-2 rounded-full bg-[#333333] text-[#E6E6E6] text-[22px]
              cursor-pointer 
              transition-all duration-300 ease-in-out
              hover:bg-[#E6E6E6]
              hover:text-[#333333]
              hover:scale-110
            "
          >
            <FaViber />
          </a>
          <a
            href="https://t.me/numa_dental"
            target="_blank"
            rel="noopener noreferrer"   
            className="           
              p-2 rounded-full bg-[#333333] text-[#E6E6E6] text-[22px]
              cursor-pointer 
              transition-all duration-300 ease-in-out
              hover:bg-[#E6E6E6]
              hover:text-[#333333]
              hover:scale-110
            "
          >
            <FaTelegramPlane />
          </a>

      </div>
      </div>
    </>
  );
}
