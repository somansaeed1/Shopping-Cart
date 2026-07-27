"use client";
import Image from "next/image";
import React from "react";
import { useCart } from "@/components/CartContext";
const ViewCart = () => {

const [cart] = useCart();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
      <h2 className="font-extrabold text-2xl text-gray-800">Shopping Cart{cart.length}</h2>
      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
        {cart.length} {cart.length === 1 ? "Item" : "Items"}</span>
    </div>
    {cart.length === 0 && (
      <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <p className="text-gray-500 font-medium">Your cart is currently empty.</p>
        <p className="text-gray-400 text-sm mt-1">Add some products from above to get started!</p>
        </div>
      )}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
      {cart.map((item:any, ind:number) => (
        <div key={ind} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="w-20 h-20 shrink-0 bg-gray-50 border border-gray-100 rounded-lg p-2 flex items-center justify-center mx-auto sm:mx-0">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={150} 
                height={150} 
                className="object-contain w-full h-full" 
              />
            </div>
          <div className="flex-1 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate pr-2">{item.title}</h3>
          <span 
          className="text-green-600 font-bold text-base sm:text-lg shrink-0"> ${item.price}
          </span>
          </div>
          <span 
          className="inline-block text-[10px] uppercase tracking-wider font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded mt-1">{item.category}
          </span>
          <p className="text-xs text-gray-500 line-clamp-1 mt-1.5">{item.description}</p>
          
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
              <span className="font-medium text-amber-500">Ratings:</span>
              <ul className="pl-4">
                <li>Rate: {item.rating?.rate}</li>
                <li>Count: {item.rating?.count} Reviews</li>
              </ul>
            </div>
        </div>
        </div>
      ))}
      </div>
      </div>
  );
};

export default ViewCart;