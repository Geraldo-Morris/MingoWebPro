import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import play from "../Images/ListGames/play.png";
import epic from "../Images/ListGames/epic.png";
import steam from "../Images/ListGames/steam.png";
import pic1 from "../Images/persona5/1.png";
import pic2 from "../Images/persona5/2.png";
import pic3 from "../Images/persona5/3.png";
import persona5 from "../Images/persona5/persona.png";

const Persona5 = () => {
  return (
    <>
      <Header />

      <div>
        {/* section 1 */}
        <div className="relative">
          <img className="w-screen h-[600px] " src={persona5} alt="" />

          <div className="absolute top-0 inset-0 flex items-center justify-center flex-col">
            <a
              href="https://www.youtube.com/watch?v=0xH3QWntRJw"
              target="_blank"
            >
              <img src={play} alt="" />
            </a>
          </div>
        </div>

        <div className="flex justify-between mx-auto w-max mt-[50px] mb-[30px] ">
          {/* section 2 */}
          <div className="text-white  mr-[300px]  ">
            <h1 className="text-[54px] font-bold">Persona 5 Royal</h1>
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
            <h1 className="font-light text-[18px] mt-[20px] ">
              Persona 5 features additional content, including a new playable{" "}
              <br />
              character named Kasumi Yoshizawa, a new palace to explore, and an{" "}
              <br />
              expanded story with new events and scenes.
            </h1>

            <div className="flex gap-[50px] my-[20px]">
              <div className="flex-col">
                <h1>Release date</h1>
                <h1>31 Oktober 2019</h1>
              </div>
              <div className="flex-col">
                <h1>System Requirements</h1>
                <a
                  className="underline hover:underline-offset-4"
                  href="https://store.steampowered.com/app/1687950/Persona_5_Royal/"
                  target="_blank"
                >
                  PC
                </a>
              </div>
            </div>

            <h1 className="mb-[10px]">Platforms</h1>
            <div className="w-max">
              <a
                href="https://store.steampowered.com/app/1687950/Persona_5_Royal/"
                target="_blank"
              >
                {" "}
                <img
                  className="w-[30px] h-[30px] opacity-100 hover:opacity-40 transition-opacity duration-300 "
                  src={steam}
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* Gambar-gambar */}
          <div className="flex justify-between relative ">
            <img
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={pic1}
              alt=""
            />
            <img
              className="mx-[10px]  opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={pic2}
              alt=""
            />
            <img
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={pic3}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Persona5;
