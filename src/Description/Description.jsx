import React from "react";
import "./description.css";
import { IoMdCheckmark } from "react-icons/io";

const Description = () => {
  return (
    <div className="p-5 pb-15 mt-10 flex justify-center gap-10 bg-[#FAFAFA] rounded-lg">
      <div className="left">
        <div className="left-top">
          <img src="/image 4.png" alt="" className="h-[591px] w-[570px]" />
        </div>

        {/* 
        “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
        */}
        <div className="flex-col p-[50px]">
          <div className="left-bot flex items-center gap-4">
            <div className="lbt">
              <img src="/Rectangle 1127.png" alt="" />
            </div>
            <div className="lbb flex flex-col  ">
              <div className="flex items-center justify-self-center">
                <img src="/Vector.png" alt="" />
                <img src="/Vector.png" alt="" />
                <img src="/Vector.png" alt="" />
                <img src="/Vector.png" alt="" />
                <img src="/Vector.png" alt="" />
              </div>
              <div className="flex items-center justify-center">
                <h1>KEN T.</h1>
                <div className="flex items-center justify-self-center">
                  <img src="/verify.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-center max-w-[527px] text-[16px]">
            As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.
          </p>
        </div>
      </div>
      <div className="right w-[550px]">
        <div className="specdiv">
          <p className="text-[32px] text-left">
            <span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price
            for 6 extra Clarifion for only{" "}
            <span className="text-[#2C7EF8]">$14 each </span> ($84.00 total!)
          </p>
        </div>
        <div className="flex pt-10 gap-3 makeitdiv">
          {/* <div className="divlef">
            <img
              src="/image-removebg-preview (12) 1.png"
              alt=""
              className="h-[134px] w-[134px]"
            />
          </div> */}
          <div className="divlef relative">
            <div className="bg-blue-500 absolute inset-0 rounded-lg"></div>
            <img
              src="/image-removebg-preview (12) 1.png"
              alt=""
              className="h-[134px] w-[134px] z-10 relative rima"
            />
          </div>
          <div className="divright">
            <ul className="flex flex-col items-start justify-center gap-2">
              <li className="flex w-[100%] justify-between">
                <p> Clarifion Air Ionizer </p>
                <div className="flex gap-2 items-center">
                  <span className="text-[#969696]">
                    <span className="strike">$180</span>
                  </span>

                  <span className="text-[24px] text-[#2C7EF8]">$84</span>
                </div>
              </li>
              <li className="flex justify-center items-center">
                <img src="/Vector.png" alt="" className="h-[18px]" />
                <img src="/Vector.png" alt="" className="h-[18px]" />
                <img src="/Vector.png" alt="" className="h-[18px]" />
                <img src="/Vector.png" alt="" className="h-[18px]" />
                <img src="/Vector.png" alt="" className="h-[18px]" />
              </li>
              <li className="text-[#37465A] liststyled flex gap-1 items-center justify-center">
                {" "}
                <img
                  src="/Group 1000001340.png"
                  alt=""
                  className="h-[12px] w-[12px]"
                />{" "}
                12 left in Stock
              </li>
              <li className="w-[398px] text-[#37465A] text-left">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10">
          <ul
            className={`flex flex-col items-start ${
              window.innerWidth > 768
                ? null
                : "flex justify-center items-center"
            }  justify-start gap-2`}
          >
            <li className="flex items-center justify-center gap-2 ">
              <span>
                <IoMdCheckmark className="text-[#2C7EF8] text-[20px]" />
              </span>
              <span className="text-[#4D5254] text-[16px]">
                Negative Ion Technology may{" "}
                <span className="text-black">help with allergens</span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-2 ">
              <span>
                <IoMdCheckmark className="text-[#2C7EF8] text-[20px]" />
              </span>
              <span className="text-[16px] text-[#4D5254]">
                Designed for{" "}
                <span className="text-black">air rejuvenation </span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-2 ">
              <span>
                <IoMdCheckmark className="text-[#2C7EF8] text-[20px]" />
              </span>
              <span className="text-[16px] text-[#4D5254]">
                <span className="text-black">Perfect for every room</span> in
                all types of places.{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center p-5 mt-10 bg-[#EDF3FD] rounded-[20px]">
          <p className="flex items-center justify-center gap-4">
            <span className="percentstyle text-white">%</span>
            <span>
              Save <span className="text-[#2C7EF8]">53%</span> and get{" "}
              <span className="text-[#2C7EF8]">6 extra Clarifision</span> for
              only <span className="text-[#2C7EF8]">$14 Each</span>
            </span>
          </p>
        </div>
        <div className="pt-10 flex flex-col justify-center items-center">
          <div className="btle">
            <button className="butclaim  bg-[#59AE43] w-[542px] h-[59px] text-white text-[20px] rounded-[50px] flex justify-center items-center">
              Yes - Claim my discount
            </button>
          </div>

          <div className="flex items-center pt-3 divigrid">
            <div className="line-after">
              <div className=" pl-3 pr-3">Free shipping</div>
            </div>

            <div className="line-after">
              <div className=" pl-3 pr-3">Secure 256-bit SSL encryption.</div>
            </div>

            <div className="line-after blala">
              <div className="pl-3">
                <img src="/Frame 1000001777.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center pt-2">
            <a href="#" className="under">
              No thanks, I don’t want this.
            </a>
          </div>

          <div className="flex pt-12">
            <img src="/image 6.png" alt="" />
            <p className="w-[468px]">
              If you are not completely thrilled with your Clarifion - We have a
              30 day satisfaction guarantee. Please refer to our return policy
              at the bottom of the page for more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
