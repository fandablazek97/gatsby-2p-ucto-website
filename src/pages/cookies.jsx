import React from "react";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";
import CookiesPolicy from "../components/legal/CookiesPolicy";

export default function cookiesPage() {
  return (
    <Layout>
      <Seo title="Zásady používání cookies" description="" keywords="" />

      {/* Main content */}
      <Hero title="Zásady používání cookies" />

      <div className="ui-wrapper-sm pt-6 pb-32">
        <CookiesPolicy
          domain="2pucto.cz"
          ownerName="společnost 2 P UCTO spol. s. r. o."
          adress="K Jalovčí 210, 337 01 Ejpovice"
          ico="25219413 "
          validTime="šest měsíců"
          lastUpdate="21. 2. 2022"
        />
      </div>
    </Layout>
  );
}
