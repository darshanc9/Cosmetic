import React from 'react'

export default function ProductCategory() {
    return (
        <div>
            <p className='font-bold text-red-500 text-center mt-16'>Categories</p>
            <h4 className='text-2xl font-semibold text-center py-3'>Browse By Category</h4>
            <div className='md:flex lg:flex md:justify-around md:w-full md:gap-0 mt-9 pb-9 grid-cols-3 grid w-fit mx-auto gap-3'>
                <div className='border py-3 px-2 rounded-sm w-fit hover:shadow-md'>
                    <img src="https://i.pinimg.com/originals/d0/7e/21/d07e214a25ba11acf173f8d2b50050af.png" className='w-[100px] sm:flex mx-auto' alt="" />
                    <span className='flex justify-center font-bold cursor-pointer'>Lipstick</span>
                </div>
                <div className='border py-3 px-2 rounded-sm w-fit hover:shadow-lg'>
                    <img src="https://images.vexels.com/media/users/3/140161/isolated/preview/9da81c3b796d6e1715a132664af3e083-eye-liner-3.png" className='w-[100px] sm:flex mx-auto' alt="" />
                    <span className='flex justify-center font-bold cursor-pointer'>EyeLiner</span>
                </div>
                <div className='border py-3 px-2 rounded-sm w-fit hover:shadow-lg'>
                    <img src="https://png.pngtree.com/png-clipart/20230221/original/pngtree-facial-wash-illustration-png-image_8961011.png" className='w-[100px] sm:flex mx-auto' alt="" />
                    <span className='flex justify-center font-bold cursor-pointer'>FaceWash</span>
                </div>
                <div className='border py-3 px-2 rounded-sm w-fit hover:shadow-lg'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-yVqTb2d-KEVfg4v-X2JjtW4tvR6wbeVCg&s" className='w-[100px] sm:flex mx-auto' alt="" />
                    <span className='flex justify-center font-bold cursor-pointer'>NailPolish</span>
                </div>

                <div className='border py-3 px-2 rounded-sm w-fit hover:shadow-lg'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwQtehARpZrXYTJp0HNflGFxLaJtXMy59IGx8Y0RzbPu9zriylTpNyaU9ubp2IRN7CHs&usqp=CAU" className='w-[100px] sm:flex mx-auto' alt="" />
                    <span className='flex justify-center font-bold cursor-pointer'>MakeUp</span>
                </div>
                <div className='border py-3 px-2 rounded-sm w-fit hover:shadow-lg'>
                    <img src="https://static.vecteezy.com/system/resources/previews/007/487/627/non_2x/perfume-silhouette-black-and-white-icon-design-element-on-isolated-white-background-free-vector.jpg" className='w-[100px] sm:flex mx-auto' alt="" />
                    <span className='flex justify-center font-bold cursor-pointer'>Perfume</span>
                </div>
            </div>
        </div>
    )
}
