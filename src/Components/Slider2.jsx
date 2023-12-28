import React, { useState, useEffect } from 'react';
import { GoDot } from 'react-icons/go';

const Slider2 = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleDotClick = (index) => {
    setStartIndex(index * 3);
    setActiveDotIndex(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-semibold">Best Seller</h3>
        <div className="flex ml-2">
          {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
            <GoDot
              key={index}
              className={`text-2xl cursor-pointer ${
                activeDotIndex === index ? 'text-orange-400' : 'text-slate-300'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex w-96 h-1 rounded-xl ">
    <div className="w-1/3 bg-orange-500 rounded-xl"></div>
    <div className="w-2/3 bg-slate-300 border-b-2 border-slate-300 rounded-xl"></div>
  </div>
        <div className="flex flex-row">
        <div className="w-3/6 relative overflow-hidden">
          <div className="grid grid-cols-1 grid-rows-3 gap-2">
            {products.slice(startIndex, startIndex + 3).map((product) => (
              <div key={product.id} className="flex p-2">
                <div className="w-1/3">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-4/5 h-4/5 rounded-md object-cover"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-start items-start">
                  <div className="rating mb-2">
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400" checked
                    />
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400" 
                    />
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400 "
                    />
                  </div>
                  <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                  <span className="text-gray-700 font-semibold">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
