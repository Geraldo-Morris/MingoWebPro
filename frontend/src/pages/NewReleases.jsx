import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardTrending from "../components/CardTrending";
import CardNewreleases2 from "../components/CardNewreleases2";

const NewReleases = () => {
  return (
    <>
      <Header />

      <div className=" w-max mx-auto mt-[55px]">
        <h1 className="text-white text-[35px] font-bold mb-[25px]">
          New Releases
        </h1>
        <div className="flex grid-cols-4 gap-[20px]">
          <CardNewreleases2 />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewReleases;
