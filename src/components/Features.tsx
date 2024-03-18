import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { MdOutlineHandshake } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import config from "../config/index.json";

const icons: { [key: string]: JSX.Element } = {
  "Maximiza tus Ingresos, Minimiza tus Esfuerzos": (
    <FaMoneyBillTrendUp size={20} className="text-secondary" />
  ),
  "Haz Crecer tu Marca Personal": (
    <AiOutlineRise size={20} className="text-secondary" />
  ),
  "Simplifica el Proceso de Pago": (
    <GiPayMoney size={20} className="text-secondary" />
  ),
  "Construye Confianza y Credibilidad": (
    <MdOutlineHandshake size={20} className="text-secondary" />
  ),
};

const Features = () => {
  const { title, subtitle, description, items: featuresList } = config.features;

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const animationClass = isVisible ? "opacity-100" : "opacity-0";

  return (
    <div
      id="features"
      ref={ref}
      className={`flex flex-col items-center transition-opacity duration-[1300ms] mt-10 ${animationClass}`}
    >
      <div className="flex flex-col items-center max-w-xs lg:max-w-4xl gap-2">
        <h2 className="text-tertiary font-semibold uppercase">{title}</h2>
        <h3 className="text-2xl lg:text-4xl font-bold lg:font-extrabold text-secondary text-center">
          {subtitle}
        </h3>
        <p className="text-gray-500 text-md lg:text-xl max-w-xl text-center">
          {description}
        </p>
      </div>
      <span className="grid grid-rows  lg:grid-cols-2 m-10 gap-4 max-w-4xl">
        {featuresList.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <div
                className={`
                absolute flex items-center justify-center h-12 w-12 rounded-md text-slate-50 border-tertiary border-4
                `}
              >
                <span className="inline-block h-6 w-6 rounded-full">
                  {icons[feature.name]}
                </span>
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900 text-center">
                {feature.name}
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500 text-center">
              {feature.description}
            </dd>
          </div>
        ))}
      </span>
    </div>
  );
};

export { Features };
