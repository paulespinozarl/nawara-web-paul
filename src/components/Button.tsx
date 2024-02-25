import { useState } from "react";
import SideBar from "./SideBar";

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="mt-1">
      <button
        className={`hamburger hamburger--spin z-50 ${
          isActive ? "is-active" : ""
        }`}
        type="button"
        onClick={toggleActive}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={`${isActive ? "" : "hidden"} bg-gray-50 w-screen`}>
        <SideBar />
      </div>
    </div>
  );
};

export default Button;
