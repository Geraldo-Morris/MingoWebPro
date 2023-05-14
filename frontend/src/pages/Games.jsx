import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardTrending from "../components/CardTrending";
import CardNewreleases2 from "../components/CardNewreleases2";
import CardAc from "../components/CardUpcoming2";
import CardTrending2 from "../components/CardTrending2";
import rr from "../Images/FilterGame/redfall.png";
import re4 from "../Images/FilterGame/re4.png";
import eldenring from "../Images/FilterGame/eldenring.png";
import gow from "../Images/FilterGame/gow.png";
import tekken from "../Images/FilterGame/tekken.png";
import streetf from "../Images/FilterGame/streetf.png";
import valo from "../Images/FilterGame/valo.png";
import cs from "../Images/FilterGame/cs.png";
import persona5 from "../Images/FilterGame/persona5.png";
import tales from "../Images/FilterGame/tales.png";
import Shadow2 from "../Images/games/shadow2.png";

const Games = () => {
  return (
    <>
      <Header />

      <div className="mx-[70px] mt-[40px] ">
        {/* Title */}
        <div className="border-b-2 border-abu">
          <h1 className="text-[100px] text-white font-bold ">Games</h1>

          <div className="text-[20px] text-abu font-bold mt-[50px] flex gap-[80px] mb-[50px]">
            <a href="" className="text-white">
              FEATURED
            </a>

            <a href="/Action">Action</a>
            <a href="/Adventure">Adventure</a>
            <a href="/Fighting">Fighting</a>
            <a href="/Fps">Fps</a>
            <a href="/Rpg">Rpg</a>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-5 gap-[50px]">
          <a href="/Redfall">
            <div className="relative w-max mt-[50px]">
              <img
                className="brightness-100 w-[300px] h-[300px]"
                src={rr}
                alt=""
              />

              <img
                className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
                src={Shadow2}
                alt=""
              />
              <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                <h1 className="text-[28px] font-medium">Redfall</h1>
              </div>
            </div>
          </a>
          <a href="/ResidentEvil4">
            <div className="relative w-max mt-[50px]">
              <img
                className="brightness-100 w-[300px] h-[300px]"
                src={re4}
                alt=""
              />

              <img
                className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
                src={Shadow2}
                alt=""
              />
              <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                <h1 className="text-[28px] font-medium">Resident Evil 4</h1>
              </div>
            </div>
          </a>
          <a href="/EldenRing">
            <div className="relative w-max mt-[50px]">
              <img
                className="brightness-100 w-[300px] h-[300px]"
                src={eldenring}
                alt=""
              />

              <img
                className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
                src={Shadow2}
                alt=""
              />
              <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                <h1 className="text-[28px] font-medium">Elden Ring</h1>
              </div>
            </div>
          </a>
          <a href="/GodOfWarRagnarok">
            <div className="relative w-max mt-[50px]">
              <img
                className="brightness-100 w-[300px] h-[300px]"
                src={gow}
                alt=""
              />

              <img
                className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
                src={Shadow2}
                alt=""
              />
              <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                <h1 className="text-[28px] font-medium">God of War ragnarok</h1>
              </div>
            </div>
          </a>
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
          <a href="/Valorant">
            <div className="relative w-max mt-[50px]">
              <img
                className="brightness-100 w-[300px] h-[300px]"
                src={valo}
                alt=""
              />

              <img
                className="absolute top-0  opacity-100 hover:opacity-40 transition-opacity duration-300"
                src={Shadow2}
                alt=""
              />
              <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                <h1 className="text-[28px] font-medium">Valorant</h1>
              </div>
            </div>
          </a>
          <a href="/Csgo">
            <div className="relative w-max mt-[50px]">
              <img
                className="brightness-100 w-[300px] h-[300px]"
                src={cs}
                alt=""
              />

              <img
                className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
                src={Shadow2}
                alt=""
              />
              <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                <h1 className="text-[28px] font-medium">Counter Strike: Go</h1>
              </div>
            </div>
          </a>
          <a href="/Persona5">
            <div className="relative w-max mt-[50px]">
              <img
                className="brightness-100 w-[300px] h-[300px]"
                src={persona5}
                alt=""
              />

              <img
                className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300 "
                src={Shadow2}
                alt=""
              />
              <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                <h1 className="text-[28px] font-medium">Persona 5</h1>
              </div>
            </div>
          </a>
          <a href="/TalesOfArise">
            <div className="relative w-max mt-[50px]">
              <img
                className="brightness-100 w-[300px] h-[300px]"
                src={tales}
                alt=""
              />

              <img
                className="absolute top-0 opacity-100 hover:opacity-40 transition-opacity duration-300"
                src={Shadow2}
                alt=""
              />
              <div className="text-white absolute bottom-0 mb-[20px] ml-[17px]">
                <h1 className="text-[28px] font-medium">Tales of Arise</h1>
              </div>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Games;
