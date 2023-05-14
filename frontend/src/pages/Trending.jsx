import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardGames from "../components/CardTrending2";

const Trending = () => {
  return (
    <>
      <Header />

      <div className="w-max mx-auto mt-[55px]">
        <h1 className="text-white text-[35px] font-bold mb-[25px]">Trending</h1>

        <div className="grid  grid-cols-5 gap-[70px]">
          <CardGames />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Trending;
