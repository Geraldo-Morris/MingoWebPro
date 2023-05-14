import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardTrending from "../components/CardTrending";
import CardUpcoming from "../components/CardUpcoming";

const Upcoming = () => {
  return (
    <>
      <Header />

      <div className=" w-max mx-auto mt-[55px]">
        <h1 className="text-white text-[35px] font-bold mb-[25px]">Upcoming</h1>
        <div className="flex ">
          <CardUpcoming />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Upcoming;
