import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { useMediaQuery } from "@react-hook/media-query";

interface ButtonWithIconProps {
  icon: JSX.Element;
  text: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon, text }) => {
  return (
    <span
      className="
        border border-solid p-2 m-2 border-gray-50 rounded-xl flex items-center justify-around w-44
      "
    >
      {icon}
      <p className="text-xl">{text}</p>
    </span>
  );
};

const LandingPage = () => {
  const isShortScreen = useMediaQuery("(max-width: 390px)");

  return (
    <section className="relative w-full h-calc-64 bg-black mt-16">
      <img
        src="/videoGif.gif"
        className="object-cover w-full h-full opacity-50"
      />
      <div className="absolute top-80 left-40 transform -translate-x-32 -translate-y-72 text-white">
        <div className="flex flex-col justify-around gap-6">
          <div className="text-3xl lg:text-6xl font-bold">
            <h1 className=" text-primary w-full">Tu Pasaporte a</h1>
            <h1 className=" text-tertiary">
              Aventuras <br /> inolvidables
            </h1>
          </div>
          <p className="max-w-72 lg:max-w-xl text-emerald-50 ml-3 text-sm lg:text-md">
            En Nawara, nos dedicamos a transformar la manera en que exploras y
            disfrutas de Venezuela. Nuestra aplicación, diseñada para
            aventureros y amantes de los viajes, te brinda la oportunidad de
            sumergirte en la riqueza natural y cultural de Venezuela de una
            manera personalizada y emocionante.
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

export default LandingPage;
