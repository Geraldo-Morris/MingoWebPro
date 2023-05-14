import React from "react";
import bdo from "../Images/games/bdo.png";
import Shadow2 from "../Images/games/shadow2.png";
import did from "../Images/Explore/newreleases/deadisland2.png";
import hgw from "../Images/Explore/newreleases/hogwarts.png";
import hsr from "../Images/Explore/newreleases/hsr.png";
import re4 from "../Images/Explore/newreleases/re4.png";
import zelda from "../Images/Explore/newreleases/zelda.png";
import eldenring from "../Images/FilterGame/eldenring.png";

const CardNewreleases2 = () => {
  return (
    <>
      <a href="/DeadIsland2">
        <div className="relative w-max">
          <img
            className="brightness-100 w-[300px] h-[300px]"
            src={did}
            alt=""
          />
          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>New</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Dead Island 2</h1>
            <h1 className="text-[14px] font-thin">
              Action, Battle Royale, Open World
            </h1>
          </div>
        </div>
      </a>

      <a href="/EldenRing">
        <div className="relative w-max">
          <img
            className="brightness-100 w-[300px] h-[300px]"
            src={eldenring}
            alt=""
          />
          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>New</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Elden Ring</h1>
            <h1 className="text-[14px] font-thin">Action, FPS, Competitive</h1>
          </div>
        </div>
      </a>

      <a href="/HonkaiStarRail">
        <div className="relative w-max">
          <img
            className="brightness-100 w-[300px] h-[300px]"
            src={hsr}
            alt=""
          />
          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>New</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Honkai Star Rail</h1>
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
            <h1>New</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Resident Evil 4</h1>
            <h1 className="text-[14px] font-thin">
              Action, Battle Royale, Open World
            </h1>
          </div>
        </div>
      </a>

      <a href="/Zelda">
        <div className="relative w-max">
          <img
            className="brightness-100 w-[300px] h-[300px]"
            src={zelda}
            alt=""
          />
          <div className="bg-black w-[65px] h-[40px] text-white text-[18px] text-center py-[5px] absolute top-0 right-0 rounded-bl-[20px] ">
            <h1>New</h1>
          </div>
          <img
            className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={Shadow2}
            alt=""
          />
          <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
            <h1 className="text-[28px] font-medium">Zelda </h1>
            <h1 className="text-[14px] font-thin">Action, Adventure, MMORPG</h1>
          </div>
        </div>
      </a>
    </>
  );
};

export default CardNewreleases2;
