import { PiWhatsappLogoThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import config from "../config/index.json";

const Whatsapp = () => {
  const { contact } = config;
  return (
    <Link
      to={contact.href}
      target="_blank"
      className="fixed bottom-4 right-4 font-bold text-[#25D366]"
    >
      <PiWhatsappLogoThin size={50} />
    </Link>
  );
};

export default Whatsapp;
