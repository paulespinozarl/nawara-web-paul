import { useState } from "react";
import SideBar from "./SideBar";

const Button = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <button
        className={`hamburger hamburger--spin ${isActive ? "is-active" : ""}`}
        type="button"
        onClick={toggleActive}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={`${isActive ? "" : "hidden"} bg-gray-50`}>
        <SideBar />
      </div>
    </div>
  );
};

export default Button;
