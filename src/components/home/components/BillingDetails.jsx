import React, { useState } from "react";

export default function BillingDetails() {
  const [cartItems, setCartItems] = useState([
    {
      id: 9,
      image: 'https://static.vecteezy.com/system/resources/previews/024/066/346/non_2x/black-lipstick-closed-and-open-decorative-cosmetics-for-make-up-illustration-vector.jpg',
      name: "Mackup Brush",
      price: 120,
    },
    {
      id: 14,
      image: 'https://static.vecteezy.com/system/resources/previews/000/481/559/non_2x/eyeliner-realistic-set-vector.jpg',
      name: "BB Cream",
      price: 120,
    },
  ]);

  const shippingCost = 10;
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white px-4 sm:px-8 lg:px-16">
      <h2 className="text-center font-semibold text-2xl py-6 mb-4">
        Billing Details
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-white w-full lg:w-1/2 p-6 border border-gray-200 rounded-sm shadow-sm mb-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-800">
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded shadow-sm border  border-gray-300 p-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Company Name
              </label>
              <input
                type="text"
                className="w-full rounded shadow-sm border  border-gray-300 p-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Street Address
              </label>
              <input
                type="text"
                className="w-full rounded shadow-sm border  border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Apartment, Floor, etc. (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded  shadow-sm border  border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Town/City
              </label>
              <input
                type="text"
                className="w-full rounded shadow-sm border  border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full rounded shadow-sm border  border-gray-300 p-2 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded shadow-sm border  border-gray-300 p-2 "
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">
                Save information for faster checkout
              </label>
            </div>
          </form>
        </div>

        <div className="bg-white w-full lg:w-1/2 p-6  mb-5 border border-gray-200 rounded-sm shadow-sm">
          <table className="w-full">
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="ml-4">{item.name}</span>
                  </td>
                  <td className="text-right">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total</span>
              <span>${(calculateSubtotal() + shippingCost).toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4">
            <div>
              <input type="radio" name="payment" className="mr-2" />
              <label>Bank Transfer</label>
            </div>
            <div className="mt-2">
              <input type="radio" name="payment" className="mr-2" />
              <label>Cash on Delivery</label>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full rounded shadow-sm border  border-gray-300 p-2"
            />
            <button className="bg-red-600 text-white font-medium px-4 py-2 rounded">
              Apply
            </button>
          </div>

          <button className="mt-6 bg-red-600 text-white font-medium w-full py-2 rounded">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}