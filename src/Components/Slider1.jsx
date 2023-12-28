// import React, { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import { GrPrevious, GrNext } from "react-icons/gr";

// const Slider1 = () => {
//   const [products, setProducts] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const [showPrevious, setShowPrevious] = useState(false);

//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products));
//   }, []);

//   const handlePrevious = () => {
//     setStartIndex((prevIndex) => Math.max(0, prevIndex - 4));
//     setShowPrevious(false);
//   };

//   const handleNext = () => {
//     setStartIndex((prevIndex) => Math.min(products.length - 4, prevIndex + 4));
//     setShowPrevious(true);
//   };

//   return (
//     <div className="overflow-hidden relative">
//       <div className="flex flex-row relative flex-wrap">
//         <div className="w-full md:w-1/2">
//           {products.slice(startIndex, startIndex + 2).map((product) => (
//             <div key={product.id} className="w-full md:w-full pr-2 mb-4">
//               <ProductCard {...product} />
//             </div>
//           ))}
//         </div>
//         <div className="w-full md:w-1/2">
//           {products.slice(startIndex + 2, startIndex + 4).map((product) => (
//             <div key={product.id} className="w-full md:w-full pr-2 mb-4">
//               <ProductCard {...product} />
//             </div>
//           ))}
//         </div>

//         {showPrevious && (
//           <hr className="w-full my-4 border-t border-gray-300" />
//         )}

//         <button
//           onClick={handlePrevious}
//           className={`absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none ${
//             showPrevious ? "" : "hidden"
//           }`}
//         >
//           <GrPrevious className="text-3xl text-slate-300 h-8 mb-5 border bg-base-200 hover:bg-orange-400 rounded-xl" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none"
//         >
//           <GrNext className="text-3xl text-slate-300 h-8 mb-5 border bg-base-200 hover:bg-orange-400 hover:text-white rounded-xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider1;



import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { GrPrevious, GrNext } from "react-icons/gr";

const Slider1 = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [showPrevious, setShowPrevious] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 4));
    setShowPrevious(false);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(products.length - 4, prevIndex + 4));
    setShowPrevious(true);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="flex flex-row relative flex-wrap">
        <div className="w-full md:w-1/2">
          {products.slice(startIndex, startIndex + 2).map((product) => (
            <div key={product.id} className="w-full md:w-full pr-2 mb-4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          {products.slice(startIndex + 2, startIndex + 4).map((product) => (
            <div key={product.id} className="w-full md:w-full pr-2 mb-4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {showPrevious && (
          <hr className="w-full my-4 border-t border-gray-300" />
        )}

        <button
          onClick={handlePrevious}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none ${
            showPrevious ? "" : "hidden"
          }`}
        >
          <GrPrevious className="text-3xl text-slate-300 h-8 mb-5 border bg-base-200 hover:bg-orange-400 rounded-xl" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none"
        >
          <GrNext className="text-3xl text-slate-300 h-8 mb-5 border bg-base-200 hover:bg-orange-400 hover:text-white rounded-xl" />
        </button>
      </div>
    </div>
  );
};

export default Slider1;
