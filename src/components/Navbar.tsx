import { useMediaQuery } from "@react-hook/media-query";
import config from "../../index.json";
import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

interface NavigationItem {
  name: string;
  href: string;
}

function Navbar(): JSX.Element {
  const { navigation } = config;
  const isLargeScreen = useMediaQuery("(min-width: 864px)");
  const isShortScreen = useMediaQuery("(max-width: 864px)");

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex fixed top-0 shadow-md w-screen z-50">
      <nav
        className={`
        bg-gray-50 h-16  text-gray-800 flex items-center w-full justify-between
        ${showMenu ? "hidden" : "flex"}
        `}
      >
        <Link to={"/"} className="flex items-center font-bold text-2xl">
          <img
            className="h-14 ml-4 mr-5"
            src={config.company.logo}
            alt={config.company.name + " logo"}
          />
          <h2 className="text-xl lg:text-2xl">{config.company.name}</h2>
        </Link>
        {/* Mostrar navegación solo en pantallas grandes */}
        {isLargeScreen && (
          <span className="flex">
            {navigation.map((item: NavigationItem) => (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={item.href}
                key={item.name}
                className="mx-6 font-bold text-sm"
              >
                {item.name}
              </a>
            ))}
          </span>
        )}
      </nav>
      {/* Mostrar el botón fuera del área de navegación */}
      {isShortScreen && (
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center bg-white"
        >
          <Button />
        </div>
      )}
    </div>
  );
}

export default Navbar;
