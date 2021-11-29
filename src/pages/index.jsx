import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import UctoCover from "../components/UctoCover";
import Parallax from "react-rellax";

// Images
import kkt from "../static/svg/kamna-krby-topeni.svg";
import vapetTech from "../static/svg/vapet-tech.svg";
import vapetIn from "../static/svg/vapet-innovation.svg";
import forClean from "../static/svg/for-clean.svg";
import sweTech from "../static/svg/swe-tech.svg";
import gastro from "../static/svg/2P-gastro.svg";

// Scroll Reveal Animations
import FadeUp from "../libraries/scroll-reveal/FadeUp";

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Účetní firma pro každého"
        description="Účetní firma v Plzni. Nabízíme komplexní a kvalitní služby v oblasti vedení účetnictví. Mzdové účetnictví, daňová evidence, komunikace s úřady a mnoho dalšího."
        keywords="účetní firma, mzdová účetní, vedení účetnictví"
      />

      {/* Main Content */}
      <UctoCover />

      {/* Úvod */}
      <section
        id="o-nas"
        className="ui-wrapper py-32 md:py-52 grid gap-16 grid-cols-1 md:grid-cols-2"
      >
        <div>
          <FadeUp as="h2" className="text-h3 font-semibold text-primary mb-4">
            O nás
          </FadeUp>
          <FadeUp as="h3" className="ui-heading text-h1 sr-delay-100">
            V čem jsme lepší než konkurence?
          </FadeUp>
        </div>

        <div>
          <FadeUp as="p" className="md:mt-12 sr-delay-200">
            Jsme rodinná účetní firma sídlící v Plzni, která s láskou pečuje o
            účetnictví našich klientů. Naším posláním je zbavit klienty starostí
            s papírováním a ti mají v klidu čas věnovat se svému podnikání. Na
            papírování a hlídání termínů jsme tady my.
          </FadeUp>
        </div>
      </section>

      {/* Služby */}
      <div className="dark bg-background pt-32 md:pt-52 pb-20 md:pb-36 relative overflow-hidden">
        <section
          id="sluzby"
          className="ui-wrapper grid gap-16 grid-cols-1 md:grid-cols-3 text-default relative z-1"
        >
          <div className="col-span-1">
            <FadeUp as="h2" className="text-h3 font-bold text-default-strong">
              Co děláme
            </FadeUp>
          </div>

          <div className="col-span-2">
            <FadeUp as="h3" className="ui-heading text-h1">
              Účetnictví pro firmy i živnostníky
            </FadeUp>
            <FadeUp as="p" className="ui-lead font-semibold sr-delay-100">
              Na výběr máte z naší široké nabídky služeb. U každé služby se o
              Vás bude starat tým zkušených účetních. Ceny jednotlivých služeb
              řešíme individuálně podle požadavků klienta.
            </FadeUp>

            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 mt-24">
              <FadeUp as="div" className="spacy-y-6">
                <span className="font-bold text-secondary text-4xl xs:text-6xl">
                  01
                </span>
                <h4 className="ui-heading text-h3 mt-6">Mzdové účetnictví</h4>
                <p>
                  Nevíte, kolik přesně je ta nová daň a pojištění? A co všechno
                  se musí poslat na sociálku, když zaměstnanec třeba onemocní?
                  Klid. My to víme. A uděláme to za Vás tak, aby na Vás zbylo
                  jen podepsání příkazu v bance.
                </p>
              </FadeUp>

              <FadeUp as="div" className="spacy-y-6 sm:sr-delay-100">
                <span className="font-bold text-secondary text-4xl xs:text-6xl">
                  02
                </span>
                <h4 className="ui-heading text-h3 mt-6">Účetnictví</h4>
                <p>
                  Máte malou firmu a než účetnictví vás spíš baví dělat vaší
                  práci? Nás zase baví to účetnictví. To je prefect match! Kromě
                  účetnictví se samozřejmě postaráme o přiznání k dani z příjmu,
                  DPH i silniční dani.
                </p>
              </FadeUp>

              <FadeUp as="div" className="spacy-y-6">
                <span className="font-bold text-secondary text-4xl xs:text-6xl">
                  03
                </span>
                <h4 className="ui-heading text-h3 mt-6">Daňová evidence</h4>
                <p>
                  Jste fyzická osoba a zkratky jako DPFO, OSSZ, FÚ Vám nic moc
                  neříkají? Nám ano! A proto jsme tu. Zařídíme, vyřídíme, Vy
                  podepíšete, my podáme. Takhle jednoduché to u nás je.
                </p>
              </FadeUp>

              <FadeUp as="div" className="spacy-y-6 sm:sr-delay-100">
                <span className="font-bold text-secondary text-4xl xs:text-6xl">
                  04
                </span>
                <h4 className="ui-heading text-h3 mt-6">Daňové konzultace</h4>
                <p>
                  Daň z příjmu právnických osob, daň z příjmu fyzických osob,
                  silniční daň, daň z přidané hodnoty. Jenom samé daně! Trochu v
                  nich tápete a zákonům nerozumíte, protože jsou napsané tak
                  složitě? Přijďte, probereme, co Vás trápí a najdeme společně
                  řešení.
                </p>
              </FadeUp>

              <FadeUp as="div" className="spacy-y-6">
                <span className="font-bold text-secondary text-4xl xs:text-6xl">
                  05
                </span>
                <h4 className="ui-heading text-h3 mt-6">Komunikace s úřady</h4>
                <p>
                  Otravuje Vás jenom pomyšlení na to, že budete muset chodit po
                  úřadech? My se o komunikaci s úřady postaráme za Vás, co Vy na
                  to?
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Klienti */}
        <section
          id="klienti"
          className="ui-wrapper pt-24 md:pt-36 grid gap-16 grid-cols-1 md:grid-cols-3 text-default relative z-1"
        >
          <div className="col-span-1">
            <FadeUp as="h2" className="text-h3 font-bold text-default-strong">
              Klienti
            </FadeUp>
          </div>

          <div className="col-span-2 grid gap-0.5 grid-cols-2 sm:grid-cols-3">
            <FadeUp
              as="div"
              className="bg-gray-700 bg-opacity-30 flex items-center justify-center p-7 sm:p-10"
            >
              <img
                src={vapetTech}
                width="709"
                height="229"
                alt="Firma Vapet Technology"
                loading="lazy"
                className="w-full h-auto"
              />
            </FadeUp>

            <FadeUp
              as="div"
              className="bg-gray-700 bg-opacity-30 flex items-center justify-center p-7 sm:p-10 sr-delay-100"
            >
              <img
                src={vapetIn}
                width="762"
                height="337"
                alt="Firma Vapet Innovation"
                loading="lazy"
                className="w-full h-auto"
              />
            </FadeUp>

            <FadeUp
              as="div"
              className="bg-gray-700 bg-opacity-30 flex items-center justify-center p-7 sm:p-10 sm:sr-delay-200"
            >
              <img
                src={kkt}
                width="565"
                height="82"
                alt="Firma Kamna Krby Topení"
                loading="lazy"
                className="w-full h-auto"
              />
            </FadeUp>

            <FadeUp
              as="div"
              className="bg-gray-700 bg-opacity-30 flex items-center justify-center p-7 sm:p-10 sr-delay-100 sm:sr-delay-0"
            >
              <img
                src={forClean}
                width="676"
                height="262"
                alt="Firma for clean"
                loading="lazy"
                className="w-full h-auto"
              />
            </FadeUp>

            <FadeUp
              as="div"
              className="bg-gray-700 bg-opacity-30 flex items-center justify-center p-7 sm:p-10 sm:sr-delay-100"
            >
              <img
                src={sweTech}
                width="757"
                height="55"
                alt="Firma 2P Gastro"
                loading="lazy"
                className="w-full h-auto"
              />
            </FadeUp>

            <FadeUp
              as="div"
              className="bg-gray-700 bg-opacity-30 flex items-center justify-center p-7 sm:p-10 sr-delay-100 sm:sr-delay-200"
            >
              <img
                src={gastro}
                width="2845"
                height="809"
                alt="Firma 2P Gastro"
                loading="lazy"
                className="w-full h-auto"
              />
            </FadeUp>
          </div>
        </section>

        {/* shapes */}
        <div className=" w-56 h-56 2xl:w-96 2xl:h-96 bg-secondary hidden lg:block transform rotate-45 translate-y-full 2xl:translate-y-1/2 absolute z-0 top-44 2xl:top-36 -right-28 2xl:-right-48"></div>
        <div className="w-144 h-144 2xl:w-208 2xl:h-208 bg-primary rounded-full hidden md:block absolute z-0 top-1/3 -left-72 2xl:-left-112"></div>
      </div>

      {/* Bottom skew div of the section */}
      <div className="dark bg-background h-44 transform skew-y-3 sm:skew-y-2 -translate-y-12"></div>

      {/* Software */}
      <section
        id="software"
        className="ui-wrapper pb-32 md:pb-52 pt-24 md:pt-36 grid gap-16 grid-cols-1 md:grid-cols-2"
      >
        <div className="col-span-2 md:col-span-1">
          <FadeUp as="h2" className="text-h3 font-semibold text-primary mb-4">
            Software
          </FadeUp>
          <FadeUp as="h3" className="ui-heading text-h1">
            Trefíme se Vám do noty?
          </FadeUp>
        </div>

        <div className="col-span-2 md:col-span-1">
          <FadeUp
            as="p"
            className="md:mt-12 ui-lead font-semibold md:sr-delay-200"
          >
            Naše účetní služby ale i technologie neustále zlepšujeme a snažíme
            se o to, aby vhodně doplňovali Vaše podnikání. Nejčastěji používáme
            následující software.
          </FadeUp>
        </div>

        <div className="col-span-2 grid gap-x-5 gap-y-10 md:gap-8 md:gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12">
          <FadeUp as="div">
            <h4 className="ui-heading text-h4">Pohoda</h4>
            <p>
              No jak to říct. Je to prostě pohoda. Nás nejrozšířenější a
              nejpoužívanější program. Naši klienti ho taky mají rádi, protože
              existuje i „víc friendly“ verze mPohoda, kde si mohou fakturovat a
              fakturovat a fakturou, jak si jen zamanou. A my si faktury načteme
              k nám do naší Pohody.
            </p>
          </FadeUp>

          <FadeUp as="div" className="sm:sr-delay-100">
            <h4 className="ui-heading text-h4">Pamica</h4>
            <p>
              Pamica je mzdová ségra Pohody. Zvládne prakticky veškeré špeky,
              které si jde ve mzdách jen představit. Náš oblíbený program, který
              používáme obzvlášť v první půlce každého měsíce.
            </p>
          </FadeUp>

          <FadeUp as="div" className="md:sr-delay-200">
            <h4 className="ui-heading text-h4">Tax</h4>
            <p>
              Přiznání k dani z příjmu fyzických osob, přiznání k dani z příjmu
              právnických osob, přiznání k silniční dani, … Tohle všechno zvládá
              náš další oblíbený program TAX. Bráška Pohody a Pamicy, který nám
              nejlépe slouží v období daňových přiznání.
            </p>
          </FadeUp>

          <FadeUp as="div">
            <h4 className="ui-heading text-h4">Helios</h4>
            <p>
              Obchod, sklady, personalistika, výroba, doprava a přeprava,
              ekonomika, projektové řízení. Tohle všechno zvládá Helios. A my v
              něm taky zvládáme fungovat.
            </p>
          </FadeUp>

          <FadeUp as="div" className="sm:sr-delay-100">
            <h4 className="ui-heading text-h4">E-gecko</h4>
            <p>
              Německý účetní software, který si hravě poradí s účetnictvím, HR i
              controllingem.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Parallax */}
      <div className="w-full h-80 lg:h-96 xl:h-144 overflow-hidden object-cover hidden md:block">
        <Parallax speed={-3} percentage={1} className="w-full">
          <StaticImage
            src="../static/images/parallax.jpg"
            alt="Společná fotka firmy"
            placeholder="blurred"
            loading="lazy"
            layout="fullWidth"
            className="w-full h-full"
            objectFit="cover"
            objectPosition="50% 50%"
            formats={["avif", "webp", "jpg"]}
          />
        </Parallax>
      </div>

      <StaticImage
        src="../static/images/parallax.jpg"
        alt="Společná fotka firmy"
        placeholder="blurred"
        loading="lazy"
        layout="fullWidth"
        className="w-full h-112 md:hidden"
        objectFit="cover"
        objectPosition="50% 50%"
        formats={["avif", "webp", "jpg"]}
      />

      {/* Tým */}
      <section id="nas-tym" className="ui-wrapper py-32 md:py-52">
        <div className="mb-36">
          <FadeUp as="h2" className="text-h3 font-semibold text-primary mb-4">
            Náš tým
          </FadeUp>
          <FadeUp as="h2" className="ui-heading text-h1 sr-delay-100">
            Kdo se o Vás postará?
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <FadeUp as="div" className="space-y-7">
            <StaticImage
              src="../static/images/Lenka-Pickova.jpg"
              alt="Lenka"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-h-1 aspect-w-1"
              objectFit="cover"
              objectPosition="50% 50%"
              formats={["avif", "webp", "jpg"]}
            />
            <h3 className="ui-heading text-h4">Lenka Picková</h3>
            <div className="flex flex-col">
              <a
                href="tel:+420777900535"
                className="ui-link-3 font-semibold text-primary text-h5 mb-3"
              >
                +420 777 900 535
              </a>
              <a
                href="mailto:pickova@2pucto.cz"
                className="ui-link-3 font-semibold text-primary text-h5"
              >
                pickova@2pucto.cz
              </a>
            </div>
          </FadeUp>

          <FadeUp as="div" className="space-y-7 sm:sr-delay-100">
            <StaticImage
              src="../static/images/Karolina-Flaisman.jpg"
              alt="Lenka"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-h-1 aspect-w-1"
              objectFit="cover"
              objectPosition="50% 50%"
              formats={["avif", "webp", "jpg"]}
            />
            <h3 className="ui-heading text-h4">Karolína Flaišman</h3>
            <div className="flex flex-col">
              <a
                href="tel:+420774149149"
                className="ui-link-3 font-semibold text-primary text-h5 mb-3"
              >
                +420 774 149 149
              </a>
              <a
                href="mailto:karolina@2pucto.cz"
                className="ui-link-3 font-semibold text-primary text-h5"
              >
                karolina@2pucto.cz
              </a>
            </div>
          </FadeUp>

          <FadeUp as="div" className="space-y-7 lg:sr-delay-200">
            <StaticImage
              src="../static/images/Zuzana-Miskova.jpg"
              alt="Lenka"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-h-1 aspect-w-1"
              objectFit="cover"
              objectPosition="50% 50%"
              formats={["avif", "webp", "jpg"]}
            />
            <h3 className="ui-heading text-h4">Zuzana Míšková</h3>
            <div className="flex flex-col">
              <a
                href="tel:+420728264744"
                className="ui-link-3 font-semibold text-primary text-h5 mb-3"
              >
                +420 728 264 744
              </a>
              <a
                href="mailto:info@2pucto.cz"
                className="ui-link-3 font-semibold text-primary text-h5"
              >
                info@2pucto.cz
              </a>
            </div>
          </FadeUp>

          <FadeUp
            as="div"
            className="space-y-7 sm:sr-delay-100 lg:sr-delay-300"
          >
            <StaticImage
              src="../static/images/Natalie-Pickova.jpg"
              alt="Lenka"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-h-1 aspect-w-1"
              objectFit="cover"
              objectPosition="50% 50%"
              formats={["avif", "webp", "jpg"]}
            />
            <h3 className="ui-heading text-h4">Natálie Picková</h3>
            <div className="flex flex-col">
              <a
                href="mailto:info@2pucto.cz"
                className="ui-link-3 font-semibold text-primary text-h5"
              >
                info@2pucto.cz
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-background pt-32 md:pt-52">
        <div className="ui-wrapper grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <FadeUp as="h2" className="ui-heading text-h3 font-bold">
            Kontakt
          </FadeUp>

          <FadeUp as="div" className="flex flex-col space-y-6 md:sr-delay-100">
            <h3 className="ui-heading text-h4">Ozvěte se nám</h3>
            <a
              href="tel:+420373543481"
              className="ui-link-3 font-semibold text-primary text-h4"
            >
              +420 373 543 481
            </a>
            <a
              href="mailto:info@2pucto.cz"
              className="ui-link-3 font-semibold text-primary text-h4"
            >
              Info@2pucto.cz
            </a>
          </FadeUp>

          <FadeUp as="div" className="space-y-6 lg:sr-delay-200">
            <h3 className="ui-heading text-h4">Firemní údaje</h3>
            <p>
              2 P ÚČTO spol. s. r. o. <br />
              Sídlo: K Jalovčí 210, 337 01 Ejpovice <br />
              Provozovna: Nepomucká 944 / 159a, 326 00 Plzeň <br />
              <br />
              IČ: 25219413 <br />
              DIČ: CZ25219413
            </p>
          </FadeUp>
        </div>

        <div className="relative w-screen text-right mt-32 md:mt-52">
          <div className="overflow-hidden bg-none w-full">
            <iframe
              width="100%"
              className="w-full"
              height="600"
              title="Provozovna 2púčto"
              src="https://maps.google.com/maps?q=Nepomuck%C3%A1%20944%20/%20159a,%20%20326%2000%20Plze%C5%88&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
