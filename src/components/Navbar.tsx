import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-scroll";
import config from "../config/index.json";
import { ButtonMenu, SideBar } from "./";

interface NavigationItem {
  name: string;
  href: string;
  spy?: boolean;
}

function Navbar(): JSX.Element {
  const { navigation } = config;
  const isLargeScreen = useMediaQuery("(min-width: 864px)");
  const isShortScreen = useMediaQuery("(max-width: 864px)");
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsActive(false);
    setShowMenu(false);
  };

  return (
    <div className="flex fixed top-0 shadow-md w-screen z-50 bg-transparent backdrop-blur-md">
      <nav
        className={`
         h-16  text-gray-800 flex items-center w-screen justify-between
        ${showMenu ? "hidden" : "flex"}
        `}
      >
        <Link
          spy={true}
          smooth={true}
          duration={1000}
          to={"landing"}
          offset={-64}
          className="flex items-center font-bold text-2xl cursor-pointer"
        >
          <img
            className="h-14 ml-4 mr-5"
            src={config.company.logo}
            alt={config.company.name + " logo"}
          />
          <h2 className="text-xl lg:text-2xl">{config.company.name}</h2>
        </Link>
        {isLargeScreen && (
          <span className="flex">
            {navigation.map((item: NavigationItem) => (
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                key={item.name}
                to={item.href}
                className="font-bold text-sm mr-10 cursor-pointer"
                offset={-94}
              >
                {item.name}
              </Link>
            ))}
          </span>
        )}
      </nav>
      {isShortScreen && (
        <div className={`${isActive ? "w-screen" : ""}`}>
          <ButtonMenu isActive={isActive} toggleActive={toggleActive} />
          <div className={`${isActive ? "" : "hidden"}`}>
            <SideBar handleLinkClick={handleLinkClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export { Navbar };
