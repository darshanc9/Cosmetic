import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function WishList() {
    const navigate = useNavigate();

    const handleShowDetails = (id) => {
        navigate(`/product/${id}`);
    };

    const products = [
        {
            id: 17,
            image: 'https://static.vecteezy.com/system/resources/previews/024/066/346/non_2x/black-lipstick-closed-and-open-decorative-cosmetics-for-make-up-illustration-vector.jpg',
            title: "Mat Lipstic",
            discount: "-15%",
            price: "$120",
            oldprice: "$135",
        },
        {
            id: 18,
            image: 'https://static.vecteezy.com/system/resources/previews/000/481/559/non_2x/eyeliner-realistic-set-vector.jpg',
            title: "Waterproof Liner",
            discount: "-12%",
            price: "$90",
            oldprice: "$105",
        },
        {
            id: 19,
            image: 'https://static.vecteezy.com/system/resources/previews/001/271/089/non_2x/nail-polish-bottle-vector.jpg',
            title: "Colorful Nailpolish",
            discount: "-10%",
            price: "$100",
            oldprice: "$110",
        },
        {
            id: 20,
            image: 'https://static.vecteezy.com/system/resources/previews/000/471/099/non_2x/realistic-makeup-frame-vector.jpg',
            title: "Lakme Branded Makeup",
            discount: "-50%",
            price: "$140",
            oldprice: "$190",
        },
    ];

    return (
        <div>
            <div>
                <section className="body-font bg-white">
                    <div className="container px-5 py-16 mx-auto">
                        <div className="flex justify-between pb-9 mt-5">
                            <p className=" text-3xl font-weight:500">Wishlist(4)</p>
                            <button className="border border-black py-3 px-8">Move All To Bag</button>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
                            {products.map((product) => (
                                <div key={product.id} >
                                    <div className="p-5 border shadow-md hover:shadow-lg transition-shadow">
                                        <div className="relative group">
                                            <div className="absolute ">
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
                                                <button className="flex items-center justify-center w-24px h-24px  text-black rounded-full hover:text-pink-600">
                                                    <RiDeleteBinLine className="w-5 h-5" />
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
                                            <span className="text-red-600" style={{ width: "36px", height: "24px" }}> {product.price}</span>
                                            <span className="text-gray-500 ml-3" style={{ width: "37px", height: "24px" }}><del>{product.oldprice}</del></span>
                                        </div>

                                        <div className="wrap flex 	justify-content: space-between text-wrap">
                                            <span className="text-yellow-400"><FaStar /></span>
                                            <span className="text-yellow-400"><FaStar /></span>
                                            <span className="text-yellow-400"><FaStar /></span>
                                            <span className="text-yellow-400"><FaStar /></span>
                                            <span className="text-yellow-400"><FaStar /></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}