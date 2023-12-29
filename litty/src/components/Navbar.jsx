import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [search, setsearch] = useState(false);
  return (
    <div className="">
      <div className="bg-white h-32 w-full flex flex-row justify-between items-center relative p-4">
        {search ? (
          <div className="bg-white h-32 w-full flex flex-row justify-between items-center absolute top-0 ">
            <input
              type="text"
              placeholder="Search"
              className="w-[60%] h-12  relative border-2 border-black placeholder:p-2"
            />
            <CiSearch
              className="absolute right-40"
              size={25}
              onClick={() => {
                setsearch(false);
              }}
            />
            <AiOutlineClose
              className="absolute right-20"
              size={25}
              onClick={() => {
                setsearch(false);
              }}
            />
          </div>
        ) : (
          ""
        )}
        <div className="md:hidden">
          <button
            onClick={() => {
              setnav(!nav);
            }}>
            {nav ? <AiOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
          </button>
        </div>
        <div className="flex gap-6 justify-center item-center">
          <img
            className="w-20 h-20"
            src="https://www.thesun.co.uk/wp-content/uploads/2022/10/crop-20106792.jpg?strip=all&quality=100&w=1737&h=1080&crop=1"
            alt=""
          />
          <div className="hidden md:flex items-center justify-center gap-7">
            <Link to={"../components/Home.jsx"}>Home</Link>
            <Link>Catalog</Link>
            <Link to={"Contact"}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <CiSearch
              size={25}
              onClick={() => {
                setsearch(!search);
              }}
            />
          </div>
          <div>
            <Link to={"Cart2"}>
              <CiShoppingCart size={25} className="" />
              <h6 className="h-3 w-3 bg-black text-white rounded-full flex items-center justify-center text-xs absolute top-[52px] right-4">
                5
              </h6>
            </Link>
          </div>
        </div>
      </div>
      {nav ? (
        <div className="bg-white h-screen w-full fixed z-10 flex flex-col gap-6  items-center text-2xl">
          <Link
            onClick={() => {
              setnav(false);
            }}
            to={"/"}
            className="mt-6 hover:bg-gray-50/80 p-4 w-full items-center hover:font-bold">
            Home
          </Link>
          <Link
            onClick={() => {
              setnav(false);
            }}
            className="  hover:bg-gray-50/80 w-full p-4 hover:font-bold">
            Catalog
          </Link>
          <Link
            onClick={() => {
              setnav(false);
            }}
            to={"contact"}
            className="  hover:bg-gray-50/80 w-full p-4 hover:font-bold">
            Contact
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
