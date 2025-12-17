import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";


import Header from "./layout/Header";
import Home from "./MainPage/Home";
import Footer from "./layout/Footer";
import Contacts from "./MainPage/Contacts";
import Marquee from "./MainPage/Marquee";
import AboutHome from "./MainPage/AboutHome";
import PriceHome from "./MainPage/PriceHome";
import FAQ from "./MainPage/FAQ";
import GallerySlider from "./MainPage/GallerySlider";
import ServicesSection from "./MainPage/ServicesSection";
import Price from "./Price";
import AboutClinic from "./AboutPage/AboutClinic";
import Team from "./AboutPage/Team";
import { scrollToHash } from "./scrollToHash";


function ScrollManager() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) scrollToHash(hash);
  }, [hash]);

  return null;
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager /> 

      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Marquee />
              <GallerySlider />
              <AboutHome />
              <ServicesSection />
              <PriceHome />
              <FAQ />
              <Contacts />
            </>
          }
        />

        <Route
          path="/about-clinic"
          element={
            <>
              <AboutClinic />
              <Team />
            </>
          }
        />

        <Route path="/price" element={<Price />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
