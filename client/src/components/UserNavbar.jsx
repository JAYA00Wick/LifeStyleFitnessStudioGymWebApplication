import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/fa-solid/bars";
import bellIcon from "@iconify-icons/fa-solid/bell";
import userIcon from "@iconify-icons/fa-solid/user";
import Logo from "../assets/Logo.png";

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="bg-white h-16 flex items-center justify-between px-6 font-sans relative z-50">
      <div className="flex items-center">
        <Icon
          icon={menuIcon}
          className="lg:hidden text-black text-base cursor-pointer mr-4 hover:text-gray-500 transition duration-300"
          onClick={toggleMenu}
        />
        <img src={Logo} alt="Logo" className="h-10 w-auto mr-4" />
      </div>
      <div
        className={`lg:hidden ${
          showMenu ? "block" : "hidden"
        } absolute top-16 left-0 bg-white w-full z-50`}
      >
        <div className="flex flex-col items-center">
          <Link
            to="/membership-plan"
            className="text-black text-base font-semibold mr-6 mb-4 hover:text-gray-400 transition duration-300 relative text-link"
          >
            Payments
            <span className="underline"></span>
          </Link>
          <Link
            to="/contact-us"
            className="text-black text-base font-semibold mr-6 mb-4 hover:text-gray-400 transition duration-300 relative text-link"
          >
            Contact Us
            <span className="underline"></span>
          </Link>
          <Link
            to="/dashboard"
            className="text-black text-base font-semibold mr-6 mb-4 hover:text-gray-400 transition duration-300 relative text-link"
          >
            Dashboard
            <span className="underline"></span>
          </Link>
          <Link
            to="/UserExercises"
            className="text-black text-base font-semibold mr-6 mb-4 hover:text-gray-400 transition duration-300 relative text-link"
          >
            My Workout Plan
            <span className="underline"></span>
          </Link>
          <Link
            to="/user-view-diet-plans"
            className="text-black text-base font-semibold mr-6 mb-4 hover:text-gray-400 transition duration-300 relative text-link"
          >
            Diet Plan
            <span className="underline"></span>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <Link
          to="/membership-plan"
          className="text-black text-base font-semibold mr-6 hover:text-gray-400 transition duration-300 relative text-link"
        >
          Payments
          <span className="underline"></span>
        </Link>
        <Link
          to="/contact-us"
          className="text-black text-base font-semibold mr-6 hover:text-gray-400 transition duration-300 relative text-link"
        >
          Contact Us
          <span className="underline"></span>
        </Link>
        <Link
          to="/dashboard"
          className="text-black text-base font-semibold mr-6 hover:text-gray-400 transition duration-300 relative text-link"
        >
          Dashboard
          <span className="underline"></span>
        </Link>
        <Link
          to="/UserExercises"
          className="text-black text-base font-semibold mr-6 hover:text-gray-400 transition duration-300 relative text-link"
        >
          My Workout Plan
          <span className="underline"></span>
        </Link>
        <Link
          to="/user-view-diet-plans"
          className="text-black text-base font-semibold mr-6 hover:text-gray-400 transition duration-300 relative text-link"
        >
          Diet Plan
          <span className="underline"></span>
        </Link>
      </div>
      <div className="flex items-center">
        <Icon
          icon={bellIcon}
          className="text-black text-base cursor-pointer mr-6 hover:text-gray-400 transition duration-300"
          onClick={toggleNotifications}
        />
        {showNotifications && (
          <div className="absolute top-16 right-0 bg-white shadow-lg rounded-md p-4">
            <p>Notification 1</p>
            <p>Notification 2</p>
            <p>Notification 3</p>
          </div>
        )}
        <Link to="/profile">
          <Icon
            icon={userIcon}
            className="text-black text-base cursor-pointer hover:text-gray-400 transition duration-300"
          />
        </Link>
      </div>
      <style>{`
        .text-link {
          position: relative;
        }
        
        .text-link .underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        
        .text-link:hover .underline {
          width: calc(100% - 0.5rem); /* Adjust the value as needed for the width of the underline */
        }
      `}</style>
    </div>
  );
}

export default NavigationBar;
