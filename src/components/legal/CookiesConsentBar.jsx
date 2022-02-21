// První řádek komponenty "debug={true}" slouží k debugování a stylování komponenty
import React from "react";
import { Link } from "gatsby";

// Components
import CookieConsent from "react-cookie-consent";

// Icon
import { BiCookie } from "react-icons/bi";

export default function CookiesConsentBar() {
  return (
    <>
      <CookieConsent
        // debug={true}
        location="none"
        disableStyles={true}
        disableButtonStyles={true}
        enableDeclineButton={true}
        buttonText="Přijmout"
        declineButtonText="Odmítnout"
        declineButtonClasses="px-6 py-2 text-white uppercase tracking-wide text-xs font-semibold rounded-sm bg-gray-600 hover:bg-opacity-80 focus:bg-opacity-80 inline-flex items-center justify-center transition-colors duration-300 mt-5 md:mt-0"
        cookieName="cookies-2p-ucto"
        style={{
          width: "90%",
          maxWidth: "1240px",
          position: "fixed",
          zIndex: "99",
          bottom: "1.25rem",
          left: "50%",
          right: "50%",
          transform: "translateX(-50%)",
        }}
        containerClasses="p-7 bg-gray-900 bg-opacity-95 rounded-md flex flex-col md:flex-row items-start md:items-center"
        contentClasses="text-sm text-gray-100 md:pr-10"
        buttonClasses="px-6 py-2 text-white uppercase tracking-wide text-xs font-semibold rounded-sm bg-primary hover:bg-opacity-80 focus:bg-opacity-80 inline-flex items-center justify-center transition-colors duration-300 mt-5 md:mt-0"
        buttonWrapperClasses="flex space-x-3"
        expires={120}
      >
        <div className="p-0 m-0 flex items-center">
          <div className="w-10 h-10 min-w-[32px] mr-10 hidden md:block">
            <BiCookie className="w-full h-full" />
          </div>
          <p>
            Naše webové stránky používají ke správnému fungování soubory
            cookies. Procházením tohoto webu automaticky souhlasíte s jejich
            použitím. Pro více informací si přečtěte{" "}
            <Link to="/cookies" className="ui-link-2 text-primary">
              zásady používání cookies.
            </Link>
          </p>
        </div>
      </CookieConsent>
    </>
  );
}
