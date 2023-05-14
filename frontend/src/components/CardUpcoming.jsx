import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import wrt from "../Images/Trending/wrt.png";

const CardUpcoming = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/db_upcoming");
    setProducts(response.data);
  };

  return (
    <div className=" grid grid-cols-4 gap-[50px]">
      {products.map((product) => (
        <div className="relative " key={product.id}>
          <img
            className="brightness-75 rounded-md"
            src={product.url}
            alt="Image"
          />
          <div className="text-white absolute bottom-0 mb-[28px] ml-[17px]">
            <h1 className="text-[24px] font-bold">{product.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUpcoming;
