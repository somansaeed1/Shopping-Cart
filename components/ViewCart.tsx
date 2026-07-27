"use client";
import Image from "next/image";
import React from "react";
import { useCart } from "@/components/CartContext";
const ViewCart = () => {

const [cart, setCart] = useCart();
  return (
    <div>
      Cart Items
      {cart.length === 0 && <p>Empty Cart</p>}
      {cart.map((item, ind) => (
        <div key={ind}>
          <h3>Title: {item.title}</h3>
          <h3>Price: {item.price}</h3>
          <h3>Description: {item.description}</h3>
          <h3>Category: {item.category}</h3>
          <Image src={item.image} alt="45678" width={34} height={45} />
          <div className="mt-2 text-sm text-gray-600">
              <span className="font-bold">Ratings:</span>
              <ul className="pl-4">
                <li>Rate: {item.rating?.rate}</li>
                <li>Count: {item.rating?.count}</li>
              </ul>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ViewCart;
