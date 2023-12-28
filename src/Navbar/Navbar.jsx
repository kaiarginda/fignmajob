// import React, { useEffect, useRef, useState } from "react";
// import "./navbar.css";

// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { FaTruckMoving } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { TiArrowRepeatOutline } from "react-icons/ti";
// import { FiTruck } from "react-icons/fi";

// const Navbar = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [w, setW] = useState(window.innerWidth);
//   const navRef = useRef(null);

//   const handleNext = () => {
//     if (currentPage < 3) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       if (window.innerWidth > 768) setCurrentPage(0);
//       setW(window.innerWidth);
//     });
//   });
//   return (
// <nav className="bg-[#252F3D] px-20 py-5 flex flex-col justify-center items-center text-center">
//   <div className="slider-container fl">
//     <ul
//       className="text-white flex justify-betweeen items-center gap-5 owerflow-hidden"
//       style={{
//         transform: `translateX(-${currentPage * 110}%)`,
//         transition: "transform 0.5s ease-in-out",
//       }}
//       ref={navRef}
//     >
//       <li className="flex gap-3 items-center justify-center w-[300px]">
//         <span>
//           <IoIosCheckmarkCircleOutline />
//         </span>
//         <span>30-DAY SATISFACTION GUARANTEE</span>
//       </li>
//       <li className="flex gap-3 items-center  justify-center w-[300px]">
//         <span>
//           {/* <FaTruckMoving /> */}
//           <FiTruck />
//         </span>
//         <span>Free delivery on orders over $40.00</span>
//       </li>
//       <li className="flex gap-3 items-center  justify-center w-[300px]">
//         <span>
//           <FaRegHeart />
//         </span>
//         <span>50.000+ HAPPY CUSTOMERS</span>
//       </li>
//       <li className="flex gap-3 items-center  justify-center w-[300px]">
//         {" "}
//         <span>
//           <TiArrowRepeatOutline />
//         </span>
//         <span>100% Money Back Guarantee</span>
//       </li>
//     </ul>
//   </div>
//   {w > 768 ? null : (
//     <div className="slider-controls">
//       <span
//         className="arrow-icon"
//         onClick={handlePrev}
//         disabled={currentPage === 0}
//       >
//         {/* You can replace the arrow icons with your preferred icons */}
//         <span>&larr;</span>
//       </span>
//       <span
//         className="arrow-icon"
//         onClick={handleNext}
//         disabled={currentPage === 3}
//       >
//         {/* You can replace the arrow icons with your preferred icons */}
//         <span>&rarr;</span>
//       </span>
//     </div>
//   )}
// </nav>
//   );
// };

// export default Navbar;

import { FiTruck } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TiArrowRepeatOutline } from "react-icons/ti";
import "./navbar.css";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [w, setW] = useState(window.innerWidth);
  const navRef = useRef(null);

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
      if (window.innerWidth > 768) {
        setCurrentPage(0);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {w > 768 ? (
        <nav className="bg-[#252F3D] px-20 py-5 flex flex-col justify-center items-center text-center">
          <div className="slider-container fl">
            <ul
              className="text-white flex justify-betweeen items-center gap-5 owerflow-hidden"
              style={{
                transform: `translateX(-${currentPage * 110}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
              ref={navRef}
            >
              <li className="flex gap-3 items-center justify-center w-[300px]">
                <span>
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span>30-DAY SATISFACTION GUARANTEE</span>
              </li>
              <li className="flex gap-3 items-center  justify-center w-[300px]">
                <span>
                  {/* <FaTruckMoving /> */}
                  <FiTruck />
                </span>
                <span>Free delivery on orders over $40.00</span>
              </li>
              <li className="flex gap-3 items-center  justify-center w-[300px]">
                <span>
                  <FaRegHeart />
                </span>
                <span>50.000+ HAPPY CUSTOMERS</span>
              </li>
              <li className="flex gap-3 items-center  justify-center w-[300px]">
                {" "}
                <span>
                  <TiArrowRepeatOutline />
                </span>
                <span>100% Money Back Guarantee</span>
              </li>
            </ul>
          </div>
          {w > 768 ? null : (
            <div className="slider-controls">
              <span
                className="arrow-icon"
                onClick={handlePrev}
                disabled={currentPage === 0}
              >
                {/* You can replace the arrow icons with your preferred icons */}
                <span>&larr;</span>
              </span>
              <span
                className="arrow-icon"
                onClick={handleNext}
                disabled={currentPage === 3}
              >
                {/* You can replace the arrow icons with your preferred icons */}
                <span>&rarr;</span>
              </span>
            </div>
          )}
        </nav>
      ) : (
        <nav className="bg-[#252F3D] px-20 py-5 flex flex-col justify-center items-center text-center">
          <div
            className={`slider-container fl ${w <= 768 ? "flex" : "hidden"}`}
          >
            <ul
              className="text-white flex justify-betweeen items-center gap-5 owerflow-hidden"
              ref={navRef}
            >
              <li
                className={`flex gap-3 items-center w-full ${
                  currentPage === 0 ? "visible" : "hidden"
                }`}
              >
                <span>
                  <IoIosCheckmarkCircleOutline />
                </span>
                <span>30-DAY SATISFACTION GUARANTEE</span>
              </li>
              <li
                className={`flex gap-3 items-center w-full ${
                  currentPage === 1 ? "visible" : "hidden"
                }`}
              >
                <span>
                  <FiTruck />
                </span>
                <span>Free delivery on orders over $40.00</span>
              </li>
              <li
                className={`flex gap-3 items-center w-full ${
                  currentPage === 2 ? "visible" : "hidden"
                }`}
              >
                <span>
                  <FaRegHeart />
                </span>
                <span>50.000+ HAPPY CUSTOMERS</span>
              </li>
              <li
                className={`flex gap-3 items-center w-full ${
                  currentPage === 3 ? "visible" : "hidden"
                }`}
              >
                <span>
                  <TiArrowRepeatOutline />
                </span>
                <span>100% Money Back Guarantee</span>
              </li>
            </ul>
          </div>
          {w <= 768 && (
            <div className="slider-controls">
              <span
                className="arrow-icon"
                onClick={handlePrev}
                disabled={currentPage === 0}
              >
                <span>&larr;</span>
              </span>
              <span
                className="arrow-icon"
                onClick={handleNext}
                disabled={currentPage === 3}
              >
                <span>&rarr;</span>
              </span>
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
