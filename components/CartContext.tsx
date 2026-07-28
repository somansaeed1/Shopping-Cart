"use client";
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext<any>(null);
function CreateCartContext({children} :{children : React.ReactNode}) {
  const [cart, setCart] = useState<any[]>([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CreateCartContext provider");
  }
  return context;
};
export default CreateCartContext;
