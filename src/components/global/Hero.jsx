import React from "react";
import PropTypes from "prop-types";

export default function Hero({ title }) {
  return (
    <header className="w-screen h-128" role="banner">
      <div className="ui-wrapper-sm h-full flex flex-col justify-center items-center">
        <h1 className="ui-heading w-full text-center text-3xl sm:text-5xl lg:text-6xl mb-0">
          {title}
        </h1>
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};
