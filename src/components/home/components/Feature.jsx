import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";

export default function Feature() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div class="p-4 md:w-1/3 flex mx-auto flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0 text-3xl">
                                <TbTruckDelivery />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">FREE AND FAST DELIVERY</h2>
                                <p class="leading-relaxed text-base">Free delivery for all orders over $140</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex mx-auto flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0 text-3xl">
                                <RiCustomerService2Line />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">24/7 CUSTOMER SERVICE</h2>
                                <p class="leading-relaxed text-base">Friendly 24/7 cutomer support</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex mx-auto flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0 text-3xl">
                                <MdOutlinePrivacyTip />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">MONEY BACK GURANTEE</h2>
                                <p class="leading-relaxed text-base">We return money within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
