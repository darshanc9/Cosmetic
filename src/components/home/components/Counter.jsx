import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className='border border-black w-fit mx-auto my-10 p-5'>
      <p className='text-center text-red-500 font-semibold'>Counter</p>
      <p className='text-center border w-fit mx-auto px-4 py-2 my-4 border-black'>
        {count}
      </p>
      <div className='flex justify-center gap-5'>
        <button className='border py-2 px-5 bg-black text-white text-xl' onClick={increment}>+</button>
        <button className='border py-2 px-5 bg-black text-white text-xl' onClick={decrement}>-</button>
      </div>
    </div>
  )
}