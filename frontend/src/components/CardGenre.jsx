import React from "react";
import action from "../Images/genre/action.png";
import shadow from "../Images/genre/shadow.png";
import adventure from "../Images/genre/adventure.png";
import fighting from "../Images/genre/tk.png";
import fps from "../Images/genre/fps.png";
import rpg from "../Images/genre/rpg.png";

const CardGenre = ({ nama }) => {
  return (
    <>
      {/* action */}
      <div className="mt-[90px]">
        <div className="mx-auto w-max relative">
          <a href="/Action">
            <img className="" src={action} alt="" />
            <img
              className="top-0 absolute opacity-100 hover:opacity-50 transition-opacity duration-300"
              src={shadow}
              alt=""
            />
          </a>
          <h1 className="text-white text-[40px] font-bold absolute top-0 py-[140px] pl-[80px]">
            Action
          </h1>
        </div>
      </div>

      {/* adventure */}
      <div class="mx-auto w-max relative my-[90px]">
        <a href="/Adventure">
          <img class="" src={adventure} alt="" />
          <img
            class="top-0 absolute opacity-100 hover:opacity-50 transition-opacity duration-300"
            src={shadow}
            alt=""
          />
        </a>
        <h1 class="text-white text-[40px] font-bold absolute top-0 py-[140px] pl-[80px]">
          ADVENTURE
        </h1>
      </div>

      {/* fihgting */}
      <div class="mx-auto w-max relative">
        <a href="/Fighting">
          <img class="" src={fighting} alt="" />
          <img
            class="top-0 absolute opacity-100 hover:opacity-50 transition-opacity duration-300"
            src={shadow}
            alt=""
          />
        </a>
        <h1 class="text-white text-[40px] font-bold absolute top-0 py-[140px] pl-[80px]">
          FIGHTING
        </h1>
      </div>

      {/* fps */}
      <div class="mx-auto w-max relative my-[90px]">
        <a href="/Fps">
          <img class="" src={fps} alt="" />
          <img
            class="top-0 absolute opacity-100 hover:opacity-50 transition-opacity duration-300"
            src={shadow}
            alt=""
          />
        </a>
        <h1 class="text-white text-[40px] font-bold absolute top-0 py-[140px] pl-[80px]">
          First Person Shooter
        </h1>
      </div>

      {/* rpg */}
      <div class="mx-auto w-max relative">
        <a href="/Rpg">
          <img class="" src={rpg} alt="" />
          <img
            class="top-0 absolute opacity-100 hover:opacity-50 transition-opacity duration-300"
            src={shadow}
            alt=""
          />
        </a>
        <h1 class="text-white text-[40px] font-bold absolute top-0 py-[140px] pl-[80px]">
          Role Playing Games
        </h1>
      </div>
    </>
  );
};

export default CardGenre;
