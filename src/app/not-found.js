'use client'
import { CookieConsent, ScrollUp, Footer } from './components.js';
import { FaWhatsapp, FaArrowLeft, FaArrowRight, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Home() {
  const slides = [
      {
        image: "/images/header/slide1.jpeg",
        title: {
          ro: "404 Pagină negasită",
          en: "404 Page not found",
        },
        description: {
          ro: "Pagină negasită",
          en: "Page not found",
        },
      },
    ];
  const [current, setCurrent] = useState(0);
  const [language, setLanguage] = useState("en");

   useEffect(() => {
    const savedLanguage = sessionStorage.getItem("dncuk_language");

    if (savedLanguage === "ro" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeToEn = () => {
    if( sessionStorage.getItem("dncuk_language") === "accepted") {
      sessionStorage.setItem("dncuk_language", "en");
      
    }
    setLanguage("en");
  };

  const changeToRo = () => {
    if( sessionStorage.getItem("dncuk_language") === "accepted") {
      sessionStorage.setItem("dncuk_language", "ro");
      
    }
    setLanguage("ro");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const phoneNumber = "447392581255";
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ro" : "en"));
  };
  
  return (
    <section className="min-h-screen bg-[whitesmoke]">
      <header className="relative py-20 overflow-hidden bg-[whitesmoke] text-white shadow-lg/40">
      
      <div
        className="bg-[whitesmoke] absolute inset-0 flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className="relative h-full w-full flex-shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
              aria-hidden={index !== current}
            />
          ))}
        </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <banner className="relative w-full">
        
      </banner>
      {/* Header content */}
      <div className="relative z-10 flex h-full items-center px-6 sm:px-12 lg:px-24">

        <div
          key={current}
          className="max-w-3xl animate-fade-in"
        >
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-8xl">
              {slides[current].title[language]}

            </h1>
          <p className="mb-8 max-w-sm sm:max-w-5xl text-base leading-7 text-gray-200 sm:text-lg">
            {slides[current].description[language]}
          </p>

        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-10 right-6 z-20 sm:flex items-center gap-4 sm:right-12 lg:right-24">
      
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-6 z-20 flex gap-2 sm:left-12 lg:left-24">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-12 bg-[#c84449]"
                : "w-5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </header>
      
    <Footer language={language} />
    <ScrollUp />
    <div className="fixed top-6 right-6 z-50 rounded-full bg-[#c84449] p-1 shadow-lg">
      <button
        onClick={changeToEn}
        aria-label="Switch to English"
        className={`rounded-full px-2.5 py-2 font-bold transition ${
          language === "en"
            ? "bg-[whitesmoke] text-black"
            : "bg-[#c84449] text-white"
        }`}
      >
        EN
      </button>

      <button
        onClick={changeToRo}
        aria-label="Schimbă în română"
        className={`rounded-full px-2.5 py-2 font-bold transition ${
          language === "ro"
            ? "bg-[whitesmoke] text-black"
            : "bg-[#c84449] text-white"
        }`}
      >
        RO
      </button>
    </div>
    </section>
  );
}