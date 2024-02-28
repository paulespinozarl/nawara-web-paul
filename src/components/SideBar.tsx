import config from "../config/index.json";
import { MdBackpack } from "react-icons/md";
import { FaUser, FaCog, FaWhatsapp } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

interface NavigationItem {
  name: string;
  href: string;
}

const SideBar: React.FC = () => {
  const { navigation } = config;

  const icons: { [key: string]: JSX.Element } = {
    Fulldays: <MdBackpack size={20} className="text-secondary" />,
    Anfitriones: <FaUser size={20} className="text-secondary" />,
    "Como funciona": <FaCog size={20} className="text-secondary" />,
    Nosotros: <MdInfo size={20} className="text-secondary" />,
    Whatsapp: <FaWhatsapp size={20} className="text-secondary" />,
  };

  return (
    <div className="flex flex-col w-96">
      {navigation.map((item: NavigationItem) => (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={item.href}
          key={item.name}
          className="my-4 font-bold text-sm flex items-center"
        >
          <span className="ml-2">{icons[item.name]}</span>
          <span className="ml-2">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SideBar;
