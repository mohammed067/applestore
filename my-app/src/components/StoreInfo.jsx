import React, { useState,useEffect} from 'react'

function StoreInfo() {

  const [isopen,setisopen]=useState(false)

  useEffect(()=>{
    console.log(isopen)
   },[isopen])
  return (
    <div className='storeInfo   w-full flex  items-center bg-white]'  >
        <div className='store_left px-[13rem] py-4'>
            <p className='text-black'>shop</p>
            <h2 className='leading-[2rem] text-black'>Shop the latest</h2>
            <h2 className='leading-[2rem] text-black'>Mac</h2>
            <h2 className='leading-[2rem] text-black'>IPad</h2>
            <h2 className='leading-[2rem] text-black'>IPhone</h2>
            <h2 className='leading-[2rem] text-black'>Apple Watch</h2>
            <h2 className='leading-[2rem] text-black'>Accessories </h2>

        </div>

        <div className='store_middle px-[8rem]'>
              <p className='text-black'>Quick Links</p>
              <h2 className='leading-[2rem] text-black'>Find a Store</h2>
              <h2 className='leading-[2rem] text-black'>Order Status</h2>
              <h2 className='leading-[2rem] text-black'>Apple Trade In</h2>
              <h2 className='leading-[2rem] text-black'>Financing</h2>
        </div>
        <div className='store_right'>
              <p className='text-black'>Quick Links</p>
              <h2 className='leading-[2rem] text-black'>Find a Store</h2>
              <h2 className='leading-[2rem] text-black'>Order Status</h2>
              <h2 className='leading-[2rem] text-black'>Apple Trade In</h2>
              <h2 className='leading-[2rem] text-black'>Financing</h2>
        </div>
    </div>
  )
}

export default StoreInfo