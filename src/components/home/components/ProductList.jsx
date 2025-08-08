import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { imgconfig } from "../../../Image/Image";

const products = [
  {
    id: '1',
    title: "Lipstick",
    price: "$749",
    img: imgconfig?.Lip,
    oldprice: "$120",
  },
  {
    id: '2',
    title: "Eye Liner",
    price: "$600",
    img: imgconfig?.Liner,
    oldprice: "$720",
  },
  {
    id: '3',
    title: "Nail Polish",
    price: "$110.00",
    img: imgconfig?.Nail,
    oldprice: "$120",
  },
  {
    id: '4',
    title: "Makeup",
    price: "$120",
    img: imgconfig?.Makeup,
    oldprice: "$150",
  },
];

export default function ProductList() {

const [cart, setCart] = useState([]);
console.log(cart)


  const navigate = useNavigate();

  const handleShowDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="text-gray-600 bg-white body-font">
      <div className="container px-5 pt-10 mx-auto">
        <span className="font-bold text-red-500">Today's</span>
        <h4 className="text-2xl font-semibold py-3">
          Explore Our Products
        </h4>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative group">
                <img
                  className="rounded w-full object-cover object-center bg-gray-100"
                  style={{ height: "250px" }}
                  src={product.img}
                  alt={`Product: ${product.title}`}
                />
                <div className="absolute top-5 right-2 flex flex-col items-center space-y-2">
                  <button className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full shadow-md hover:bg-gray-200">
                    <FaRegHeart className="w-4 h-4 hover:text-red-500" />
                  </button>
                  <button className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full shadow-md hover:bg-gray-200">
                    <FiEye className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full py-2 bg-black text-white text-center text-sm font-medium"
                  onClick={()=>setCart((prev)=>[...prev,product])}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <h2
                className="text-lg text-gray-900 font-medium mt-5 cursor-pointer"
                onClick={() => handleShowDetails(product.id)}
              >
                {product.title}
              </h2>
              <div className="">
                <span className="text-red-600 font-bold text-lg">
                  {product.price}
                </span>
                <span className="text-gray-500 ml-3 line-through">
                  {product.oldprice}
                </span>
              </div>
              <div className="flex space-x-1 mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <span key={index} className="text-yellow-400">
                      <FaStar />
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
            <button className="bg-red-500 text-white py-3 px-8 rounded-sm hover:bg-white hover:text-red-600 hover:border hover:border-red-500">View All Products</button>
          </div>
      </div>
    </section>
  );
}