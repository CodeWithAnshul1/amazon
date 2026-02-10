import React from "react";
import img from "../assets/amazon_logo.png";
import Menubar from "./Menubar.js";

export default function NAvbarr() {
  return (
    
      <div className="  navbar  px-2 w-full bg-[#131921]  xl:flex  justify-evenly items-center space-x-3 text-white">
       
        <div className="flex items-center justify-between">

          <div className="logo cursor-pointer flex">
           <div className="pt-3 xl:hidden"> <Menubar/></div>
            <img className="h-16 w-full" src={img} alt="logo" />
          </div>
          <div className="flex xl:hidden">
            
            <p className="text-3xl">
              <i class="fa-solid fa-cart-shopping"></i>
            </p>
            <p className="pt-3">Cart</p>
          </div>
        </div>

        <div className="location cursor-pointer -space-y-1.5 hidden xl:block">
          <div className=" text-[13px] pl-5  "> Deliver to</div>
          <div className=" text-mediam  font-semibold">
            <i class="fa-solid fa-location-dot"></i>
            India
          </div>
        </div>
        <div
          className="search flex w-full mr-6 xl:w-[60%] items-center border border-gray-300  rounded-sm focus-within:border-yellow-400 focus-within:ring-2
            focus-within:ring-yellow-700"
        >
          <select className=" hidden xl:block px-1 text-slate-500 text-sm  bg-gray-100 w-12 h-10 outline-none border-r border-gray-300 hover:text-black">
            <option value=""> All</option>
            <option value="all department">all department</option>
            <option value="art and crapt">art and craft</option>
            <option value="Beauty and personal care ">
              Beauty and personal care
            </option>
            <option value="Baby">Baby</option>
            <option value="Book">Book</option>
            <option value="Boys Fashion">Boys Fashion</option>
            <option value="Computers">Computer</option>
            <option value="Deals">Deals</option>
          </select>
          <input
            className="text-black w-full bg-white h-10  outline-none px-3 "
            type="text"
            placeholder="search here"
          />
          <button className="  text-black text-xl h-10 px-3  rounded-r-sm bg-[#febd68]">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className=" hidden xl:block account -space-y-1.5">
          <p className="text-sm ">Hello, sign in</p>
          <p className=" font-semibold">Account & Lists</p>
        </div>
        <div className="  hidden xl:block return -space-y-1.5">
          <p className="text-sm">Returns</p>
          <p className="font-semibold"> & Order</p>
        </div>
        <div className=" hidden xl:flex Cart  ">
          <p className="text-3xl">
            <i class="fa-solid fa-cart-shopping"></i>
          </p>
          <p className="pt-3">Cart</p>
        </div>

        <div className="xl:hidden py-3 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-touch ">
          <ul className="flex gap-5 text-sm font-semibold pl-1s p-2 cursor-pointer">
          <li className="shrink-0">video</li>
          <li className="shrink-0">Deals</li>
          <li className="shrink-0">Amazon Basics</li>
          <li className="shrink-0">Livestreams</li>
          <li className="shrink-0">Best Seller</li>
          <li className="shrink-0">Home</li>
          <li className="shrink-0">New Releases</li>
          <li className="shrink-0">music</li>
          <li className="shrink-0">Pc</li>
          </ul>
        </div>
      </div>
    
  );
}
