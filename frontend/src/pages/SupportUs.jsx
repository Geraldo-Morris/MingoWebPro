import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aldo from "../Images/SupportUs/aldo2.png";
import btnfollow from "../Images/SupportUs/buttonFollow.png";
import btnjoin from "../Images/SupportUs/buttonJoin.png";
import btntreat from "../Images/SupportUs/buttonTreat.png";
import dis from "../Images/SupportUs/discord.png";
import micah from "../Images/SupportUs/micah2.png";
import waifu from "../Images/SupportUs/waifu2.png";
import zt from "../Images/SupportUs/zerotwo.png";

const SupportUs = () => {
  return (
    <>
      <Header />
      <div class="text-white mt-[100px] mx-auto w-max">
        <div class="">
          <h1 class="text-[50px] font-bold">SUPPORT US</h1>
          <h1 class="text-[16px] text-abu2">
            This project is a self-funded initiative brought to you by a us, and
            we need your help to keep it going. <br />
            it will keeps us motivated to raise the bar and bring you the best
            quality and more content.
          </h1>
        </div>

        <div class="flex mx-auto w-max">
          <div class="flex-col">
            {/* follow us */}
            <div>
              <div class="relative mt-[100px] ml-[70px]">
                <img
                  class="w-[800px] h-[350px] opacity-75 hover:opacity-100 transition-opacity duration-300 "
                  src={waifu}
                  alt=""
                />

                <a href="https://www.youtube.com/@animerock_" target="_blank">
                  <img
                    class="absolute bottom-0 ml-[18px] mb-[18px] hover:bg-[#818181fd]"
                    src={btnfollow}
                    alt=""
                  />
                </a>
              </div>
            </div>

            {/* Join */}
            <div>
              <div class="relative mt-[22px] ml-[70px]">
                <img
                  class="w-[800px] h-[350px]  opacity-75 hover:opacity-100 transition-opacity duration-300"
                  src={dis}
                  alt=""
                />
                <a href="https://discord.gg/frjKVdvF" target="_blank">
                  <img
                    class="absolute bottom-0 ml-[18px] mb-[18px] hover:bg-[#818181fd]"
                    src={btnjoin}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Treat us */}
          <div>
            <div class="relative mt-[100px] ml-[20px] ">
              <img
                class="opacity-75 hover:opacity-100 transition-opacity duration-300"
                src={zt}
                alt=""
              />
              <a href="https://saweria.co/GeraldoMorris">
                <img
                  class="absolute bottom-0 mx-[175px] mb-[18px] hover:bg-[#818181fd]"
                  src={btntreat}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* Team */}
        <div class="text-white mt-[200px]">
          <div>
            <h1 class="text-[50px] font-bold">TEAM</h1>
            <h1 class="text-[16px] text-abu2">
              Mingo was concepted and developed by Geraldo Morris, a front end
              Developer at University of Dela Salle. and <br />
              Christian Ranti, a back-end Developer at University of Dela Salle.
            </h1>
          </div>
          <div class="flex mx-auto w-max mt-[100px]">
            <img
              class="mr-[240px] opacity-75 hover:opacity-100 transition-opacity duration-300"
              src={aldo}
              alt=""
            />
            <img
              className="opacity-75 hover:opacity-100 transition-opacity duration-300"
              src={micah}
              alt=""
            />
          </div>
        </div>

        {/* Special Thanks */}
        <div class="text-white mt-[200px] mb-[150px]">
          <h1 class="text-[30px] font-bold">
            SPECIAL THANKS FOR HELP AND SUPPORT
          </h1>
          <h1 class="text-abu2 text-[16px] mt-[15px]">
            These individuals gave a hand by providing feedback and helped us on
            the project 🔥:
          </h1>
          <h1 class="text-[16px] ]">
            Justin Tunggal, Dustin Kumala, Gerald Luntungan, Marthin Mangindaan,
            Asher Lukas and Vicken Manginsela
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SupportUs;
