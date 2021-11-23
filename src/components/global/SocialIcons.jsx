import React from "react";

// Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="social-icons flex space-x-7 text-2xl md:text-3xl no-underline">
      <a
        href="https://www.instagram.com/reveal.cz/"
        target="blank"
        rel="me external"
        aria-label="facebook"
        className="text-default p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaFacebookF aria-label="facebook" />
      </a>
      <a
        href="https://www.instagram.com/reveal.cz/"
        target="blank"
        rel="me external"
        aria-label="instagram"
        className="text-default p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaInstagram aria-label="instagram" />
      </a>
      <a
        href="https://www.instagram.com/reveal.cz/"
        target="blank"
        rel="me external"
        aria-label="linkedin"
        className="text-default p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaLinkedinIn aria-label="linkedin" />
      </a>
      <a
        href="https://www.instagram.com/reveal.cz/"
        target="blank"
        rel="me external"
        aria-label="twitter"
        className="text-default p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaTwitter aria-label="twitter" />
      </a>
    </div>
  );
}
