"use client";

import {useCart} from "@/components/CartContext";
import ViewCart from "@/components/ViewCart";
import axios from "axios";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Home() {
  const [getProductElements, setGetProductElements] = useState<any[]>([]);
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
      console.error("Failed to fetch the API");
    } finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product: any) => {
    setCart((prevCart: any[]) => [...prevCart, product]);
  };

  if (isLoading) return <p className="text-center py-10 font-bold">Loading...</p>;
  console.log(getProductElements);
  return (
      <div className="bg-blue-200 w-full px-4 py-12 flex-auto">
        <h1 className="font-bold mb-8 text-center text-gray-800">Products</h1>
        <ul className="flex flex-wrap justify-between gap-y-6 w-full">
            {getProductElements?.map((curr, ind) => (
              <li key={ind} className="w-full md:w-[48%] bg-white p-6 rounded-lg flex flex-col justify-between">
                <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{curr.title}</h3>
                <h3 className="text-green-600 font-extrabold"> ${curr.price}</h3>
                <div>
                  <Image 
                  src={curr.image}
                  alt={curr.title}
                  width={150}
                  height={150}
                  className="mx-auto h-40 mb-4"
                  /> <br />
                </div>
                <p className="text-sm text-gray-600 line-clamp-3 mb-3"> {curr.description}</p>
                
                <span className=" bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded font-medium capitalize">Ratings:</span>
                <ul className="pl-4 list-disc">
                  <li>{curr.rating?.rate}</li>
                  <li>{curr.rating?.count} Reviews</li>
                </ul>
                <button
                  className="bg-zinc-500 font-medium w-full rounded-md py-2.5 px-4 hover:bg-zinc-700 cursor-pointer mt-6"
                  onClick={() => addToCart(curr)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
        </ul>
        <div className="bg-gray-100 p-6 rounded-lg h-fit mt-12 w-full">
        <ViewCart />
      </div>
      </div>
  );
}
