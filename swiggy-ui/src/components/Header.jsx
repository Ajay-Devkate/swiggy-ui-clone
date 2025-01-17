import React from "react";
import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const btnStyle = "button border mb-2 py-2 px-3 rounded-md border-black hover:scale-90 duration-300 hover:text-[#ff5200]";

  const links = [
    {
      title: "Offers",
      icon: <BiSolidOffer />,
    },
    {
      title: "Help",
      icon: <FaHandsHelping />,
    },
    {
      title: "Sign In",
      icon: <FaUser />,
    },
    {
      title: "Cart",
      icon: <FaCartShopping />,
    },
  ];

  return (
    <>
      <div
        className=" z-[9999] black-overlay w-full h-full fixed duration-500"
        onClick={() => {
          setToggle(false);
        }}
        style={{
          visibility: toggle ? "visible" : "hidden",
          opacity: toggle ? "1" : "0",
        }}
      >
        <div
          className=" w-full  md:w-[500px] bg-white h-full absolute duration-[500ms]"
          onClick={(e) => e.stopPropagation()}
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <ImCross
            className=" ml-[92%] absolute top-4"
            onClick={() => setToggle(false)}
          />
          <div className=" h-full flex flex-col justify-center items-center text-2xl font-bold">
            <button className={btnStyle} >Sign In</button>
            <button className={btnStyle} >Log In</button>
          </div>
        </div>
      </div>

      <header className="p-3 shadow-xl bg-white sticky top-0 z-[999]">
        <div className="max-w-[1200px] mx-auto  flex items-center ">
          <div className="w-[35px] ">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/Ajay-Devkate/swiggy-ui-clone/refs/heads/main/swiggy-ui/public/images/pngwing.png"
              alt="Brand logo"
            />
          </div>

          <div className="flex items-center  text-[18px] cursor-pointer">
            <h3 className=" border-b-[3px] border-b-gray-950 font-bold ml-9">
              Ratanada{" "}
            </h3>
            <h className="ml-4"> Jodhpur, Rajasthan, India </h>
            <span className="ml-1 text-3xl text-[#ff5200]">
              <RxCaretDown onClick={() => setToggle(true)} />
            </span>
          </div>
          <nav className="hidden md:flex list-none gap-7 ml-auto  text-[16px]">
            {links.map((links, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 text-[18px] hover:text-[#ff5200] duration-300 cursor-pointer"
                >
                  {links.icon} {links.title}
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};
