import React from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import categoryImg from "./CategoryImg";

const Category = ({}) => {
  const arrowClass =
    "w-[30px] h-[30px] bg-[#e2e2e7] rounded-[50%] flex justify-center items-center cursor-pointer";

  const [checkScroll, setCheckScroll] = useState(0);
  const a = false;
  const b = true;

  const handleScroll = (e) => {
    if (checkScroll < 960 && e == true) {
      setCheckScroll(checkScroll + 359);
    }

    if (checkScroll > 0 && e == false) {
      setCheckScroll(checkScroll - 359);
    }
  };

  const imgArr = categoryImg();

  return (
    <div className="max-w-[1150px] mx-auto items-center mt-4">
      <div className=" mx-3 flex md:flex">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex gap-2 ml-auto  items-center ">
          <div
            onClick={() => {
              handleScroll(a);
            }}
            className={arrowClass}
            style={{ visibility: checkScroll == 0 ? "hidden" : "visible" }}
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={() => {
              handleScroll(b);
            }}
            className={arrowClass}
            style={{ visibility: checkScroll >= 960 ? "hidden" : "visible" }}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex gap-[1.6rem] overflow-hidden">
        {imgArr.map((item, index) => {
          return (
            <div
              style={{ transform: `translateX(-${checkScroll}%)` }}
              key={index}
              className=" relative z-10 w-36 shrink-0 duration-500"
            >
              <img src={item.img} alt="category img" />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default Category;
