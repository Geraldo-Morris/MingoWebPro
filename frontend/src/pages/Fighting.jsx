import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardTrending from "../components/CardTrending";
import CardNewreleases2 from "../components/CardNewreleases2";
import CardAc from "../components/CardUpcoming2";
import CardTrending2 from "../components/CardTrending2";
import tekken from "../Images/FilterGame/tekken.png";
import streetf from "../Images/FilterGame/streetf.png";
import Shadow2 from "../Images/games/shadow2.png";

const Fighting = () => {
  return (
    <>
      <Header />

      <div className="mx-[70px]">
        <div className=" mt-[40px] ">
          {/* Title */}
          <div className="border-b-2 border-abu">
            <h1 className="text-[100px] text-white font-bold ">Games</h1>

            <div className="text-[20px] text-abu font-bold mt-[50px] flex gap-[80px] mb-[50px]">
              <a href="/Games" className="text-abu">
                FEATURED
              </a>

              <a href="/Action">Action</a>
              <a href="/Adventure">Adventure</a>
              <a className="text-white" href="/Fighting">
                Fighting
              </a>
              <a href="/Fps">Fps</a>
              <a href="/Rpg">Rpg</a>
            </div>
          </div>

          {/* Card Games */}
          <div className="flex gap-[50px]">
            <a href="/Tekken7">
              <div className="relative w-max mt-[50px]">
                <img
                  className="brightness-100 w-[300px] h-[300px]"
                  src={tekken}
                  alt=""
                />

                <img
                  className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
                  src={Shadow2}
                  alt=""
                />
                <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                  <h1 className="text-[28px] font-medium">Tekken 7</h1>
                </div>
              </div>
            </a>
            <a href="/StreetFighter6">
              <div className="relative w-max mt-[50px]">
                <img
                  className="brightness-100 w-[300px] h-[300px]"
                  src={streetf}
                  alt=""
                />

                <img
                  className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
                  src={Shadow2}
                  alt=""
                />
                <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                  <h1 className="text-[28px] font-medium">Steet Fighter 6</h1>
                </div>
              </div>
            </a>
          </div>
          {/*  */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fighting;
