import React from 'react'

export default function Profile() {
  return (
<div className='p-5 w-full'>
  <h1 className='text-red-500 text-xl mt-20 text-center font-semibold'>Edit Your Profile</h1>
  <div className='flex justify-center py-10'>
    <div className='pt-10 md:w-[870px] w-full flex justify-center items-center'>
      <div className='w-full'>
        <div className='md:flex md:gap-x-10 gap-y-5 md:gap-y-0'>
          <div className='w-full'>
            <label htmlFor="firstName" className='block'>First Name</label>
            <input 
              type="text" 
              id="firstName" 
              placeholder='Md' 
              className='w-full mt-2 ps-5 py-3 md:pr-28 border bg-gray-100 outline-none'
            />
          </div>
          <div className='w-full'>
            <label htmlFor="lastName" className='block'>Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              placeholder='Rimel' 
              className='w-full mt-2 ps-5 py-3 pr-28 border bg-gray-100 outline-none'
            />
          </div>
        </div>        
        <div className='md:flex md:gap-x-10 gap-y-5 mt-5 md:gap-y-0'>
          <div className='w-full'>
            <label htmlFor="email" className='block'>Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder='rimel1111@gmail.com' 
              className='w-full mt-2 ps-5 py-3 pr-28 border bg-gray-100 outline-none'
            />
          </div>
          <div className='w-full'>
            <label htmlFor="address" className='block'>Address</label>
            <input 
              type="text" 
              id="address" 
              placeholder='Kingston, 5236, United States' 
              className='w-full mt-2 ps-5 py-3 pr-28 border bg-gray-100 outline-none'
            />
          </div>
        </div>        
        <div className='mt-5'>
          <p className='text-lg'>Password Changes</p>
          <input 
            type="password" 
            id="currentPassword" 
            placeholder='Current Password' 
            className='w-full ps-5 py-3 my-4 border bg-gray-100 outline-none'
          />
          <input 
            type="password" 
            id="newPassword" 
            placeholder='New Password' 
            className='w-full ps-5 py-3 my-4 border bg-gray-100 outline-none'
          />
          <input 
            type="password" 
            id="confirmPassword" 
            placeholder='Confirm New Password' 
            className='w-full ps-5 py-3 my-4 border bg-gray-100 outline-none'
          />
        </div>
        <div className='flex gap-x-2 mx-auto justify-end mt-6 whitespace-nowrap'>
          <button className='border bg-white text-black py-2 px-9 rounded-sm text-sm md:text-base'>Cancel</button>
          <button className='border bg-red-500 text-white py-2 px-9 rounded-sm text-sm md:text-base'>Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
