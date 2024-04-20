import React from 'react'
import Image from "next/image";

import food1 from "../pics/food1.png"

function page() {
  return (
    <div className='mt-[10vh]'>
        <div className='flex flex-row justify-end content-center gap-10 mr-[5vh]'>
            <div className='px-3 py-1 bg-[#8EC68F] rounded-md'>Edit</div>
            <div className='px-3 py-1 bg-[#8EC68F] rounded-md'>Add</div>
        </div>

        <div className='flex flex-row justify-center content-center'>
            <div className='flex flex-col h-[60vh] w-[50vh] gap-2 text-[0.8rem] p-3 bg-[#D9D9D9] rounded-md'>
                <Image src={food1} width={300} height={300}/>
                <div>
                    <div className='font-bold'>Leftover Rice</div>
                    <div className='font-bold'>15 plates</div>
                </div>
                <div>
                    <div>Leftover rice (past it's prime)</div>
                    <div>Price per item : ₹1</div>
                </div>
                <div>
                    <div>Created: 2022-09-15</div>
                    <div>Expiry: 2022-10-10</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
