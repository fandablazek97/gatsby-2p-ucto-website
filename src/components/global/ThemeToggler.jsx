import React from "react";
import PropTypes from "prop-types";
import useDarkMode from "use-dark-mode";

export default function ThemeToggler({ className = "" }) {
  // Nastavení Dark modu
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
    storageKey: "uctoDarkMode", // klíč pro uložení do localstorage - pokud mají dva weby stejný klíč budou sdílet i preferenci dark modu
  });

  return (
    <div className={`theme-toggler a11y-focus ${className}`}>
      <input
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        aria-label="zapnout nebo vypnout tmavý vzhled"
      />
    </div>
  );
}

ThemeToggler.propTypes = {
  className: PropTypes.string,
};
