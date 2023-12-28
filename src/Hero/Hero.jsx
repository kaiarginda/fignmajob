import React from "react";
import "./hero.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Hero = () => {
  return (
    <div className="pt-5">
      <div className="flex justify-center flex-col items-center">
        <h1 className="heroh1">Wait ! your order in progress.</h1>
        <p className="herop">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
        </p>
      </div>
      <div className="pt-10 dviv">
        <ul className="flex justify-between items-center px-10">
          <li className="flex items-center justify-center gap-1">
            <span>
              <IoIosCheckmarkCircle className="bg-grn" />
            </span>
            <span>Step 1 : Cart Review</span>
          </li>
          <li className="flex items-center justify-center gap-1">
            <span>
              <IoIosCheckmarkCircle className="bg-grn" />
            </span>
            <span>Step 2 : Checkout</span>
          </li>
          <li className="flex items-center justify-center gap-1">
            <span className="thr-border ">3</span>
            <span>Step 3 : Special Offer</span>
          </li>{" "}
          <li className="flex items-center justify-center gap-1">
            <span className="thr-border whit">4</span>
            <span>Step 4 : Confirmation</span>
          </li>
          {/*  */}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
