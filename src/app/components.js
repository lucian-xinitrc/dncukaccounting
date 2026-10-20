'use client';
import { useEffect, useState } from 'react';
import { MdOutlineAlternateEmail, MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaGithub, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { Cookie, ShieldCheck, ArrowUpRight } from 'lucide-react';

const COOKIE_KEY = 'dncuk_cookie_consent';

const CookieConsent = () => {
  const [openCookieConsent, setOpenCookieConsent] = useState(false);

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

  return (
  	<>
    <Modal
  show={openCookieConsent}
  onClose={() => {}}
  dismissible={false}
  position="center"
  className="z-[9999] sm:mx-[30%] h-screen flex justify-center items-center pt-[10%] bg-transparent"
>
      <ModalHeader className="rounded-t-lg !border-b !border-black/10 !px-6 !py-5 bg-[whitesmoke]">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl ">
            <Cookie className="h-6 w-6 text-black" />
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-black">
              DNC UK Accounting
            </p>
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              Privacy & Cookies
            </h2>
          </div>
        </div>
      </ModalHeader>

      <ModalBody className="bg-white !text-black">
        <div className="px-10 py-6">
          <div className="mb-5 flex items-start gap-3">
            

            <div className="px-10">
              <h3 className="mb-2 font-semibold text-black">
                Your privacy matters
              </h3>

              <p className="text-sm leading-7 text-black ml-5">
                The only cookies we use are strictly necessary for the proper functioning of the website and blog. We do not retain any personal tracking data.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-[whitesmoke] p-4">
            <p className="text-sm leading-7 text-black">
              By selecting <span className="font-semibold text-black">Accept</span>,
              you acknowledge our Privacy Policy and the use of essential
              cookies.
            </p>

            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c84449] transition hover:underline"
            >
              Read Privacy Policy
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
            className="rounded-lg border border-black/10 hover:cursor-pointer text-[#c84449] px-6 py-3 text-sm font-bold hover:bg-[#c84449] hover:text-[#00141D] transition duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          >
            Decline
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="rounded-lg border border-black/10 hover:cursor-pointer text-[#c84449] px-6 py-3 text-sm font-bold hover:bg-[#c84449] hover:text-[#00141D] transition duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
          >
            Accept Cookies
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

const Footer = ({language}) => {
  return (
    <>
      <footer className="block overflow-hidden dark:bg-black shadow-xl/20 p-5 sm:px-20 dark:text-white">
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
              <div className="bg-black rounded-xl font-bold my-2 w-auto">
              <h1 className="text-2xl border-b border-white/20 p-2 px-10 mb-2">Availability Hours</h1>
                <table class="table-fixed">
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
      </footer>    
    </>
  );
}

export { CookieConsent, ScrollUp, Footer };