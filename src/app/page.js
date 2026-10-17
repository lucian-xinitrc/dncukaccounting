'use client'
import Image from "next/image";
import { CookieConsent, ScrollUp, Footer } from './components.js';
import { FaWhatsapp, FaArrowLeft, FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const slides = [
      {
        image: "/images/header/slide1.jpeg",
        title: {
          ro: "DNCUK ACCOUNTING",
          en: "DNCUK ACCOUNTING",
        },
        description: {
          ro: "O firmă de contabilitate și consultanță fiscală în cadrul căreia excelența și calitatea serviciilor sunt primordiale.",
          en: "An accounting and tax consultancy firm where excellence and quality of service are our top priorities.",
        },
      },
      {
        image: "/images/header/slide2.jpeg",
        title: {
          ro: "Profesionalism",
          en: "Professionalism",
        },
        description: {
          ro: "Directorii DNC UK ACCOUNTING sunt absolvenți ai Universității Babeș-Bolyai, specializarea Contabilitate și Informatică de Gestiune, cu diplome de licență și masterat echivalate în UK în 2018 prin NARIC.",
          en: "The directors of DNC UK ACCOUNTING graduated from Babeș-Bolyai University, specializing in Accounting and Management Information Systems. Their bachelor's and master's degrees were recognized in the UK in 2018 through NARIC.",
        },
      },
      {
        image: "/images/header/slide3.jpeg",
        title: {
          ro: "Experiență",
          en: "Experience",
        },
        description: {
          ro: "Cu experiență financiar-contabilă în UK și România, oferim servicii personalizate pentru companii LTD și persoane fizice Self-Employed din Marea Britanie.",
          en: "With accounting and financial experience in the UK and Romania, we provide tailored services to LTD companies and Self-Employed individuals across the United Kingdom.",
        },
      },
    ];
  const [current, setCurrent] = useState(0);
  const [language, setLanguage] = useState("en");

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
  const phoneNumber = "";


  useEffect(() => {
    const savedLanguage = localStorage.getItem("dncuk_language");

    if (savedLanguage === "ro" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeToEn = () => {
    localStorage.setItem("dncuk_language", "en");
    setLanguage("en");
  };

  const changeToRo = () => {
    localStorage.setItem("dncuk_language", "ro");
    setLanguage("ro");
  };

  return (
    <>
    <section>
      <CookieConsent />
     
      <header className="relative h-screen min-h-[600px] overflow-hidden bg-[whitesmoke] text-white shadow-lg/40">
      
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

          <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-[#c84449] hover:text-white"
          >
            {language === "en" ? "Let's talk" : "Hai să vorbim"}
          </a>

        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-10 right-6 z-20 sm:flex items-center gap-4 sm:right-12 lg:right-24">
        
        
        <div className="bg-[#c84449] rounded-full p-1 flex font-bold">
          <div className="p-2 bg-white rounded-full">
            <MdOutlineAlternateEmail className="text-black" />
          </div>
          <p className="my-0.5 mx-2 text-white text-lg">
            info@dncukaccounting.com
          </p>
        </div>
        <div className="bg-[#c84449] rounded-full p-1 flex font-bold my-2 ">
          <div className="p-2 bg-white rounded-full">
            <FaPhoneAlt className="text-black" />
          </div>
          <p className="my-0.5 mx-2 text-white text-lg">
            +44 07443 347047
          </p>
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-xl transition hover:bg-white hover:text-black"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-xl transition hover:bg-white hover:text-black"
        >
         <FaArrowRight />
        </button>
        <div className="bg-[#c84449] rounded-full p-1">
          
          <button

            onClick={changeToEn}
            className={`py-2 px-2.5 rounded-full font-bold transition ${
              language === "en"
                ? "bg-[whitesmoke] text-black"
                : "bg-[#c84449] text-white"
            }`}
          >EN
          </button>

          <button
            onClick={changeToRo}
            className={`py-2 px-2.5 rounded-full font-bold transition ${
              language === "ro"
                ? "bg-[whitesmoke] text-black"
                : "bg-[#c84449] text-white"
            }`}
          >RO
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-6 z-20 flex gap-2 sm:left-12 lg:left-24">
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
    </section>
    </>
  );
}
