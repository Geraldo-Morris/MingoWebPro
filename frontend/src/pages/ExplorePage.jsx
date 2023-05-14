import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardGames from "../components/CardTrending2";
import CardGamesGenre from "../components/CardGamesGenre";
import CardAc from "../components/CardUpcoming2";
import MainPics from "../Images/games/mainpics.png";
import ff2 from "../Images/games/ff2.png";
import CardNewreleases2 from "../components/CardNewreleases2";

const ExplorePage = () => {
  return (
    <>
      <Header />
      {/* Main pics */}
      <div className="relative mt-[10px] mb-[50px]">
        <img className="h-[700px] mx-auto w-max" src={MainPics} alt="" />
        <div className="absolute text-white top-0 inset-0 flex items-center justify-center flex-col ">
          <h1 className="text-[40px] font-bold ">Wartales 1.0 Early Access</h1>
          <h1 className="text-[20px] font-medium my-[15px]">April 12th 2023</h1>
          <a href="">
            <div className="bg-white text-black text-center py-[10px] px-[30px] rounded-[5px] ">
              <a
                href="https://store.steampowered.com/app/1527950/Wartales/"
                target="_blank"
              >
                <h1>Access here</h1>
              </a>
            </div>
          </a>
        </div>
      </div>

      {/* Trending */}
      <div className=" w-max mx-auto ">
        <div className="flex text-white justify-between ">
          <h1 className="text-[30px] mb-[25px] font-medium">Trending</h1>
          <a href="/Trending" className="text-[20px] text-right mt-[10px]">
            View All
          </a>
        </div>
        <div className="grid  grid-cols-5 gap-[70px]">
          <CardGames />
        </div>
      </div>

      {/* browse by Genre */}
      {/*  */}
      <div className=" w-max mx-auto mt-[100px]">
        <div className="flex text-white justify-between ">
          <h1 className="text-[30px] mb-[25px] font-medium">Genre</h1>
          <a href="/Genre" className="text-[20px] text-right mt-[10px]">
            View All
          </a>
        </div>
        <div className="mx-auto w-max">
          <CardGamesGenre />
        </div>
      </div>

      {/* New Releases */}
      <div className=" w-max mx-auto mt-[100px]">
        <div className="flex text-white justify-between ">
          <h1 className="text-[30px] mb-[25px] font-medium">New Releases</h1>
          <a href="/NewReleases" className="text-[20px] text-right mt-[10px]">
            View All
          </a>
        </div>
        <div className="grid  grid-cols-5 gap-[70px]">
          <CardNewreleases2 />
        </div>
      </div>

      {/* Upcoming */}
      <div className="w-max mx-auto mt-[100px]">
        <div className="flex text-white justify-between ">
          <h1 className="text-[30px] mb-[25px] font-medium">Upcoming</h1>
          <a href="/Upcoming" className="text-[20px] text-right mt-[10px]">
            View All
          </a>
        </div>

        <CardAc />
      </div>

      <Footer />
    </>
  );
};

export default ExplorePage;
