import { useContext } from "react";
import products from "./Product";
import { ShopContext } from "./context/ShopContext";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart2 = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    removeFromCart2,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      <h5 className="text-3xl font-semibold text-left p-4">Cart</h5>
      <div className="justify-center flex md:w-2/3">
        {products.map((product, el) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div key={el} className="p-4 sm:w-2/3 md:w-3/5">
                <div className="flex flex-row h-48 min-w-96   border shadow-lg   rounded-xl ">
                  <div className="w-40 ">
                    <img
                      src={product.ProductImage}
                      alt=""
                      className="rounded-lg object-cover h-48"
                    />
                  </div>

                  <div className=" w-full">
                    <div className="flex justify-between p-3">
                      <p className="opacity-0">name</p>
                      <button
                        onClick={() => {
                          removeFromCart2(product.id);
                        }}
                        className="bg-black rounded-full flex justify-center items-center w-8 h-8">
                        <FaTrashAlt color="white" className="" />
                      </button>
                    </div>

                    <div className="mt-12 p-3 flex justify-between items-center">
                      <div>
                        <p>{product.productName}</p>
                        <p> $ {product.Price}</p>
                      </div>

                      <div className="flex items-center gap-3 justify-center h-10 bg-black rounded-3xl ">
                        <div
                          className=" items-center flex ml-2"
                          onClick={() => {
                            removeFromCart(product.id);
                          }}>
                          <FaMinus color="white" />
                        </div>
                        <input
                          className="  
                          
                           w-5  bg-black text-white "
                          value={cartItems[product.id]}
                          onChange={e =>
                            updateCartItemCount(
                              Number(e.target.value),
                              product.id
                            )
                          }
                        />
                        <div
                          className=" items-center flex mr-2"
                          onClick={() => {
                            addToCart(product.id);
                          }}>
                          <FaPlus color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-4" />
              </div>
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="flex justify-center md:w-2/3">
          <div className="p-4 w-2/3 sm:w-3/2 ">
            <div className="flex flex-row justify-between mt-3 w-full">
              <p className="font-semibold">SUBTOTAL</p>
              <p className="font-semibold">$ {totalAmount}</p>
            </div>

            <div className="flex item-center justify-center bg-black text-white mt-4 rounded-3xl p-2 m-2">
              Proceed To Buy
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <p>YOUR CART IS EMPTY</p>
          <div
            className="p-2 flex bg-black text-white justify-center items-center mt-8 w-1/2 rounded-3xl font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}>
            Continue Shopping
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart2;
