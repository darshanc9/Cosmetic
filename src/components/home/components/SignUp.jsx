import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  fullname: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
}).required();

export default function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });      alert('Something went wrong Please Try again')

  const onSubmit = data => {
    console.log(data)
    if (data.fullname !== "" && data.email !== '' && data.password !== '') {
      alert("SignUp successfully")
    }else{
      alert('Something went wrong Please Try again')
    }
  };
console.log(errors.password)


  const navigate = useNavigate();
  return (
    <div >
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto flex flex-wrap items-center w-full">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 md:block hidden">
            <img src="https://img.freepik.com/free-photo/black-friday-decoration-with-gift-box-cart_23-2147695965.jpg" className='h-[593px]' alt="" />
          </div>
          <div class="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 mx-auto w-full">
            <h2 class="text-gray-900 text-3xl font-medium title-font py-2 whitespace-nowrap">Create an account</h2>
            <p className='pb-5'>Enter your details below</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="relative mb-4">
              <input type="text" id="fullname" name="fullname" placeholder='Name' class="w-full border-b border-gray-300 focus:border-indigo-500  text-base outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out" 
              {...register("fullname")}/>
            </div>
            <div class="relative mb-4">
              <input type="email" id="email" name="email" placeholder='Email or Phone Number' class="w-full border-b border-gray-300 focus:border-indigo-500  text-base outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out" 
              {...register("email")}/>
            </div>
            <div class="relative mb-4">
              <input type="password" id="password" name="password" placeholder='Password' class="w-full border-b border-gray-300 focus:border-indigo-500  text-base outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out" 
              {...register("password")}/>
            </div>
            <button class="text-white bg-red-500 border-0 py-2 px-10 my-3 focus:outline-none rounded text-base w-full" type='submit'>Create Account</button>
            <button class="text-black bg-white-500 border-2 py-2 px-8 focus:outline-none rounded text-base whitespace-nowrap mx-auto w-full" >Sign Up With Google</button>
            </form>
            <p class="text-sm text-gray-500 mt-3 text-center pt-4">Already have an account? <span className='font-semibold underline hover:text-black  cursor-pointer' onClick={() => navigate('/login')}>Log in</span></p>
          </div>
        </div>
      </section>
    </div>
  )
}
