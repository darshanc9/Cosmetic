import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { PiRecycleLight } from "react-icons/pi";
import { imgconfig } from "../../../Image/Image";

export default function ProductDetail() {

    
    const Product = [
        {
            id: '1',
            image: imgconfig?.Lipstick,
            title: "Mat Lipstick",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.Lip1,
            img2: imgconfig?.Lip2,
            img3: imgconfig?.Lip4,
        },

        {
            id: '2',
            image: imgconfig?.Eye,
            title: "Eye Liner",
            price: "$90",
            category: "cloth",
            img1: imgconfig?.eye1,
            img2: imgconfig?.eye2,
            img3: imgconfig?.eye3,

        },

        {
            id: '3',
            image: imgconfig?.nail,
            title: "Nailpolish",
            price: "$100",
            category: "furniture",
            img1: imgconfig?.nail1,
            img2: imgconfig?.nail2,
            img3: imgconfig?.nail3,
        },

        {
            id: '4',
            image: imgconfig?.make,
            title: "Luxury Makeup",
            price: "$140",
            category: "cosmetic",
            img1: imgconfig?.makeup1,
            img2: imgconfig?.makeup2,
            img3: imgconfig?.makeup3,
        },

        {
            id: "5",
            image: imgconfig?.Lip,
            title: "Lipstick",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.Lip1,
            img2: imgconfig?.Lip2,
            img3: imgconfig?.Lip3,
        },

        {
            id: "6",
            image: imgconfig?.perfume,
            title: "Perfume",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.per1,
            img2: imgconfig?.per2,
            img3: imgconfig?.per3,
        },
        {
            id: "7",
            image: imgconfig?.mascara,
            title: "Mascara",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.msc1,
            img2: imgconfig?.msc2,
            img3: imgconfig?.msc3,
        },

        {
            id: "8",
            image: imgconfig?.shampoo,
            title: "Shampoo",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.smp1,
            img2: imgconfig?.smp2,
            img3: imgconfig?.smp3,
        },

        {
            id: "9",
            image: imgconfig?.perfume,
            title: "Perfume",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.per1,
            img2: imgconfig?.per2,
            img3: imgconfig?.per3,
        },

        {
            id: "10",
            image: imgconfig?.soap,
            title: "Kitchen Beautiful Furniture",
            price: "$120",
            category: "furniture",
            img1: imgconfig?.sp1,
            img2: imgconfig?.sp2,
            img3: imgconfig?.sp3,
        },

        {
            id: "11",
            image: imgconfig?.nail,
            title: "Colorful and Waterproof Eye Shadow",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.nail1,
            img2: imgconfig?.nail2,
            img3: imgconfig?.nail3,
        },

        {
            id: "12",
            image: imgconfig?.mascara,
            title: "Beautiful Baby Garment",
            price: "$120",
            category: "fashion",
            img1: imgconfig?.msc1,
            img2: imgconfig?.msc2,
            img3: imgconfig?.msc3,
        },

        {
            id: "13",
            image: imgconfig?.shampoo,
            title: "Luxury Watch For Man",
            price: "$120",
            category: "accessories",
            img1: imgconfig?.smp1,
            img2: imgconfig?.smp2,
            img3: imgconfig?.smp3,
        },

        {
            id: "14",
            image: imgconfig?.snc,
            title: "Branded Skin BB Cream",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.snc1,
            img2: imgconfig?.snc2,
            img3: imgconfig?.snc3,
        },

        {
            id: "15",
            image: imgconfig?.Lipstick,
            title: "Branded Mascara",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.Lip1,
            img2: imgconfig?.Lip2,
            img3: imgconfig?.Lip3,
        },

        {
            id: "16",
            image: imgconfig?.hr,
            title: "Formal Man Cloth",
            price: "$140",
            category: "cloth",
            img1: imgconfig?.hr1,
            img2: imgconfig?.hr2,
            img3: imgconfig?.hr3,
        },
        {
            id: '17',
            image: imgconfig?.Lipstick,
            title: "Mat Lipstick",
            price: "$120",
            category: "cosmetic",
            img1: imgconfig?.Lip1,
            img2: imgconfig?.Lip2,
            img3: imgconfig?.Lip4,
        },

        {
            id: '18',
            image: imgconfig?.Eye,
            title: "Eye Liner",
            price: "$90",
            category: "cloth",
            img1: imgconfig?.eye1,
            img2: imgconfig?.eye2,
            img3: imgconfig?.eye3,

        },

        {
            id: '19',
            image: imgconfig?.nail,
            title: "Nailpolish",
            price: "$100",
            category: "furniture",
            img1: imgconfig?.nail1,
            img2: imgconfig?.nail2,
            img3: imgconfig?.nail3,
        },

        {
            id: '20',
            image: imgconfig?.make,
            title: "Luxury Makeup",
            price: "$140",
            category: "cosmetic",
            img1: imgconfig?.makeup1,
            img2: imgconfig?.makeup2,
            img3: imgconfig?.makeup3,
        },

    ];

    const { id } = useParams();
    const singleProduct = Product.find((item) => item.id === id);
    const [mainImage, setMainImage] = useState(singleProduct?.image);

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="grid gap-4  pt-16 lg:grid-cols-5">
                        <div className="order-last  flex justify-between lg:order-none lg:flex-col">
                            {[
                                singleProduct?.image,
                                singleProduct?.img1,
                                singleProduct?.img2,
                                singleProduct?.img3,
                            ]
                                .filter(Boolean)
                                .map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setMainImage(img)}
                                        className="cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                                    >
                                        <img
                                            src={img}
                                            alt={`Product thumbnail ${index + 1}`}
                                            className="h-[110px] w-[170px] object-cover object-center "
                                        />
                                    </div>
                                ))}
                        </div>

                        <div className="relative flex overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                            <img
                                src={mainImage}
                                alt="Main Product"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="md:py-8">
                        <div className="mb-2 pt-16 md:mb-3">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                {singleProduct?.title}
                            </h2>
                        </div>

                        <div className="mb-2 flex items-center gap-3 md:mb-4">
                            <div className="flex items-center text-xl gap-1 rounded-full">
                                {[...Array(4)].map((_, index) => (
                                    <span key={index} className="text-yellow-400">
                                        <FaStar />
                                    </span>
                                ))}
                                <span className="text-gray-500">
                                    <FaStar />
                                </span>
                            </div>
                            <span className="text-sm text-gray-500">(150 Reviews)</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-indigo-400">In Stock</span>
                        </div>

                        <div className="flex items-end gap-2 md:mb-5">
                            <span className="text-xl font-semibold text-gray-800 md:text-2xl">
                                {singleProduct?.price}
                            </span>
                        </div>

                        <div className="text-sm text-gray-700 py-3 pb-5 border-b-2 border-gray-400">
                            High-quality product with exceptional features and details to make
                            it stand out.
                        </div>


                        <div className="container flex  mx-auto mt-5 max-w-3xl ">
                            <p className="text-lg">Colors:</p>
                            <fieldset aria-label="Choose a color" className="">
                                <div className="flex items-center mt-1.5 ml-2 space-x-3 ">
                                    <label
                                        aria-label="White"
                                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                                    >
                                        <input
                                            type="radio"
                                            name="color-choice"
                                            defaultValue="White"
                                            className="sr-only"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="size-5 rounded-full border border-black/10 bg-white"
                                        />
                                    </label>
                                    <label
                                        aria-label="Gray"
                                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                                    >
                                        <input
                                            type="radio"
                                            name="color-choice"
                                            defaultValue="Gray"
                                            className="sr-only"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="size-5 rounded-full border border-black/10 bg-gray-200"
                                        />
                                    </label>
                                    <label
                                        aria-label="Black"
                                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none"
                                    >
                                        <input
                                            type="radio"
                                            name="color-choice"
                                            defaultValue="Black"
                                            className="sr-only"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="size-5 rounded-full border border-black/10 bg-gray-900"
                                        />
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <div className="flex mt-5 gap-x-5">
                            <button
                                type="button"
                                className="py-2 px-10 rounded-md border bg-red-500 text-center text-sm font-semibold text-white transition duration-100 hover:bg-white hover:text-red-600 hover:border hover:border-red-500"
                            >
                                Buy Now
                            </button>
                            <div className="border border-black rounded-md px-2 py-2 hover:border-red-600 hover:text-red-600">
                                <IoMdHeartEmpty className="text-2xl" />
                            </div>
                        </div>

                        <div className="flex flex-col border border-black w-fit p-8 rounded-sm mt-4 gap-y-3 align-bottom">
                            <div className="flex gap-x-3">
                                <TbTruckDelivery className="text-3xl flex my-auto" />
                                <div>
                                    <p className="font-semibold">Free Delivery</p>
                                    <p className="text-sm underline cursor-pointer">
                                        Enter your postal code for delivery Availability
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-3  border-black mt-2">
                                <PiRecycleLight className="text-3xl flex my-auto mt-2" />
                                <div>
                                    <p className="font-semibold">Return Delivery</p>
                                    <p className="text-sm">
                                        Free 30 Days Delivery Returns.
                                        <span className="underline cursor-pointer">Details</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}