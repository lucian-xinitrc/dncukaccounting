'use client'
import { CookieConsent, Footer } from '../components.js';
import { FaWhatsapp, FaArrowLeft, FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";

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
  const phoneNumber = "447392581255";
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ro" : "en"));
  };
  const content = {
    title: {
      ro: "Politica de confidențialitate",
      en: "Privacy Policy",
    },
    updated: {
      ro: "Ultima actualizare: 16 octombrie 2026",
      en: "Last updated: 16 October 2026",
    },
    sections: [
      {
        title: {
          ro: "1. Introducere",
          en: "1. Introduction",
        },
        text: {
          ro: `Această politică explică modul în care DNCUKACCOUNTING LTD prelucrează datele personale în legătură cu utilizarea site-ului www.dncukaccounting.org.

Site-ul este găzduit pe Vercel și utilizează servicii Cloudflare. Preferința vizitatorului privind bannerul de cookies este salvată în localStorage, în browserul acestuia.

Această politică are în vedere legislația aplicabilă din Regatul Unit, inclusiv UK GDPR, Data Protection Act 2018 și PECR, în măsura în care se aplică.`,
          en: `This policy explains how DNCUKACCOUNTING LTD processes personal data in connection with the use of www.dncukaccounting.org.

The website is hosted on Vercel and uses Cloudflare services. The visitor's cookie-banner preference is stored in localStorage in their browser.

This policy takes into account applicable UK legislation, including the UK GDPR, the Data Protection Act 2018 and PECR, where applicable.`,
        },
      },
      {
        title: {
          ro: "2. Operatorul de date",
          en: "2. Data Controller",
        },
        text: {
          ro: `Companie: DNCUKACCOUNTING LTD
Număr de înregistrare: 14218577
Sediu social: Unit 120 Ability House, 121 Brooker Road, Waltham Abbey, Essex, England, EN9 1JH
Email: info@dncukaccounting.com
Site: www.dncukaccounting.org`,
          en: `Company: DNCUKACCOUNTING LTD
Company number: 14218577
Registered office: Unit 120 Ability House, 121 Brooker Road, Waltham Abbey, Essex, England, EN9 1JH
Email: info@dncukaccounting.com
Website: www.dncukaccounting.org`,
        },
      },
      {
        title: {
          ro: "3. Date personale",
          en: "3. Personal Data",
        },
        text: {
          ro: `În funcție de configurare, Vercel și Cloudflare pot prelucra informații tehnice precum adrese IP, orele solicitărilor, informații despre browser și jurnale de securitate.

Aceste activități trebuie verificate în funcție de serviciile efectiv activate pe site.`,
          en: `Depending on the configuration, Vercel and Cloudflare may process technical information such as IP addresses, request timestamps, browser information and security logs.

These activities should be verified against the services actually enabled on the website.`,
        },
      },
      {
        title: {
          ro: "4. Cookies și stocarea locală",
          en: "4. Cookies and Local Storage",
        },
        text: {
          ro: `Preferința vizitatorului privind bannerul de cookies este salvată în localStorage, în browserul acestuia, nu într-un cookie utilizat în acest scop.

Scop: Reținerea preferinței privind bannerul, pentru a evita afișarea repetată a acestuia.

Date stocate: CHEIE dncuk_cookie_consent VALOARE accepted sau declined.

Durată: localStorage păstrează datele până când acestea sunt șterse de vizitator sau eliminate de codul site-ului, dacă nu este configurată o expirare.

Utilizarea localStorage poate intra sub incidența PECR din Regatul Unit, în funcție de scop și circumstanțe.

Cloudflare poate utiliza propriile cookie-uri sau alte tehnologii de stocare, în funcție de serviciile activate. Acestea trebuie verificate separat.`,
          en: `The visitor's cookie-banner preference is stored in localStorage in their browser, rather than in a cookie used for this purpose.

Purpose: To remember the visitor's preference and avoid repeatedly displaying the banner.

Stored data: KEY dncuk_cookie_consent VALUE accepted or declined.

Duration: localStorage retains data until deleted by the visitor or removed by the website's code, unless an expiry is configured.

The use of localStorage may fall within the scope of UK PECR, depending on its purpose and circumstances.

Cloudflare may use its own cookies or other storage technologies depending on the services enabled. These should be checked separately.`,
        },
      },
      {
        title: {
          ro: "5. Scopuri și temeiuri juridice",
          en: "5. Purposes and Legal Bases",
        },
        text: {
          ro: `Informațiile tehnice pot fi prelucrate pentru furnizarea conținutului site-ului, securitate și prevenirea abuzurilor.

Temeiul juridic aplicabil trebuie stabilit în funcție de activitățile efective de prelucrare și de cerințele UK GDPR.`,
          en: `Technical information may be processed to deliver website content, provide security and prevent abuse.

The applicable lawful basis must be determined according to the actual processing activities and UK GDPR requirements.`,
        },
      },
      {
        title: {
          ro: "6. Găzduire și servicii externe",
          en: "6. Hosting and Third-Party Services",
        },
        text: {
          ro: `Site-ul este găzduit pe Vercel și utilizează servicii Cloudflare.

Politica de confidențialitate Vercel:
https://vercel.com/legal/privacy-policy

Politica de confidențialitate Cloudflare:
https://www.cloudflare.com/privacypolicy/

Documentație Cloudflare privind cookie-urile:
https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/`,
          en: `The website is hosted on Vercel and uses Cloudflare services.

Vercel Privacy Policy:
https://vercel.com/legal/privacy-policy

Cloudflare Privacy Policy:
https://www.cloudflare.com/privacypolicy/

Cloudflare Cookie Documentation:
https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/`,
        },
      },
      {
        title: {
          ro: "7. Partajarea și transferul datelor",
          en: "7. Data Sharing and International Transfers",
        },
        text: {
          ro: `Nu vindem date personale. Informațiile tehnice pot fi prelucrate de Vercel și Cloudflare pentru furnizarea și securizarea site-ului.

În funcție de serviciile utilizate, datele pot fi prelucrate în afara Regatului Unit. Transferurile trebuie să respecte cerințele legale aplicabile, acolo unde acestea se aplică.`,
          en: `We do not sell personal data. Technical information may be processed by Vercel and Cloudflare to deliver and secure the website.

Depending on the services used, data may be processed outside the United Kingdom. Transfers must comply with applicable legal requirements where relevant.`,
        },
      },
      {
        title: {
          ro: "8. Păstrarea datelor",
          en: "8. Data Retention",
        },
        text: {
          ro: `Datele sunt păstrate atât timp cât este necesar pentru scopurile prelucrării sau cât impune legea.

Preferința bannerului rămâne în localStorage până când este ștearsă de vizitator sau eliminată de codul site-ului.

Perioadele de păstrare a jurnalelor tehnice depind de setările efective ale serviciilor Vercel și Cloudflare.`,
          en: `Data is retained for as long as necessary for the purposes of processing or as required by law.

The banner preference remains in localStorage until deleted by the visitor or removed by the website's code.

Technical log-retention periods depend on the actual Vercel and Cloudflare service settings.`,
        },
      },
      {
        title: {
          ro: "9. Securitatea datelor",
          en: "9. Data Security",
        },
        text: {
          ro: `Sunt necesare măsuri tehnice și organizatorice adecvate pentru protejarea datelor personale. Niciun serviciu online nu poate garanta securitate absolută.`,
          en: `Appropriate technical and organisational measures are necessary to protect personal data. No online service can guarantee absolute security.`,
        },
      },
      {
        title: {
          ro: "10. Drepturile tale",
          en: "10. Your Rights",
        },
        text: {
          ro: `În condițiile legii, poți avea dreptul de acces, rectificare, ștergere, restricționare sau opoziție față de anumite prelucrări și dreptul la portabilitatea datelor, acolo unde se aplică.

Contact: info@dncukaccounting.com

Poți depune o plângere la ICO:
https://ico.org.uk/make-a-complaint/`,
          en: `Subject to applicable law, you may have rights to access, correct or erase personal data, restrict or object to certain processing, and request data portability where applicable.

Contact: info@dncukaccounting.com

You may complain to the ICO:
https://ico.org.uk/make-a-complaint/`,
        },
      },
      {
        title: {
          ro: "11. Site-uri terțe",
          en: "11. Third-Party Websites",
        },
        text: {
          ro: `Site-ul poate conține linkuri către site-uri terțe. Nu controlăm practicile lor de confidențialitate.`,
          en: `Our website may contain links to third-party websites. We do not control their privacy practices.`,
        },
      },
      {
        title: {
          ro: "12. Modificări",
          en: "12. Changes",
        },
        text: {
          ro: `Această politică poate fi actualizată atunci când site-ul, serviciile sau obligațiile legale se modifică.`,
          en: `This policy may be updated when the website, services or legal obligations change.`,
        },
      },
      {
        title: {
          ro: "13. Contact",
          en: "13. Contact",
        },
        text: {
          ro: `DNCUKACCOUNTING LTD
Număr de înregistrare: 14218577
Unit 120 Ability House, 121 Brooker Road, Waltham Abbey, Essex, England, EN9 1JH
info@dncukaccounting.com
https://www.dncukaccounting.org`,
          en: `DNCUKACCOUNTING LTD
Company number: 14218577
Unit 120 Ability House, 121 Brooker Road, Waltham Abbey, Essex, England, EN9 1JH
info@dncukaccounting.com
https://www.dncukaccounting.org`,
        },
      },
    ],
  };

  const t = (value) => value[language] || value.en;

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
        

          <div className="bg-[#c84449] rounded-full p-1">
          
          <button
            onClick={() => setLanguage("en")}
            className={`py-2 px-2.5 rounded-full font-bold transition ${
              language === "en"
                ? "bg-[whitesmoke] text-black"
                : "bg-[#c84449] text-white"
            }`}
          >EN
          </button>

          <button
            onClick={() => setLanguage("ro")}
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
      <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
        <h1 className="mb-3 text-3xl font-bold">
          {t(content.title)}
        </h1>

        <p className="mb-10 text-sm text-gray-500">
          {t(content.updated)}
        </p>

        <div className="space-y-8">
          {content.sections.map((section) => (
            <section key={section.title.en}>
              <h2 className="mb-3 text-xl font-semibold">
                {t(section.title)}
              </h2>

              <p className="whitespace-pre-line leading-7">
                {t(section.text)}
              </p>
            </section>
          ))}
        </div>
      </main>
     <footer className="overflow-hidden dark:bg-black shadow-xl/20 flex justify-center p-20 dark:text-white">
          <div className="w-full">
          <div className="sm:grid-cols-3 w-full sm:flex gap-5">
            <div className="py-10 sm:p-10 w-full">
              <div>
                <h1 className="text-3xl">DNCUKACCOUNTING</h1>
                <h2 className="mt-2 ml-5 text-1xl">Unit 120 Ability House,</h2>
                <h2 className="ml-5 text-1xl">121 Brooker Road, Waltham Abbey</h2>
                <h2 className="ml-5 text-1xl">Essex, England</h2>
                <h2 className="ml-5 text-1xl">EN9 1JH</h2>
              </div>
              <div>
                <div className="bg-black border border-white/10 rounded-full p-1 flex font-bold my-2 ">
                  <div className="p-2 bg-white rounded-full text-black px-5">
                    {language === "en" ? "Monday - Friday" : "Luni - Vineri"}
                  </div>
                  <p className="my-0.5 mx-2 text-white text-lg pt-1">
                    10:00 - 17:00
                  </p>
                </div>
                <div className="bg-black border border-white/10 rounded-full p-1 flex font-bold my-2 ">
                  <div className="p-2 bg-white rounded-full text-black px-5">
                    {language === "en" ? "Saturday" : "Sâmbată"}
                  </div>
                  <p className="my-0.5 mx-2 text-white text-lg pt-1">
                    10:00 - 15:00
                  </p>
                </div>
                <div className="bg-black border border-white/10 rounded-full p-1 flex font-bold my-2 ">
                  <div className="p-2 bg-white rounded-full text-black px-5">
                    {language === "en" ? "Sunday" : "Duminică"}
                  </div>
                  <p className="my-0.5 mx-2 text-white text-lg pt-1">
                    {language === "en" ? "Closed" : "Închis"}
                  </p>
                </div>

              </div>
            </div>
            <div className="sm:flex sm:justify-center py-10 sm:p-10 w-full">
              <div className="block">
                <h1 className="text-3xl">Quick links</h1>
                <a href="/privacy-policy" className="block ml-5 p-2 hover:underline">Privacy Policy</a>
              </div>
            </div>
            <div className="flex justify-center sm:p-10 w-full">
              <div>
                <h1 className="text-3xl">Meet the Team</h1>
                <p className="mt-5 block ml-5 p-1 hover:underline">Contact</p>
                <a href="" className="block ml-5 p-1 hover:underline flex"><MdEmail className="text-xl mx-2" /> info@dncukaccounting.com</a>
            
              </div>
            </div>
            </div>
            <div className="w-full">
              <hr className="sm:w-7xl my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

              <div className="flex justify-center">
                <span className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© 2026 <a href="https://dncukaccounting.org/" className="hover:underline">DNCUKACCOUNTING</a>. All Rights Reserved.</span>
               </div>
            </div>
          </div>
      </footer>    </section>
  );
}