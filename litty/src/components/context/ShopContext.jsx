import { createContext, useState } from "react";
import products from "../Product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = props => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const removeFromCart2 = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find(product => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.Price;
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems,
    removeFromCart2,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
