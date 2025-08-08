import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
}).required();

export default function LogIn() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  // console.log(errors)

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 md:block hidden">
            <img src="https://img.freepik.com/free-photo/black-friday-decoration-with-gift-box-cart_23-2147695965.jpg" className='h-[593px]' alt="" />
          </div>
          <div class="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-3xl font-medium title-font py-2">Log in to Exclusive</h2>
            <p className='pb-5'>Enter your details below</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="relative mb-4">
              <input type="email" id="email" name="email" placeholder='Email or Phone Number' class="w-full border-b border-gray-300 focus:border-indigo-500  text-base outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out" 
              {...register("email")}/>
               <p>{errors.email?.message}</p>
            </div>
            <div class="relative mb-4">
              <input type="password" id="password" name="password" placeholder='Password' class="w-full border-b border-gray-300 focus:border-indigo-500  text-base outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out" 
              {...register("password")}/>
              <p>{errors.password?.message}</p>
            </div>
            <div className='flex justify-between'>
              <button class="text-white bg-red-500 border-0 py-2 px-10 my-3 focus:outline-none rounded text-lg whitespace-nowrap" type='submit'>Log In</button>
              <p className='text-red-500 my-auto cursor-pointer hover:text-black'>Forget Password?</p>
            </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}