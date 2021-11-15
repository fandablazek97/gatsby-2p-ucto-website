import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "../../hooks/useScrollReveal";

Fade.defaultProps = {
  as: "div",
};

export default function Fade({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`scroll-reveal sr-fade-hidden ${
        view ? "sr-fade-visible" : null
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

Fade.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
