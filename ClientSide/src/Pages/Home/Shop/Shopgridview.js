import React from "react";
import {
  AiOutlineHome,
  AiOutlineRight
} from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
import ProductItems from "./ProductItems";
import ProductItems2 from "./ProductItems2";
import "./Shop.css";

const Shopgridview = () => {
  const [product, setProduct] = React.useState("first");
  const rangeInput = document.querySelectorAll(".range-input input");

  rangeInput.forEach((input) => {
    input.addEventListener("input", () => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      console.log(minVal, maxVal);
    });
  });
  // const rangeInput = document.querySelectorAll(".range-input input"),
  //   priceInput = document.querySelectorAll(".price-input input"),
  //   range = document.querySelector(".slider .progress");
  // let priceGap = 1000;
  // priceInput.forEach((input) => {
  //   input.addEventListener("input", (e) => {
  //     let minPrice = parseInt(priceInput[0].value),
  //       maxPrice = parseInt(priceInput[1].value);

  //     if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
  //       if (e.target.className === "input-min") {
  //         rangeInput[0].value = minPrice;
  //         range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
  //       } else {
  //         rangeInput[1].value = maxPrice;
  //         range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
  //       }
  //     }
  //   });
  // });
  return (
    <div className="container">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-primary" />
        <AiOutlineRight className="text-gray-500 mx-2" />
        <h6>Shop</h6>
        <AiOutlineRight className="text-gray-500 mx-2" />
        <h6>Grid view</h6>
      </div>
      {/* shop wrapper */}
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* sidebar */}
        <Sidebar/>
        {/* product items */}
        <div className="col-span-3">
          <div className="flex items-center mb-4">
            <select
              name=""
              id=""
              className="w-44 text-sm text-gray-600 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            >
              <option value="default-sorting">Default sorting</option>
              <option value="price-low-high">Price low-high</option>
              <option value="price-high-low">Price high-low</option>
            </select>
            <div className="flex gap-2 ml-auto show-items group">
              <div onClick={() => setProduct("first")} className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 active:bg-primary active:text-white rounded cursor-pointer">
                <i className="fas fa-th"></i>
              </div>
              <div onClick={() => setProduct("second")} className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 active:bg-primary   active:text-white rounded cursor-pointer">
                <i className="fas fa-list"></i>
              </div>
            </div>
          </div>
          {/* product items */}
          {
            product === "first" && <ProductItems></ProductItems>
           
          }
          {
            product === "second" && <ProductItems2></ProductItems2>
          }
        </div>
      </div>
    </div>
  );
};

export default Shopgridview;
