import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { ShopContext } from "./context/ShopContext";
import { useContext } from "react";

const Navbar2 = () => {
  const [nav, setnav] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div
      className={
        nav ? "fixed h-screen z-50 top-0  w-full overflow-hidden" : ""
      }>
      <div className="flex flex-row justify-between items-center bg-white h-32 w-full  relative p-4  ">
        <div className="sm:hidden">
          {nav ? (
            <AiOutlineClose
              color="orange"
              onClick={() => {
                setnav(!nav);
              }}
              size={25}
            />
          ) : (
            <RxHamburgerMenu
              color="orange"
              onClick={() => {
                setnav(!nav);
              }}
              size={25}
            />
          )}
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#FA8863]">LITTY</h1>
        </div>

        <div className="hidden sm:flex gap-16 text-black font-bold text-2xl">
          <Link to={"/"} className="text-[#FA8863]">
            Home{" "}
          </Link>
          <Link to={"ItemPage"} className="text-[#FA8863] ">
            Catalog{" "}
          </Link>
          <Link to={"Contact"} className="text-[#FA8863]">
            Contact{" "}
          </Link>
        </div>

        <div>
          <div className="flex gap-4">
            <div
              onClick={() => {
                setnav(false);
              }}>
              <Link to={"Cart2"}>
                <CiShoppingCart size={30} className="" color="orange" />
                <h6 className="h-4 w-4 bg-black text-white rounded-full flex items-center justify-center text-xs absolute top-[48px] right-3">
                  {getTotalCartItems()}
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? " flex flex-col w-[85%] bg-white top-28 h-screen absolute text-black justify-start p-6 "
            : " hidden"
        }>
        <div className="flex flex-col gap-10 text-xl">
          <Link
            to={"/"}
            onClick={() => {
              setnav(false);
            }}>
            <div className="hover:font-bold cursor-pointer text-[#FA8863]  ">
              Home
            </div>
          </Link>

          <Link
            to={"ItemPage"}
            onClick={() => {
              setnav(false);
            }}>
            <div className="hover:font-bold cursor-pointer text-[#FA8863]  ">
              Catalog
            </div>
          </Link>

          <Link
            to={"Contact"}
            onClick={() => {
              setnav(false);
            }}>
            <div className="hover:font-bold cursor-pointer text-[#FA8863]  ">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
