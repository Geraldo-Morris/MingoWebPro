import React from "react";
import ff2 from "../Images/games/ff2.png";
import adv from "../Images/Explore/adv.png";
import fps from "../Images/Explore/fps.png";
import Shadow2 from "../Images/games/shadow2.png";
import shadowgenre from "../Images/genre/shadowgenre.png";

const CardGamesGenre = () => {
  return (
    <div className="grid grid-cols-3 gap-[104px]">
      <a href="/Action">
        <div className="relative w-max">
          <img className=" " src={ff2} alt="" />
          <img
            className=" absolute bottom-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={shadowgenre}
            alt=""
          />
          <h1 className="absolute top-0 text-white text-[30px] font-medium flex flex-col inset-0 justify-center items-center">
            Action
          </h1>
        </div>
      </a>
      <a href="/Adventure">
        <div className="relative w-max">
          <img className="" src={adv} alt="" />
          <img
            className=" absolute bottom-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={shadowgenre}
            alt=""
          />

          <h1 className="absolute top-0 text-white text-[30px] font-medium flex flex-col inset-0 justify-center items-center">
            Adventure
          </h1>
        </div>
      </a>
      <a href="/Fps">
        <div className="relative w-max">
          <img className="" src={fps} alt="" />
          <img
            className=" absolute bottom-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
            src={shadowgenre}
            alt=""
          />
          <h1 className="absolute top-0 text-white text-[30px] font-medium flex flex-col inset-0 justify-center items-center">
            Fps
          </h1>
        </div>
      </a>
    </div>
  );
};

export default CardGamesGenre;
