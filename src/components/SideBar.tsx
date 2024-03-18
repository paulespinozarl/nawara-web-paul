import React from "react";
import { MdBackpack } from "react-icons/md";
import { FaUser, FaCog, FaWhatsapp } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { Link } from "react-scroll";
import config from "../config/index.json";

interface NavigationItem {
  name: string;
  href: string;
}

interface Props {
  handleLinkClick: () => void;
}

const SideBar: React.FC<Props> = ({ handleLinkClick }) => {
  const { navigation } = config;

  const icons: { [key: string]: JSX.Element } = {
    Fulldays: <MdBackpack size={20} className="text-secondary" />,
    Anfitriones: <FaUser size={20} className="text-secondary" />,
    "Como funciona": <FaCog size={20} className="text-secondary" />,
    Nosotros: <MdInfo size={20} className="text-secondary" />,
    Whatsapp: <FaWhatsapp size={20} className="text-secondary" />,
  };

  return (
    <div className={`flex flex-col`}>
      {navigation.map((item: NavigationItem) => (
        <Link
          spy={true}
          smooth={true}
          duration={1000}
          key={item.name}
          to={item.href}
          onClick={handleLinkClick}
          offset={-94}
          className="my-4 font-bold text-sm flex items-center cursor-pointer"
        >
          <span className="ml-2">{icons[item.name]}</span>
          <span className="ml-2">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export { SideBar };
