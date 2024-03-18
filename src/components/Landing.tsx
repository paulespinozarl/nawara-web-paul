import { useMediaQuery } from "@react-hook/media-query";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import config from "../config/index.json";

interface ButtonWithIconProps {
  icon: JSX.Element;
  text: string;
}

const imgMobile = () => {
  return (
    <img
      className="object-cover w-full h-full opacity-60"
      src="/paisaje.jpg"
      alt="Paisaje"
    />
  );
};

const videoWeb = () => {
  return (
    <video
      className="object-cover w-full h-full opacity-80"
      autoPlay
      loop
      muted
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon, text }) => {
  return (
    <button
      className="
        border border-solid p-2 m-2 border-gray-50 rounded-xl flex items-center justify-around w-44
        "
    >
      {icon}
      <p className="text-xl">{text}</p>
    </button>
  );
};

const Landing = () => {
  const { mainHero } = config;
  const { title, subtitle, description } = mainHero;
  const isShortScreen = useMediaQuery("(max-width: 430px)");

  return (
    <section
      id="landing"
      className="relative w-full h-calc-64 bg-slate-800 mt-16"
    >
      {isShortScreen ? imgMobile() : videoWeb()}

      <div className="absolute top-80 left-40 transform -translate-x-32 -translate-y-72 text-white">
        <div className="flex flex-col justify-around gap-6">
          <div className="text-3xl lg:text-6xl font-bold">
            <h1 className="text-slate-50 w-full">{title}</h1>
            <h1 className={isShortScreen ? "text-secondary" : "text-tertiary"}>
              {subtitle}
            </h1>
          </div>
          <p className="max-w-72 lg:max-w-xl text-slate-50 ml-3 text-md lg:text-lg">
            {description}
          </p>
          <div className="flex flex-col lg:flex-row">
            <ButtonWithIcon
              icon={<FaApple size={isShortScreen ? "30" : "40"} />}
              text="App Store"
            />
            <ButtonWithIcon
              icon={<BiLogoPlayStore size={isShortScreen ? "30" : "40"} />}
              text="Google Play"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Landing };
