// Je nutné všechny ikony vygenerovat a nahradit soubory ve složce `public/favicon`
// Odkaz na geneátor favikon: https://realfavicongenerator.net

import React from "react";
import { Helmet } from "react-helmet";

export default function GlobalHead() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="author" content="reveal.cz" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="robots" content="index, follow" />
      {/* <meta name="theme-color" content="#F8FAFC" /> */}
    </Helmet>
  );
}
