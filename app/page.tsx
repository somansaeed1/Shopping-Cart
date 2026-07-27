"use client";

import CreateCartContext, { useCart } from "@/components/CartContext";
import ViewCart from "@/components/ViewCart";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [getProductElements, setGetProductElements] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useCart();

  const getProducts = async () => {
    try {
      axios
        .get("https://fakestoreapi.com/products")
        .then((val) => setGetProductElements(val.data));
      setIsLoading(false);
      console.log("Products", getProducts);
    } catch (error: any) {
      console.log("Failed to fetch the API");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product: any) => {
    setCart((prevCart: any[]) => [...prevCart, product]);
  };
  if (isLoading) return <p>Loading...</p>;
  console.log(getProductElements);
  return (
      <div className="bg-blue-200 w-full max-w-7xl mx-auto px-4 py-12 flex-auto justify-items-center">
        <h1 className="font-bold">Products</h1>
        <ul>
          {getProductElements &&
            getProductElements.map((curr, ind) => (
              <li key={ind}>
                <h3>Title: {curr.title}</h3>
                <h3>Price: {curr.price}</h3>
                <h3>Description: {curr.description}</h3>
                <h3>Category: {curr.category}</h3>
                <Image src={curr.image} alt="45678" width={34} height={45} />
                <div className="mt-2">
                <span className="font-bold">Ratings:</span>
                <ul className="pl-4 list-disc">
                  <li>Rate: {curr.rating?.rate}</li>
                  <li>Count: {curr.rating?.count}</li>
                </ul>
              </div>                <button
                  className="bg-zinc-500 font-light w-50 rounded-md py-2 px-2 cursor-pointer"
                  onClick={() => addToCart(curr)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
        </ul>
              <div className="bg-gray-100 p-6 rounded-lg h-fit shadow-md">
        <ViewCart />
      </div>
      </div>
  );
}
