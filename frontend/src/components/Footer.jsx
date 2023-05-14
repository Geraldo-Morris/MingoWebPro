import React from "react";
import fb from "../Images/Footer/facebook.png";
import ig from "../Images/Footer/instagram.png";
import twt from "../Images/Footer/twitter.png";

const Footer = () => {
  return (
    <div class="flex px-[73px] mt-[90px] py-[20px] justify-between border-t border-white">
      <div class="text-white">
        <a class="text-[40px] font-bold" href="">
          MINGO
        </a>
        <p class="mt-[18px] mb-[60px]">
          Explore a collection of video games interfaces <br />
          and find your favorite games.
        </p>
        <div class="flex">
          <a href="https://www.youtube.com/watch?v=3lBBxYQUVrc" target="_blank">
            <img class="w-[28px] h-[28px]" src={twt} alt="Twitter " />
          </a>
          <a href="https://www.youtube.com/watch?v=3lBBxYQUVrc" target="_blank">
            <img
              class="w-[28px] h-[28px] mx-[30px]"
              src={ig}
              alt="Instagram "
            />
          </a>
          <a href="https://www.youtube.com/watch?v=3lBBxYQUVrc" target="_blank">
            <img class="w-[28px] h-[28px]" src={fb} alt="Facebook " />
          </a>
        </div>
      </div>
      <div class="text-white text-[16px] my-[18px]">
        <a className="hover:text-[#818181fd] " href="/Games">
          {" "}
          Games
        </a>

        <a className="mx-[94px] hover:text-[#818181fd]" href="/Genre">
          Genre
        </a>

        <a className="mr-[60px] hover:text-[#818181fd]" href="/About">
          About
        </a>
        <a
          className="bg-white text-black rounded-[5px] text-center p-2 hover:bg-[#818181fd]"
          href="/SupportUs"
        >
          Support US
        </a>
        <div class="text-right mt-[158px] text-abu">
          <p>COPYRIGHT © 2023 WEBPRO UAS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
