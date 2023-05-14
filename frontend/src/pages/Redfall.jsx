import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import play from "../Images/ListGames/play.png";
import epic from "../Images/ListGames/epic.png";
import ff3 from "../Images/redfall/Rectangle 6.png";
import rr16 from "../Images/redfall/Rectangle 16.png";
import rr17 from "../Images/redfall/Rectangle 17.png";
import rr18 from "../Images/redfall/Rectangle 18.png";

const Redfall = () => {
  return (
    <>
      <Header />

      <div>
        {/* section 1 */}
        <div className="relative">
          <img className="w-screen h-[600px] " src={ff3} alt="" />

          <div className="absolute top-0 inset-0 flex items-center justify-center flex-col">
            <a
              href="https://www.youtube.com/watch?v=p5ijTmk81pE"
              target="_blank"
            >
              <img src={play} alt="" />
            </a>
          </div>
        </div>

        <div className="flex justify-between mx-auto w-max mt-[50px] mb-[30px]">
          {/* section 2 */}
          <div className="text-white  mr-[300px]">
            <h1 className="text-[54px] font-bold">Redfall</h1>
            <div className="flex">
              <h1 className="bg-abu w-[110px] h-[30px] text-center rounded-[30px] py-[2px] mr-[15px]">
                Multiplayer
              </h1>
              <h1 className="bg-abu w-[100px] h-[30px] text-center rounded-[30px] py-[2px] mr-[15px]">
                Survival
              </h1>
              <h1 className="bg-abu w-[130px] h-[30px] text-center rounded-[30px] py-[2px] mr-[15px]">
                Battle Royale
              </h1>
              <h1 className="bg-abu w-[30px] h-[30px] text-center rounded-[30px] ">
                ...
              </h1>
            </div>
            <h1 className="font-light text-[18px] mt-[20px]">
              Redfall is a FPS game developed by Arkane Austin and published by{" "}
              <br />
              Bethesda Softworks.
            </h1>

            <div className="flex gap-[50px] my-[20px]">
              <div className="flex-col">
                <h1>Release date</h1>
                <h1>2 Mei 2023</h1>
              </div>
              <div className="flex-col">
                <h1>System Requirements</h1>
                <a
                  className="underline hover:underline-offset-4"
                  href="https://store.epicgames.com/en-US/p/redfall"
                  target="_blank"
                >
                  PC
                </a>
              </div>
            </div>

            <h1 className="mb-[10px]">Platforms</h1>
            <div className="w-max">
              <a
                href="https://store.epicgames.com/en-US/p/redfall"
                target="_blank"
              >
                {" "}
                <img
                  className="w-[30px] h-[30px] opacity-100 hover:opacity-40 transition-opacity duration-300 "
                  src={epic}
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* Gambar-gambar */}
          <div className="flex justify-between relative ">
            <img
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={rr16}
              alt=""
            />
            <img
              className="mx-[10px]  opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={rr17}
              alt=""
            />
            <img
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={rr18}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Redfall;
