import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [username, setUsername] = useState('Sohail Khan');

  return (
    <div className="bg-gradient-to-r from-indigo-950 to-indigo-800 w-full fixed top-0 z-50">
      <div className="h-10vh flex justify-between text-white lg:py-3 px-5 py-4 ">
        <div className="flex items-center flex-1">
          <span className="text-2xl align-bottom ml-6">
            Pursuit Software
          </span>
        </div>
        <div className="flex items-center text-white gap-2 mr-10">
          <span className="text-2xl ml-2 invisible lg:visible sm:visible md:visible">{username}</span>
          <RiArrowDropDownLine className="size-10 invisible lg:visible sm:visible md:visible" onClick={toggleDropdown} />
          <div ref={dropdownRef} className="relative">
            <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center ">
              <FaUser className="text-slate-600 text-xl cursor-pointer" onClick={toggleDropdown} />
            </div>
            {showDropdown && (
              <div className="bg-white  rounded-xl  shadow-lg absolute p-4 w-60 right-0 top-20">
                <ul className="text-indigo-900 font-medium ">
                  <li className="flex items-center px-4 py-2 text-lg cursor-pointer rounded hover:text-fuchsia-600">
                    <AiOutlineUser className="mr-2 size-6" />
                    <Link to="/profile">View Profile</Link>
                  </li>
                  <li className="flex items-center px-4 py-2 text-lg cursor-pointer rounded hover:text-fuchsia-600">
                    <AiOutlineLock className="mr-2 size-6" />
                    <Link to="/change-password">Change Password</Link>
                  </li>
                  <li className="flex items-center px-4 py-2 text-lg cursor-pointer rounded hover:text-fuchsia-600">
                    <FiLogOut className="mr-2 size-6" />
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
