import React from 'react'

export default function NewArrivalProduct() {
  return (
    <div>
        <p className='font-bold text-center text-red-500'>Featured</p>
        <h4 className='text-2xl font-semibold text-center py-3'>New Arrival</h4>
    <div className='flex justify-center gap-7 pb-9'>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/002/285/631/non_2x/cosmetic-products-realistic-advertisement-poster-illustration-vector.jpg" className='w-[555px] h-[600px]' alt="" />
      </div>
      <div className=''>
        <div className='pb-8'>
        <img src="https://static.vecteezy.com/system/resources/previews/015/680/984/non_2x/gold-cosmetic-bottles-ad-banner-cosmetics-tubes-free-vector.jpg" className='w-[555px] h-[284px]'  alt="" />
        </div>
        <div className='flex gap-7'>
            <img src="https://static.vecteezy.com/system/resources/previews/002/123/376/non_2x/realistic-cosmetic-advertisement-editable-banner-on-purple-background-vector.jpg" className='w-[263.5px] h-[284px]' alt="" />
            <img src="https://static.vecteezy.com/system/resources/previews/001/849/681/non_2x/cosmetics-bottle-jars-luxury-cosmetics-packaging-template-design-free-vector.jpg" className='w-[263.5px] h-[284px]' alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}
