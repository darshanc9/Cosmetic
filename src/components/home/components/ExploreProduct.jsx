import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ExploreProduct() {
  const navigate = useNavigate();

  const handleShowDetails = (id) => {
    navigate(`/product/${id}`);
  };


  const products = [
    {
      id: 9,
      image:'https://static.vecteezy.com/system/resources/previews/014/576/928/non_2x/retro-perfume-bottle-mockup-realistic-style-vector.jpg',
      title: "Perfume",
      discount: "-15%",
      price:"$120",
      oldprice:"$135",
    },
    {
      id: 10,
      image:'https://static.vecteezy.com/system/resources/previews/005/160/748/non_2x/isolated-soap-bar-design-free-vector.jpg',
      title: "Soap",
      discount: "-12%",
      price:"$90",
      oldprice:"$105",
    },
    {
      id: 11,
      image:'https://static.vecteezy.com/system/resources/previews/001/271/089/non_2x/nail-polish-bottle-vector.jpg',
      title: "Nail Polish",
      discount: "-10%",
      price:"$100",
      oldprice:"$110",
    },
    {
      id: 12,
      image:'https://static.vecteezy.com/system/resources/previews/004/669/387/non_2x/makeup-mascara-tube-mascara-brush-icon-free-vector.jpg',
      title: "Mascara",
      discount: "-50%",
      price:"$140",
      oldprice:"$190",
    },
    {
        id: 13,
        image:'https://static.vecteezy.com/system/resources/previews/008/364/733/non_2x/realistic-plastic-shampoo-bottle-mockup-vector.jpg',
        title: "Shampoo",
        discount: "-50%",
        price:"$140",
        oldprice:"$190",
      },
      {
        id: 14,
        image:'https://static.vecteezy.com/system/resources/previews/000/620/239/non_2x/sunblock-body-lotions-vector.jpg',
        title: "Sun Screen",
        discount: "-50%",
        price:"$140",
        oldprice:"$190",
      },
      {
        id: 15,
        image:'https://static.vecteezy.com/system/resources/previews/002/513/179/large_2x/realistic-lipstick-icon-isolated-on-white-background-vector.jpg',
        title: "Lipstick",
        discount: "-50%",
        price:"$140",
        oldprice:"$190",
      },
      {
        id: 16,
        image:'https://static.vecteezy.com/system/resources/previews/051/180/585/non_2x/hydration-setting-spray-cartoon-illustration-vector.jpg',
        title: "Hair Oil",
        discount: "-50%",
        price:"$140",
        oldprice:"$190",
      },
  ];

  return (
    <div>
      <section className="body-font bg-white">  
        <div className="container px-5 py-16 mx-auto">
        <div className="text-start px-4 py-5 text-3xl font-weight:500">Explore Our Products</div>
          <div className="flex flex-wrap justify-center">
            {products.map((product) => (
              <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4 ">
                <div className="p-6 border rounded-md shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative group">
                    <div className="absolute top-2 left-2">
                      <button className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded shadow-md">
                        {product.discount}
                      </button>
                    </div>
                    <img
                      className="rounded w-full object-cover object-center bg-gray-100"
                      style={{ width: "270px", height: "250px" }}
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="absolute top-5 right-2 flex flex-col items-center space-y-2">
                      <button className="flex items-center justify-center p-1 w-24px h-24px bg-white text-black rounded-full shadow-md hover:bg-gray-200">
                        <FaRegHeart className="w-5 h-5 hover:text-red-500" />
                      </button>
                      <button className="flex items-center justify-center p-1  w-24px h-24px bg-white text-black rounded-full shadow-md hover:bg-gray-200">
                        <FiEye className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-full py-2 bg-black text-white text-center text-sm font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <h2 className="text-lg text-gray-900 font-medium  mt-5 title-font cursor-pointer"
                      onClick={() => handleShowDetails(product.id)}
                      >
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
          <div className="flex justify-center mt-10">
            <button className="bg-red-500 text-white py-3 px-8 rounded-sm hover:bg-white hover:text-red-600 hover:border hover:border-red-500">View All Products</button>
          </div>
        </div>
      </section>
    </div>
  );
}