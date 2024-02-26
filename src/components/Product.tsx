import "animate.css";

import { useEffect, useState } from "react";
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
      className={`flex justify-center items-center mb-4 ${animationClass}`}
    >
      <div className="flex flex-col lg:flex-row items-center max-w-80 lg:max-w-5xl">
        <div>
          <h3 className="text-border font-bold text-xl lg:text-3xl mb-2">
            {title}
          </h3>
          <p className="text-gray-800 text-sm lg:text-lg">{description}</p>
        </div>
        <img className="w-60 lg:w-1/3" src={imgSrc} alt="image" />
      </div>
    </div>
  );
};

const Product = () => {
  const { product } = config;
  const { title, items } = product;

  return (
    <div>
      <h2 className="text-4xl lg:text-5xl flex justify-center my-10 text-border font-bold">
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
