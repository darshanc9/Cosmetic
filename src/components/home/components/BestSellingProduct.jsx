import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BestSellingProduct() {
  const navigate = useNavigate();

  const handleShowDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const products = [
    {
      id: '5',
      image:'https://static.vecteezy.com/system/resources/previews/022/936/900/non_2x/red-matte-lipstick-isolated-on-white-background-in-3d-illustration-vector.jpg',
      title: "Mat Lipstic",
      discount: "-15%",
      price:"$120",
      oldprice:"$135",
    },
    {
      id: '6',
      image:'https://static.vecteezy.com/system/resources/previews/011/977/283/non_2x/perfume-silhouette-black-and-white-icon-design-element-on-isolated-white-background-free-vector.jpg',
      title: "Perfume",
      discount: "-12%",
      price:"$90",
      oldprice:"$105",
    },
    {
      id: '7',
      image:'https://static.vecteezy.com/system/resources/previews/007/636/054/non_2x/mascara-icon-design-template-free-vector.jpg',
      title: "Mascara",
      discount: "-10%",
      price:"$100",
      oldprice:"$110",
    },
    {
      id: '8',
      image:'https://static.vecteezy.com/system/resources/previews/006/779/195/non_2x/shampoo-bottle-flat-illustration-clean-icon-design-element-on-isolated-white-background-free-vector.jpg',
      title: "Shampoo",
      discount: "-50%",
      price:"$140",
      oldprice:"$190",
    },
  ];

  return (
    <div>
      <section className="body-font bg-white">  
        <div className="container px-5 py-16 mx-auto">
        <div className="text-start px-4 py-5 text-3xl font-weight:500">Best Selling Products</div>
          <div className="flex flex-wrap justify-center">
            {products.map((product) => (
              <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="p-6 border rounded-md shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative group">
                    {/* Price Button */}
                    <div className="absolute top-2 left-2">
                      <button className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded shadow-md">
                        {product.discount}
                      </button>
                    </div>
                    {/* Image */}
                    <img
                      className="rounded w-full object-cover object-center bg-gray-100"
                      style={{ width: "270px", height: "250px" }}
                      src={product.image}
                      alt={product.title}
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
                      <button className="w-full py-2 bg-black text-white text-center text-sm font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <h2 className="text-lg text-gray-900 font-medium  mt-5 title-font cursor-pointer"
                   onClick={() => handleShowDetails(product.id)}>
                    {product.title}
                  </h2>

                  <div className="">
                    <span className="text-red-600"   style={{ width: "36px", height: "24px" }}> {product.price}</span>
                    <span  className="text-gray-500 ml-3" style={{ width: "37px", height: "24px" }}><del>{product.oldprice}</del></span>
                  </div>

                  <div className="wrap flex 	justify-content: space-between text-wrap">
                    <span className="text-yellow-400"><FaStar/></span>
                    <span className="text-yellow-400"><FaStar/></span>
                    <span className="text-yellow-400"><FaStar/></span>
                    <span className="text-yellow-400"><FaStar/></span>
                    <span className="text-yellow-400"><FaStar/></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}