'use client';
import { useEffect, useState } from 'react';
import { MdOutlineAlternateEmail, MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaGithub, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { Cookie, ShieldCheck, ArrowUpRight } from 'lucide-react';
import {
  Gem,
  Landmark,
  BriefcaseBusiness,
  Wrench,
} from "lucide-react";

const benefitIcons = {
  gem: Gem,
  landmark: Landmark,
  "briefcase-business": BriefcaseBusiness,
  wrench: Wrench,
};

const COOKIE_KEY = 'dncuk_cookie_consent';

const CookieConsent = () => {
  const [openCookieConsent, setOpenCookieConsent] = useState(false);
  const content = {
    title: {
      en: "Privacy & Cookies",
      ro: "Confidențialitate și cookie-uri",
    },
    subtitle: {
      en: "Your privacy matters",
      ro: "Confidențialitatea ta contează",
    },
    text: {
      en: "The only cookies we use are strictly necessary for the proper functioning of the website and blog. We do not retain any personal tracking data.",
      ro: "Singurele cookie-uri pe care le folosim sunt strict necesare pentru funcționarea corespunzătoare a site-ului și a blogului. Nu stocăm date personale în scopuri de urmărire.",
    },
    subtext: {
      en: "By selecting Accept, you acknowledge our Privacy Policy and the use of essential cookies.",
      ro: "Prin selectarea opțiunii „Accept”, confirmi că ai luat la cunoștință Politica de confidențialitate și utilizarea cookie-urilor esențiale.",
    },
    link1: {
      en: "Read Privacy Policy",
      ro: "Citește politica de confidențialitate",
    },
    button1: {
      en: "Decline",
      ro: "Refuz",
    },
    button2: {
      en: "I acknowledge",
      ro: "Am luat la cunoștință",
    },
  };
  useEffect(() => {
    const consent = sessionStorage.getItem(COOKIE_KEY);

    if (!consent) {
      setOpenCookieConsent(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem(COOKIE_KEY, 'accepted');
    sessionStorage.setItem("dncuk_language", 'en');
    setOpenCookieConsent(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem(COOKIE_KEY, 'declined');
    setOpenCookieConsent(false);
  };

  const [cButtonLanguage, setCookieLanguage] = useState("ro");
  const cookieLanguage = () => {
    cButtonLanguage === "en" ?
      setCookieLanguage("ro") :
      setCookieLanguage("en")
  }
  return (
  	<>
    <Modal
        show={openCookieConsent}
        onClose={() => {}}
        dismissible={false}
        position="center"
        className="z-[9999] sm:mx-[20%] lg:mx-[30%] sm:h-screen flex justify-center items-center pt-[10%] bg-transparent no-scrollbar"
      >
      <ModalHeader className="rounded-t-lg !border-b !border-black/10 !px-6 !py-5 bg-[whitesmoke]">
        <div className="flex items-center gap-3">
          <div className="mx-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-black">
              DNCUKAccounting 
            </p>
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              {content.title[cButtonLanguage]}
              
            </h2>
            
          </div>
          
        </div>

      </ModalHeader>


      <ModalBody className="bg-white !text-black">
        <div className="px-5 py-6">

          <div className="mb-5 flex items-start gap-3">
          <div className="right-6 rounded-full bg-[#c84449] p-2 shadow-lg">
            <button
                onClick={cookieLanguage}
                aria-label="Switch to English"
                className="font-bold bg-white flex-right relative text-black px-2.5 py-1.5 rounded-full"
              >
                {cButtonLanguage}
              </button>
          </div>
            <div className="px-5">
              <h3 className="mb-2 font-semibold text-black">
                {content.subtitle[cButtonLanguage]}
              </h3>

              <p className="text-sm leading-7 text-black ml-5">
                {content.text[cButtonLanguage]}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-[whitesmoke] p-4">
            <p className="text-sm leading-7 text-black">
              {content.subtext[cButtonLanguage]}
            </p>

            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c84449] transition hover:underline"
            >
              {content.link1[cButtonLanguage]}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </ModalBody>

      <ModalFooter className="rounded-b-lg !border-t !border-black/10 bg-[whitesmoke] !p-5 flex justify-center">
        <div className="flex w-full gap-3 flex justify-center">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-lg border border-black/10 hover:cursor-pointer text-[#c84449] px-6 py-3 text-sm font-bold hover:bg-[#c84449] hover:text-[whitesmoke] transition duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          >
            {content.button1[cButtonLanguage]}
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="rounded-lg border border-black/10 hover:cursor-pointer text-[#c84449] px-6 py-3 text-sm font-bold hover:bg-[#c84449] hover:text-[whitesmoke] transition duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          >
            {content.button2[cButtonLanguage]}
          </button>
        </div>
      </ModalFooter>
    </Modal>
    </>
  );
};

const ScrollUp = () => {
  return (
    <>
      <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-6 right-6 z-50 bg-[#c84449] rounded-full p-1 flex items-center justify-center font-bold shadow-lg transition hover:bg-[#a83237]"
    >
      <div className="p-3 bg-white rounded-full">
        <FaArrowUp className="text-black text-xl" />
      </div>
    </button>
    </>
  );
}

const AboutUs = ({ language }) => {
  const InfoAboutUs = {
      title: {
        ro: "Servicii contabile pentru",
        en: "Accounting Services for",
      },
      label: {
        ro: "Despre noi",
        en: "About Us",
      },
      highlight: {
        ro: "Firme LTD",
        en: "LTD Companies",
      },
      description: {
        ro: "Indiferent de domeniul de activitate, vă putem oferi servicii complete de contabilitate pentru firme de tip LTD. Printre serviciile oferite se enumeră:",
        en: "Regardless of your business sector, we provide comprehensive accounting services for LTD companies. Our services include:",
      },
      services: [
        {
          ro: "Deschidere firmă LTD",
          en: "LTD Company Formation",
        },
        {
          ro: "Bookkeeping / Contabilitate primară",
          en: "Bookkeeping",
        },
        {
          ro: "Company Tax Return",
          en: "Company Tax Return",
        },
        {
          ro: "VAT",
          en: "VAT (Value Added Tax)",
        },
        {
          ro: "Consultanță fiscală (Business Tax, VAT, Personal Tax, Corporation Tax)",
          en: "Tax Consultancy (Business Tax, VAT, Personal Tax, Corporation Tax)",
        },
        {
          ro: "Modificări la Companies House (adresă, denumire, obiect de activitate, acționari)",
          en: "Companies House Changes (registered address, company name, business activities, shareholders)",
        },
        {
          ro: "Payroll / Salarizare",
          en: "Payroll Services",
        },
        {
          ro: "Company Annual Accounts",
          en: "Company Annual Accounts",
        },
        {
          ro: "CIS Tax Return",
          en: "CIS Tax Return",
        },
        {
          ro: "Business Planuri",
          en: "Business Plans",
        },
        {
          ro: "Consultanță managerială",
          en: "Management Consultancy",
        },
        {
          ro: "Confirmation Statement",
          en: "Confirmation Statement",
        },
      ],
    };
  const SelfEmployed = {
    label: {
      ro: "Serviciile noastre",
      en: "Our Services",
    },
    title: {
      ro: "Servicii contabile pentru persoane",
      en: "Accounting Services for",
    },
    highlight: {
      ro: "Self-Employed",
      en: "Self-Employed Individuals",
    },
    services: [
      {
        ro: "Aplicare UTR",
        en: "UTR Application",
      },
      {
        ro: "Self Assessment Tax Return",
        en: "Self Assessment Tax Return",
      },
      {
        ro: "Asistență investigații HMRC",
        en: "HMRC Investigation Assistance",
      },
      {
        ro: "VAT, Payroll, CIS Return",
        en: "VAT, Payroll, CIS Returns",
      },
    ],
  };
  const WhyChooseUs = {
      title: {
        ro: "De ce să ne alegeți pe noi?",
        en: "Why Choose Us?",
      },
      benefits: [
        {
          icon: "gem",
          title: {
            ro: "Experiență",
            en: "Experience",
          },
          description: {
            ro: "Avem peste 10 ani de experiență în industria contabilității și finanțelor.",
            en: "We have over 10 years of experience in the accounting and finance industry.",
          },
        },
        {
          icon: "landmark",
          title: {
            ro: "Calificați în UK",
            en: "UK Qualified",
          },
          description: {
            ro: "Suntem calificați în Marea Britanie, cu conformitate AML asigurată de AAT și suntem agenți autorizați HMRC.",
            en: "We are qualified in the UK, with AML compliance through AAT and authorised HMRC agent status.",
          },
        },
        {
          icon: "briefcase-business",
          title: {
            ro: "Serviciu prompt și rapid",
            en: "Prompt and Efficient Service",
          },
          description: {
            ro: "Oferim un serviciu prompt și rapid, asigurând livrarea serviciului în aceeași zi, acolo unde este posibil.",
            en: "We provide a prompt and efficient service, aiming for same-day delivery wherever possible.",
          },
        },
        {
          icon: "wrench",
          title: {
            ro: "Abordare personalizată",
            en: "Personalised Approach",
          },
          description: {
            ro: "Oferim servicii personalizate, adaptate nevoilor fiecărui client.",
            en: "We provide tailored services adapted to each client's needs.",
          },
        },
      ],
    };
  return (
    <>
      <section id="about" className="mx-4 text-black sm:mx-6 lg:mx-10 overflow-hidden">
        <div className="flex justify-center">
          <div className="hidden w-1/2 p-10 lg:block lg:p-20"></div>
          <div className="hidden w-1/2 border-l border-black/20 lg:block lg:border-r lg:p-20"></div>
        </div>

        <div className="flex flex-col justify-center lg:flex-row">
          <div className="w-full p-6 sm:p-10 lg:w-1/2 lg:p-16 xl:p-20">
            <img
              className="hidden w-full rounded-[10px] shadow-xl/30 dark:block"
              src="/images/header/slide3.jpeg"
              alt="Accounting services"
            />
          </div>

          
          <div className="w-full border-black/20 p-6 content-center sm:p-10 lg:w-1/2 lg:border-l lg:border-r lg:p-12 xl:p-16">

            <div className="mb-8 text-left">
              <span className="mb-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-medium text-[#ff4d0a] shadow-lg shadow-black/5">
                {InfoAboutUs.label[language]}
              </span>

              <h1 className="whitespace-pre-line text-3xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
                {InfoAboutUs.title[language]}{" "}
                <span className="text-[#ff4d0a]">
                  {InfoAboutUs.highlight[language]}
                </span>
              </h1>
            </div>

            <p className="mb-6 font-light leading-relaxed text-gray-500 md:text-lg dark:text-black">
              {InfoAboutUs.description[language]}
            </p>

            <ul className="services-list">
              {InfoAboutUs.services.map((service, index) => (
                <li key={index}>{service[language]}</li>
              ))}
            </ul>

          </div>
          </div>


        <div className="flex justify-center">
          <div className="hidden w-1/2 p-10 lg:block lg:p-20"></div>
          <div className="hidden w-1/2 border-l border-black/20 lg:block lg:border-r lg:p-20"></div>
        </div>
      </section>
      <section
      id="self-employed"
      className="relative overflow-hidden bg-[#f8f8f8] px-4 py-16 text-[#111827] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background decorative circles */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-black/10 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-80 w-80 rounded-full border border-black/10 sm:h-[28rem] sm:w-[28rem]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-medium text-[#ff4d0a] shadow-lg shadow-black/5">
            {SelfEmployed.label[language]}
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {SelfEmployed.title[language]}
            <span className="mt-1 block text-[#ff4d0a]">
              {SelfEmployed.highlight[language]}
            </span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SelfEmployed.services.map((service, index) => (
            <div
              key={index}
              className="group flex min-h-24 items-center gap-4 rounded-xl border border-black/[0.04] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-7"
            >
              <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-[#ff4d0a] transition-colors duration-300 group-hover:bg-[#ff4d0a]" />

              <h3 className="text-base font-semibold leading-relaxed text-[#111827] sm:text-lg">
                {service[language]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="relative isolate flex min-h-[600px] items-center overflow-hidden px-6 py-20 text-white sm:px-10 lg:min-h-[650px] lg:px-12 lg:py-28">

      {/* Imagine pe tot fundalul */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/header/slide2.jpeg')",
        }}
      />

      {/* Strat întunecat peste imagine */}
      <div className="absolute inset-0 -z-20 bg-[#191f2d]/80" />

      {/* Glass subtil, pe întreaga zonă de conținut */}
      <div className="absolute inset-0 -z-10 bg-white/[0.025] backdrop-blur-[2px]" />

      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

        {/* Titlu în stânga */}
        <div className="flex items-center lg:min-h-[300px]">
          <div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {WhyChooseUs.title[language]}
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#c84449]" />
          </div>
        </div>

        {/* Beneficii în dreapta */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:gap-x-10">

          {WhyChooseUs.benefits.map((benefit, index) => {
            const Icon = benefitIcons[benefit.icon];

            return (
              <div
                key={index}
                className="flex items-start gap-5"
              >
                {/* Icon rotund, ca în imaginea originală */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-3 border-[#c84449] bg-white/[0.04] text-white backdrop-blur-md transition-colors duration-300 hover:border-[#ff4d0a] hover:text-[#ff5a1f]">
                  {Icon && <Icon size={30} strokeWidth={2} />}
                </div>

                <div className="pt-0.5">
                  <h3 className="mb-3 text-lg font-bold leading-snug sm:text-xl">
                    {benefit.title[language]}
                  </h3>

                  <p className="text-sm leading-7 text-white/75 sm:text-[15px]">
                    {benefit.description[language]}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
    </>
  );
}

const Footer = ({language}) => {
  return (
    <>
      <footer className="block overflow-hidden bg-[#222B3A] shadow-xl/20 p-5 sm:px-20 dark:text-white">
          <div className="w-full overflow-hidden">
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
              <div className="bg-transparent rounded-xl font-bold my-2 w-auto">
              <h1 className="text-2xl border-b border-white/20 p-2 px-10 mb-2">Availability Hours</h1>
                <table className="table-fixed">
                  <tbody>
                    <tr>
                      <td>{language === "en" ? "Monday - Friday " : "Luni - Vineri "}</td>
                      <td>10:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>{language === "en" ? "Saturday" : "Sâmbată"}</td>
                      <td>10:00 - 15:00</td>
                    </tr>
                    <tr>
                      <td>{language === "en" ? "Sunday" : "Duminică"}</td>
                      <td>{language === "en" ? "Closed" : "Închis"}</td>
                    </tr>
                  </tbody>
                </table>
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
                <p className="mt-5 block ml-5 p-1">Contact</p>
                <a href="mailto:info@dncukaccounting.com" className="block ml-5 p-1 hover:underline flex"><MdEmail className="text-xl mx-2" /> info@dncukaccounting.com</a>
            
              </div>
            </div>
            </div>
            <div className="w-full h-[80px] items-center content-center">
              <div className="">
                 <hr className="sm:w-7xl my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />

                <div className="flex justify-center">

                  <span className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© 2026 <a href="https://dncukaccounting.org/" className="hover:underline">DNCUKACCOUNTING</a>. All Rights Reserved. Dev & Mantainer <a href="https://www.mebhevy.com" className="font-bold hover:underline">Mebhevy LTD</a></span>
                 </div>
              </div>
            </div>
          </div>
      </footer>    
    </>
  );
}

export { CookieConsent, ScrollUp, AboutUs, Footer };