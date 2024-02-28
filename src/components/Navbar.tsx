import { useMediaQuery } from "@react-hook/media-query";
import config from "../config/index.json";
import { useState } from "react";
import Button from "./Button";
import { Link } from "react-scroll";
import SideBar from "./SideBar";

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

  const toggleActive = () => {
    setIsActive(!isActive);
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex fixed top-0 shadow-md w-screen z-50">
      <nav
        className={`
        bg-slate-50 h-16  text-gray-800 flex items-center w-screen justify-between
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
        {isLargeScreen && (
          <span className="flex">
            {navigation.map((item: NavigationItem) => (
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                key={item.name}
                to={item.href}
                className="font-bold text-sm mr-10"
              >
                {item.name}
              </Link>
            ))}
          </span>
        )}
      </nav>
      {isShortScreen && (
        <div className={`${isActive ? "w-screen" : ""} bg-gray-50`}>
          <Button isActive={isActive} toggleActive={toggleActive} />
          <div className={`${isActive ? "" : "hidden"}`}>
            <SideBar />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
