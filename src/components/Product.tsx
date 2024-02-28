import "animate.css";

import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import config from "../config/index.json";

interface ProductItemProps {
  title: string;
  description: string;
  imgSrc: string;
  animationDirection?: "left" | "right";
}

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  description,
  imgSrc,
  animationDirection = "left",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const animationClass = isVisible
    ? `animate__animated animate__fadeIn${
        animationDirection === "right" ? "Right" : "Left"
      }`
    : "opacity-0";

  return (
    <div
      ref={ref}
      className={`flex justify-center items-center ${animationClass}`}
    >
      <div
        className={`flex flex-col lg:flex-row items-center max-w-80 lg:max-w-4xl ${
          animationDirection === "right" ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="mt-10">
          <h3 className="text-secondary font-bold text-xl lg:text-3xl mb-2 text-center">
            {title}
          </h3>
          <p className="text-secondary text-sm lg:text-lg max-w-xl">
            {description}
          </p>
        </div>
        <img className="w-60 lg:w-1/3 mt-10" src={imgSrc} alt="image" />
      </div>
    </div>
  );
};

const Product = ({ template }: { template: "product" | "howWorks" }) => {
  const { product, howWorks } = config;

  const data = useMemo(
    () => (template === "product" ? product : howWorks),
    [howWorks, product, template]
  );

  const { title, items } = data;

  return (
    <div className="my-12">
      <h2 className="text-4xl lg:text-5xl flex justify-center text-secondary font-bold">
        {title}
      </h2>
      {items.map((item, index) => (
        <ProductItem
          key={index}
          title={item.title}
          description={item.description}
          imgSrc={item.img}
          animationDirection={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
};

export default Product;
