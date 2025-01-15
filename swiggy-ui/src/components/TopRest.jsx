import React from "react";
import restaurantChain from "./restaurantChain";
import restChain from "./restChain";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";
import { useState } from "react";

export const TopRest = () => {
  const restData = restaurantChain();
  const restChainData = restChain();

  const [checkScroll, setCheckScroll] = useState(0);
  const [checkScrollRest, setCheckScrollRest] = useState(0);
  const a = false;
  const b = true;

  const handleScroll = (e) => {
    if (checkScroll < 660 && e == true) {
      setCheckScroll(checkScroll + 220);
    }

    if (checkScroll > 0 && e == false) {
      setCheckScroll(checkScroll - 220);
    }
  };

  const handleScrollRest = (e) => {
    if (checkScrollRest < 660 && e == true) {
      setCheckScrollRest(checkScrollRest + 220);
    }

    if (checkScrollRest > 0 && e == false) {
      setCheckScrollRest(checkScrollRest - 220);
    }
  };

  const arrowClass =
    "w-[30px] h-[30px] bg-[#e2e2e7] rounded-[50%] flex justify-center items-center cursor-pointer";

  return (
    <>
    <div className="max-w-[1150px] mx-auto items-center mt-4 mb-4">
      <div className=" mx-3 flex md:flex mb-6">
        <div className="text-[25px] font-bold">
          Top restaurant chains in jodhapur
        </div>

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
            style={{ visibility: checkScroll >= 660 ? "hidden" : "visible" }}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className=" flex ml-1 md:flex gap-7 overflow-hidden">
        {restData.map((data, index) => {
          return (
            <div
              style={{ transform: `translateX(-${checkScroll}%)` }}
              key={index}
              className=" relative z-10 shrink-0 duration-500"
            >
              <Card {...data} />
            </div>
          );
        })}
      </div>
    </div>


    <div className="max-w-[1150px] mx-auto items-center mt-4 mb-4">
      <div className="mx-3 flex md:flex mb-6">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Jodhpur
        </div>

        <div className="flex gap-2 ml-auto  items-center ">
          <div
            onClick={() => {
              handleScrollRest(a);
            }}
            className={arrowClass}
            style={{ visibility: checkScrollRest == 0 ? "hidden" : "visible" }}
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={() => {
              handleScrollRest(b);
            }}
            className={arrowClass}
            style={{ visibility: checkScrollRest >= 660 ? "hidden" : "visible" }}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex ml-1 md:flex gap-7 overflow-hidden">
        {restChainData.map((data, index) => {
          return (
            <div
              style={{ transform: `translateX(-${checkScrollRest}%)` }}
              key={index}
              className=" relative z-10 shrink-0 duration-500"
            >
              <Card {...data} />
            </div>
          );
        })}
      </div>
    </div>

    </>
  );
};
