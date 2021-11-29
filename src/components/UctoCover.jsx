import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Icons
import { BsArrowDownCircle } from "react-icons/bs";

export default function UctoCover() {
  return (
    <header
      id="top"
      className="w-screen h-screen min-h-500 lg:min-h-800 relative z-0 overflow-hidden"
    >
      <div className="ui-wrapper h-full flex justify-start items-center relative">
        <div className="z-1">
          <span className="text-primary font-semibold uppercase text-xl">
            Jsme 2P ÚČTO
          </span>
          <h1 className="ui-heading text-left text-4xl sm:text-6xl lg:text-7xl font-bold mb-10 mt-6">
            Účetní firma <br /> v Plzni
          </h1>
          <p className="ui-lead font-semibold">
            Ať už jste drobný podnikatel nebo vlastníte velkou firmu, bude o Vás
            dobře postaráno. Pokud hledáte kvalitní služby v oblasti účetnictví,
            jste na správné adrese.
          </p>
        </div>

        {/* Scroll down arrow */}
        <AnchorLink
          to="/#o-nas"
          className="absolute bottom-12 flex items-center text-default transition-opacity duration-default opacity-80 hover:opacity-40 no-underline"
        >
          <BsArrowDownCircle style={{ fontSize: "32px" }} />
          <span className="font-semibold uppercase ml-4 hidden md:inline-block">
            Posunout dolů
          </span>
        </AnchorLink>
      </div>

      {/* <div className="w-128 h-128 2xl:w-160 2xl:h-160 rounded-full overflow-hidden hidden lg:block absolute top-1/2 bottom-1/2 -right-44 xl:right-6 2xl:right-12 transform -translate-y-1/2">
        <StaticImage
          src="../static/images/Hero.jpg"
          alt="Kancelář 2P Účto"
          placeholder="blurred"
          loading="eager"
          layout="fullWidth"
          className="w-full h-full"
          objectFit="cover"
          objectPosition="50% 50%"
          formats={["avif", "webp", "jpg"]}
        />
      </div> */}

      {/* Abstract shape */}
      <div className="w-144 h-144 lg:w-192 lg:h-192 2xl:w-256 2xl:h-256 bg-primary rounded-full absolute -z-1 -bottom-72 -right-72 lg:-bottom-96 lg:-right-96"></div>
    </header>
  );
}
