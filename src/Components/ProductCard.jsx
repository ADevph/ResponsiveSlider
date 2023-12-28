import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

const ProductCard = ({ img, rating, title, price, description }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden p-4 group">
      <div className="relative flex justify-start items-start">
        <div className="w-2/3 pr-4">
          <div className="relative group">
            <div className="relative">
              <img
                src={img}
                alt={title}
                className="w-full h-full rounded-md object-cover group-hover:cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-60 transition-opacity duration-300 hover:opacity-90">
                <FaHeart
                  className="border rounded-lg text-black hover:text-orange-400 text-3xl bg-white p-1 "
                  size={32}
                />
                <IoShareSocialOutline
                  className="border rounded-lg text-black hover:text-orange-400 text-3xl bg-white p-1 ml-2"
                  size={32}
                />
                <IoMdSearch
                  className="border rounded-lg text-black hover:text-orange-400 text-3xl bg-white p-1 ml-2"
                  size={32}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-start items-start">
          <div className="rating mb-2">
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
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
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <span className="text-gray-700 font-semibold mb-2">{price}</span>
          <p className="text-gray-600 text-start text-sm mb-2">{description}</p>
          <button className="hidden group-hover:block bg-black bg-opacity-70 text-white p-1 px-2 rounded-lg mb-8">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
