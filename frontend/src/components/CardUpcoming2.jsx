import React from "react";
import ac from "../Images/Explore/acmirage.png";
import shadow from "../Images/Explore/shadowcard.png";
import bp from "../Images/Explore/bp.png";
import diablo4 from "../Images/Explore/diablo4.png";
import ff16 from "../Images/Explore/ff16.png";
import tekken8 from "../Images/Explore/tekken8.png";

const CardUpcoming2 = () => {
  return (
    <div className="flex gap-[70px]">
      {/*  */}

      <div className="relative w-max">
        <img className="brightness-100 w-[300px] h-[300px]" src={ac} alt="" />
        <div className="bg-black text-white text-[18px] text-center   absolute top-0 right-0 rounded-bl-[20px] ">
          <h1 className="p-3 font-bold">Upcoming</h1>
        </div>
        <img
          className="absolute bottom-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
          src={shadow}
          alt=""
        />
        <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
          <h1 className="text-[22px] font-medium">Assasins Creed Mirage</h1>
        </div>
      </div>

      {/*  */}

      <div className="relative w-max">
        <img className="brightness-100 w-[300px] h-[300px]" src={bp} alt="" />
        <div className="bg-black text-white text-[18px] text-center   absolute top-0 right-0 rounded-bl-[20px] ">
          <h1 className="p-3 font-bold">Upcoming</h1>
        </div>
        <img
          className="absolute bottom-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
          src={shadow}
          alt=""
        />
        <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
          <h1 className="text-[22px] font-medium">Blue Protocol</h1>
        </div>
      </div>

      {/*  */}

      <div className="relative w-max">
        <img
          className="brightness-100 w-[300px] h-[300px]"
          src={diablo4}
          alt=""
        />
        <div className="bg-black text-white text-[18px] text-center   absolute top-0 right-0 rounded-bl-[20px] ">
          <h1 className="p-3 font-bold">Upcoming</h1>
        </div>
        <img
          className="absolute bottom-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
          src={shadow}
          alt=""
        />
        <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
          <h1 className="text-[22px] font-medium">Diablo 4</h1>
        </div>
      </div>

      {/*  */}

      <div className="relative w-max">
        <img className="brightness-100 w-[300px] h-[300px]" src={ff16} alt="" />
        <div className="bg-black text-white text-[18px] text-center   absolute top-0 right-0 rounded-bl-[20px] ">
          <h1 className="p-3 font-bold">Upcoming</h1>
        </div>
        <img
          className="absolute bottom-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
          src={shadow}
          alt=""
        />
        <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
          <h1 className="text-[22px] font-medium">Final Fantasy 16</h1>
        </div>
      </div>

      {/*  */}

      <div className="relative w-max">
        <img
          className="brightness-100 w-[300px] h-[300px]"
          src={tekken8}
          alt=""
        />
        <div className="bg-black text-white text-[18px] text-center   absolute top-0 right-0 rounded-bl-[20px] ">
          <h1 className="p-3 font-bold">Upcoming</h1>
        </div>
        <img
          className="absolute bottom-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
          src={shadow}
          alt=""
        />
        <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
          <h1 className="text-[22px] font-medium">Tekken 8</h1>
        </div>
      </div>
    </div>
  );
};

export default CardUpcoming2;
