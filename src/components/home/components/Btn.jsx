import { log } from 'debug/src/browser';
import React, { useState } from 'react'

export default function Btn() {
    const [data] = useState([
        {
            id: 1,
            name: 'hardip',
        },
        {
            id: 2,
            name: 'darshan',
        },
        {
            id: 3,
            name: 'dhruvil',
        }
    ]);

    const [cart, setcart] = useState([])
    console.log(cart)
    const [showData, setShowData] = useState(false);

    const handleClick = () => {
        setShowData(!showData);
    }

    return (
        <div className='py-10'>
            <button onClick={handleClick} className='py-2 px-5 bg-black text-white rounded-sm mx-auto flex'>Data</button>
            {
                showData && (
                    <ul className='text-center'>
                        {data.map(item => (
                            <li key={item.id}>{item.name}</li>

                        ))}
                    </ul>
                )}
        </div>
    )
}