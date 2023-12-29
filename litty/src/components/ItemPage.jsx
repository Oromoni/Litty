import { useContext } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

import products from "./Product";
import { ShopContext } from "./context/ShopContext";

import { SlBasket } from "react-icons/sl";

const ItemPage = () => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="min-h-screen w-full ">
      <div className="p-6">
        <h5 className="text-2xl">Products</h5>
        <div className="mt-10 flex flex-row justify-between items-center ">
          <div className="flex flex-row items-center gap-5">
            <HiAdjustmentsHorizontal size={25} />
            <p className="text-xl">Filter and sort</p>
          </div>
          <div className="text-base">2 products</div>
        </div>

        <div className="sm:flex-row sm:flex gap-5 ">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="mt-6  w-64 rounded-lg border hover:shadow-lg  ">
                <img src={product.ProductImage} alt="" className="rounded-lg" />
                <div className="flex flex-col justify-between">
                  <p className="p-2 text-base">{product.productName}</p>
                  <div className="flex flex-row justify-between p-3 items-center">
                    <p> $ {product.Price}</p>
                    <button
                      onClick={() => {
                        addToCart(product.id);
                      }}
                      className="flex items-center justify-center bg-black rounded-full h-8 w-8">
                      {" "}
                      <SlBasket size={15} color="white" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
