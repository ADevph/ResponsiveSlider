import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { GrPrevious, GrNext } from "react-icons/gr";

const Slider1 = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 4));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(products.length - 4, prevIndex + 4));
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-row relative flex-wrap">
        <div className="w-full md:w-1/2">
          {products.slice(startIndex, startIndex + 2).map((product) => (
            <div key={product.id} className="w-full md:w-full pr-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <hr className="w-full my-4 border-t border-gray-300" />
        <div className="w-full md:w-1/2">
          {products.slice(startIndex + 2, startIndex + 4).map((product) => (
            <div key={product.id} className="w-full md:w-full pr-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        {startIndex > 0 && (
          <button
            onClick={handlePrevious}
            className="absolute inset-y-1/2 left-0 transform -translate-y-1/2 focus:outline-none"
          >
            <GrPrevious className="text-3xl text-gray-500 -mt-6 border bg-base-100 hover:bg-orange-400 rounded-xl" />
          </button>
        )}
        {startIndex < products.length - 4 && (
          <button
            onClick={handleNext}
            className="absolute inset-y-1/2 right-0 transform -translate-y-1/2 focus:outline-none"
          >
            <GrNext className="text-3xl text-white -mt-6 border bg-base-100 hover:bg-orange-400 rounded-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider1;
