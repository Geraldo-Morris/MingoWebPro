import React from "react";
import bdo from "../Images/games/bdo.png";
import Shadow2 from "../Images/games/shadow2.png";
import apex from "../Images/Explore/trending/apex.png";
import cs from "../Images/Explore/trending/cs.png";
import fortnite from "../Images/Explore/trending/fortnite.png";
import mw2 from "../Images/Explore/trending/mw2.png";
import re4 from "../Images/Explore/trending/re4.png";

const Trending2 = () => {
  return (
    <>
      <a href="/ApexLegend">
        <div className="relative w-max">
          <img
            className="brightness-100 w-[300px] h-[300px]"
            src={apex}
            alt=""
          />
          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>Hot</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Apex Legends</h1>
            <h1 className="text-[14px] font-thin">
              Action, Battle Royale, Open World
            </h1>
          </div>
        </div>
      </a>

      <a href="/Csgo">
        <div className="relative w-max">
          <img className="brightness-100 w-[300px] h-[300px]" src={cs} alt="" />
          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>Hot</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Counter Strike : GO</h1>
            <h1 className="text-[14px] font-thin">Action, FPS, Competitive</h1>
          </div>
        </div>
      </a>

      <a href="/Fortnite">
        <div className="relative w-max">
          <img
            className="brightness-100 w-[300px] h-[300px]"
            src={fortnite}
            alt=""
          />

          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>Hot</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Fortnite</h1>
            <h1 className="text-[14px] font-thin">
              Action, Battle Royale, Open World
            </h1>
          </div>
        </div>
      </a>

      <a href="/Codmw2">
        <div className="relative w-max">
          <img
            className="brightness-100 w-[300px] h-[300px]"
            src={mw2}
            alt=""
          />
          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>Hot</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Call of Duty : MW2</h1>
            <h1 className="text-[14px] font-thin">
              Action, Battle Royale, Open World
            </h1>
          </div>
        </div>
      </a>

      <a href="/ResidentEvil4">
        <div className="relative w-max">
          <img
            className="brightness-100 w-[300px] h-[300px]"
            src={re4}
            alt=""
          />
          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>Hot</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Resident Evil 4 </h1>
            <h1 className="text-[14px] font-thin">Action, Adventure, MMORPG</h1>
          </div>
        </div>
      </a>
    </>
  );
};

export default Trending2;
