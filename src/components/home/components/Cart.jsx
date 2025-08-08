import React, { useState } from "react";
import { imgconfig } from "../../../Image/Image";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: imgconfig?.Lip,
      name: "Lipstics",
      price: 50,
      quantity: 5,
    },
    {
      id: 2,
      image: imgconfig?.Nail,
      name: "NailPolish",
      price: 45,
      quantity: 2,
    },
  ]);

  const navigate = useNavigate();

  const shippingCost = 10;
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id, value) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + value) }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <div className="min-h-screen  p-4 sm:p-6 mt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
        
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className=''>
              <tr className="">
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Product Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row items-center mt-5 gap-4">
          <button
            onClick={() => alert("Returning to shop...")}
            className="w-full sm:w-auto bg-white text-black border-2 font-semibold py-2 px-6 rounded"
          >
            Return to Shop
          </button>
          <button
            onClick={() => alert("Cart updated successfully!")}
            className="w-full sm:w-auto bg-white text-black border-2 font-semibold py-2 px-6 rounded"
          >
            Update Cart
          </button>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-between">
          <div className="space-y-4">
            <input className="w-full sm:w-auto bg-white text-gray-400 border-2 font-semibold py-2 px-6 rounded" placeholder="Coupon Code"/>
            <button className="w-full sm:w-auto bg-red-600 text-white font-semibold py-2 px-6 rounded md:ml-5">
              Apply Coupon
            </button>
          </div>

          <div className="mt-6 sm:mt-0 bg-white border-2  p-4 rounded shadow-md w-full sm:w-auto ">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">
                  ${calculateSubtotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">
                  ${(calculateSubtotal() + shippingCost).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-600 text-white font-semibold py-2 px-6 rounded hover:bg-red-700"
                onClick={() => navigate("/billingdetails")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;