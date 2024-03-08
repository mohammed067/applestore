import React from 'react'

function StickyHeader() {
  return (
    <>
     <div className=' h-[4rem]  z-40 items-center justify-around flex sticky top-0 backdrop-blur-md'>
        <h2 className="text-lg  font-medium ">iOS 17</h2>

        <div className='flex gap-4 items-center'>
          <p className='text-xs'>    Overview</p>
          <p className="text-gray-700 text-sm">All New Features (PDF)</p>
        </div>
     </div>
    </>
  )
}

export default StickyHeader