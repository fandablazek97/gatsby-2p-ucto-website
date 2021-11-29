import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Icon
import { MdMessage } from "react-icons/md";

export default function FloatingButton() {
  return (
    <AnchorLink
      to="/#kontakt"
      stripHash
      className="w-16 h-16 rounded-full fixed z-90 right-4 bottom-6 flex items-center justify-center shadow-md bg-primary transition-colors duration-300 hover:bg-opacity-80 focus:bg-opacity-80 no-underline"
      aria-label="Kontakt"
      role="button"
    >
      <MdMessage className="text-white text-4xl" aria-label="Kontakt" />
    </AnchorLink>
  );
}
