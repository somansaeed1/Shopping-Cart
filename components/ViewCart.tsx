"use client";
import Image from "next/image";
import { useCart } from "@/components/CartContext";

const ViewCart = () => {
  const [cart, setCart] = useCart();
  // return   : curr.product.id !== id}));

  const removeFromCart = (id: number | string, quantity: number) => {
    quantity > 1
      ? setCart((e: any) =>
          e.map((curr1: any) => {
            console.log("first");
            if (id !== curr1.product.id) return curr1;
            return {
              product: curr1.product,
              quantity: curr1.quantity - 1,
            };
          }),
        )
      : setCart((e: any) => e.filter((curr: any) => curr.product.id !== id));
  };

  console.log("Cart: ", cart);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <h2 className="font-extrabold text-2xl text-gray-800">
          Shopping Cart{cart.length}
        </h2>
        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {cart.length} {cart.length === 1 ? "Item" : "Items"}
        </span>
      </div>
      {cart.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500 font-medium">
            Your cart is currently empty.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Add some products to get started!
          </p>
        </div>
      )}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {cart.map((item: any, ind: number) => (
          <div
            key={ind}
            className="flex flex-col sm:flex-row items-start gap-4 bg-white p-4 rounded-xl border border-gray-100"
          >
            <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-lg p-2 flex items-center justify-center mx-auto">
              <Image
                src={item.product.image}
                alt={item.product.title}
                width={150}
                height={150}
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 min-w-0 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <h3 className="font-semibold text-gray-900 truncate pr-2">
                  {item.product.title}
                </h3>
                <span className="text-green-600 font-bold">
                  {" "}
                  $
                  {item.quantity > 1
                    ? item.product.price * item.quantity
                    : item.product.price}
                </span>
                {item.quantity > 1 && (
                  <span
                    className="flex-1 min-w-0 w-full text-2xl
                  text-red-600"
                  >
                    {" "}
                    X{item.quantity}
                  </span>
                )}
              </div>
              <span className="inline-block text-[10px] uppercase font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded mt-1">
                {item.product.category}
              </span>
              <p
                className="text-xs text-gray-500 line-clamp-1 mt-1.5 capitalize"
                title={item.product.description}
              >
                {item.product.description}
              </p>

              <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                <span className="font-medium text-amber-500">Ratings:</span>
                <ul className="pl-4">
                  <li>{item.product.rating?.rate}</li>
                  <li>{item.product.rating?.count} Reviews</li>
                </ul>
                <button
                  onClick={() =>
                    removeFromCart(item?.product.id, item.quantity)
                  }
                  className="text-red-500 hover:text-red-700 font-bold text-sm cursor-pointer ml-auto"
                >
                  Remove Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCart;
