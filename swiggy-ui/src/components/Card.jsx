import React from "react";
import { MdStars } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const Card = (props) => {
  const data = props;

  return (
    <div className=" w-[150px] md:w-[260px]  shrink-0 ">
      <div className="h-[180px] rounded-[15px] overflow-hidden relative">
        <img className=" object-cover w-full h-full " src={data.image} alt="" />
        <div className="image-overlay absolute w-full h-full top-0 rounded-[15px] flex items-end justify-center">
          <h2 className="mb-1  text-white opacity-90  text-[23px] font-extrabold tracking-tighter">
            {data.offer.toUpperCase()}
          </h2>
        </div>
      </div>

      <div className="ml-2">
        <div className="mt-3 text-xl font-bold">
          <h3>{data.title}</h3>
        </div>

        <div className="flex font-semibold items-center">
          <MdStars className="inline mr-1 text-xl" />
          {data.rating}
          <BsDot className="inline" />
          {`${data.minTime}-${data.maxTime} mins`}
        </div>

        <div>
          <div className="leading-6 text-base text-black opacity-70 font-semibold">
            {data.name}
          </div>
          <div className="leading-5 text-base text-black opacity-70 font-semibold">
            {data.place}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
