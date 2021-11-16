// Vytvořeno pomocí Headless UI
// Dokumentace ke komponentu: https://headlessui.dev/react/menu
// Transition komponent dokumentace: https://headlessui.dev/react/transition

import React, { cloneElement, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

// Icons
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Dropdown({ title, children }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Hlavní tlačítko */}
      <Menu.Button className="ui-link text-default-strong text-sm items-center outline-none">
        <span>{title}</span>
        <HiOutlineChevronDown className="ml-2" />
      </Menu.Button>
      {/* Přechod */}
      <Transition
        as={Fragment}
        enter="transition ease duration-150"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
      >
        {/* Dropdown container */}
        <Menu.Items className="absolute z-10 p-3 right-1/2 transform translate-x-1/2 w-64 mt-2 origin-top-center bg-background dark:bg-background-200 rounded-default shadow-xl outline-none">
          {children.map((child, index) => (
            // Položka v dropdownu
            <Menu.Item key={index}>
              {({ active }) =>
                cloneElement(child, {
                  className: `${"flex px-3 py-2 rounded-default cursor-pointer"} ${
                    active
                      ? "text-default-strong bg-background-200 dark:bg-background-300"
                      : "text-default bg-transparent"
                  } ${child.props.className}`,
                })
              }
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
