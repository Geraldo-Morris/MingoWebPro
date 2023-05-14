import React from "react";

const Header = () => {


  return (
  
      <div
      className="flex px-[70px] py-[10px] justify-between border-b border-white"
    >
      <a className="text-white text-[40px] font-bold" 
       href="/" >MINGO</a>
      <div className="text-white flex text-[16px] my-[18px]">
        <a className="hover:text-[#818181fd] " 
         href="/Games" > Games</a>

        <a className="mx-[94px] hover:text-[#818181fd]" 
         href="/Genre">
          Genre
        
        </a>

        <a className="mr-[60px] hover:text-[#818181fd]"
         href="/About">
          About
        
        </a>
        <a
          className="bg-white text-black w-[115px] h-[30px] rounded-[5px] text-center py-[3px] hover:bg-[#818181fd]"
          href="/SupportUs">Support US</a
        >
      </div>
    </div>
    
  );
};

export default Header;
