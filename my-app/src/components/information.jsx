import React, { useState } from 'react'

function Information({val}) {
    // const [isopen,setisopen]=useState(value)




  return (
    <>
     {/* Store info start */}\
     <div className={` ${val===1?" z-10 absolute    -top-28 w-full flex  ":"hidden h-fit"} `}  >


     <div className='storeInfo h-max w-full flex justify-center px-[4rem]  items-center bg-white  '    >
        <div className='store_left h-full  py-4 '>
            <p className='text-black '>shop</p>
            <div className='leading-[4rem]'>
            <h2 className=' text-black text-2xl font-bold'>Shop the latest</h2>
            <h2 className=' text-black text-2xl font-bold'>Mac</h2>
            <h2 className=' text-black text-2xl font-bold'>IPad</h2>
            <h2 className=' text-black text-2xl font-bold'>IPhone</h2>
            <h2 className='leading-[2rem] text-black text-2xl font-bold'>Apple Watch</h2>
            <h2 className='leading-[2rem] text-black text-2xl font-bold'>Accessories </h2>
            </div>
           

        </div>

        <div className='store_middle px-[8rem]'>
              <p className='text-black'>Quick Links</p>
              <h2 className='leading-[2rem]  text-black'>Find a Store</h2>
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

     </div>

    

    {/* store info  End*/}


    {/* Mac info Start */}
    <div className={` ${val===2?" z-10 absolute   -top-28 w-full flex  ":"hidden h-fit"} `}  >

    <div className='storeInfo w-full flex justify-center  items-center bg-white  '  >
       
       <div className='store_left    py-4'>
       <p className='text-black '>Explore Mac</p>
       <h2 className='leading-[2.5rem]  mt-3 text-2xl font-bold text-black'>Explore All Mac</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Mac</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>IPad</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>IPhone</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Watch</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Accessories </h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>IPad</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>IPhone</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Watch</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold' >Accessories </h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>IPad</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>IPhone</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Watch</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Accessories </h2>
       

   </div>

   <div className='store_middle px-[8rem]'>
         <p className='text-black -mt-[18.4rem]'>Quick Links</p>
         <h2 className='leading-[2rem] text-black mt-3 font-semibold'>Find a Store</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Order Status</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Apple Trade In</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Financing</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>College Student Offer</h2>
   </div>
   <div className='store_right'>
         <p className='text-black -mt-[18.4rem]'>Shop Special Stores</p>
         <h2 className='leading-[2rem] text-black font-semibold'>Certified Refurbished</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Education</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Business</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Veterans and Military</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Government</h2>
   </div>
           
    </div>
       
</div>
{/* Mac info End */}

 {/* ipad info Start */}

 <div className={`${val===3?" z-10 absolute  -top-28 w-full flex  ":"hidden h-fit"} `}  >

    <div className='storeInfo w-full flex justify-center  items-center bg-white  '  >
       
       <div className='store_left    py-4'>
       <p className='text-black '>Explore iPad</p>
       <h2 className='leading-[2.5rem]  mt-3 text-2xl font-bold text-black'>Explore All iPad</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>iPad Pro</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>iPad Air</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>iPad</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>iPad mini</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Pencil </h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Keyboards</h2>
       <p className='text-black leading-[2.3rem]'>Compare iPad</p>
       <p className='text-black leading-[2.3rem]'>Why iPad</p>
      
       

   </div>

   <div className='store_middle px-[8rem]'>
         <p className='text-black -mt-[12rem] '>Quick Links</p>
         <h2 className='leading-[2rem] text-black   font-semibold'>Find a Store</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Order Status</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Apple Trade In</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Financing</h2>
   </div>
   <div className='store_right'>
         <p className='text-black -mt-[12rem]'>Quick Links</p>
         <h2 className='leading-[2rem] text-black font-semibold  '>Find a Store</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Order Status</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Apple Trade In</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Financing</h2>
   </div>
           
    </div>
       
</div>

{/* ipad info End */}

 {/* iPhone info Start */}

 <div className={`${val===4?" z-10 absolute  -top-28 w-full flex  ":"hidden h-fit"} `}  >

    <div className='storeInfo w-full flex justify-center  items-center bg-white  '  >
       
       <div className='store_left    py-4'>
       <p className='text-black '>Explore iPad</p>
       <h2 className='leading-[2.5rem]  mt-3 text-2xl font-bold text-black'>Explore All iPhone</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>iPad 15 Pro</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>iPhone 15</h2>
       
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>iPhone 14</h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>IPhone 13 </h2>
       <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>iPhone SE</h2>
       <p className='text-black leading-[2.3rem]'>Compare iPhone</p>
       <p className='text-black leading-[2.3rem]'>Switch from Android</p>
      
       

   </div>

   <div className='store_middle px-[8rem]'>
         <p className='text-black -mt-[9rem] '>Shop iPhone</p>
         <h2 className='leading-[2rem] text-black   font-semibold mt-[3rem]'>Shop iPhone</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>iPhone Accessories</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Apple Trade In</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Financing</h2>
   </div>
   <div className='store_right'>
         <p className='text-black -mt-[4rem]'>More from iPhone</p>
         <h2 className='leading-[2rem] text-black font-semibold  mt-5'>iPhone Support</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>AppleCare+ for iPhone</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>iOS 17</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Apps by Apple</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>iPhone Privacy</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>iCloud+</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Wallet,Pay,Card</h2>
         <h2 className='leading-[2rem] text-black font-semibold'>Siri</h2>
   </div>
           
    </div>
       
</div>

{/* iPhone info End */}
    
    {/* Watch info Start */}

 <div className={`${val===5?" z-10 absolute  -top-28 w-full flex  ":"hidden h-fit"} `}  >

<div className='storeInfo w-full flex justify-center  items-center bg-white  '  >
   
   <div className='store_left    py-4'>
   <p className='text-black '>Explore Watch</p>
   <h2 className='leading-[2.5rem]  mt-3 text-2xl font-bold text-black'>Explore All Apple Watch</h2>
   <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Watch Series 9</h2>
   <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Watch Ultra 2</h2>
   
   <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Watch SE</h2>
   <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Watch Nike </h2>
   <h2 className='leading-[2.5rem] text-black text-2xl font-bold'>Apple Watch Hermes</h2>
   <p className='text-black leading-[2.3rem]'>Compare Watch</p>
   <p className='text-black leading-[2.3rem]'>Why Apple Watch</p>
  
   

</div>

<div className='store_middle px-[8rem]'>
     <p className='text-black -mt-[4rem] '>Shop Watch</p>
     <h2 className='leading-[2rem] text-black   font-semibold mt-[3rem]'>Shop Apple Watch</h2>
     <h2 className='leading-[2rem] text-black font-semibold'>Apple Watch Studio</h2>
     <h2 className='leading-[2rem] text-black font-semibold'>Apple Watch Bands</h2> 
     <h2 className='leading-[2rem] text-black font-semibold'>Apple Watch Accessories</h2>
     <h2 className='leading-[2rem] text-black font-semibold'>Apple Trade In</h2> 
     <h2 className='leading-[2rem] text-black font-semibold'>Financing</h2>
</div>
<div className='store_right'>
     <p className='text-black -mt-[4rem]'>More from Watch</p>
     <h2 className='leading-[2rem] text-black font-semibold  mt-5'>Apple Watch Support</h2>
     <h2 className='leading-[2rem] text-black font-semibold'>AppleCare+ </h2>
     <h2 className='leading-[2rem] text-black font-semibold'>watchOS 10</h2>
     <h2 className='leading-[2rem] text-black font-semibold'>Apps by Apple</h2>
     <h2 className='leading-[2rem] text-black font-semibold'>Apple Fitness+</h2>
   
</div>
       
</div>
   
</div>

{/* Watch info End */}


   {/*searchComponentStart */}
        
   <div className={`${val===12?" z-10 absolute left-0 -top-28 w-full flex  ":"hidden h-fit"} `}  >

<div className='storeInfo w-full flex  flex-col  justify-center px-[19rem] bg-white  '  >
   
   <div className='store_left flex mt-[3rem] -mx-[2rem]  py-4'>
      

            <ul className='md:flex items-center ' >
                
                <svg  className='h-[20px] bg-transparent' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                 </svg>
                
              </ul>


              <input type='text' className='outline-none text-2xl  font-bold text-black' placeholder='Search apple.com'/>
  
   

   </div>


<div className='store_right mt-[7rem]'>
     <p className='text-black -mt-[4rem]'>Quick Links</p>

     <div className='flex gap-3    items-center mt-[2rem]'>
     <img className='w-[1rem]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3YsQnDMBBA0Z8sEJO0tz+eII3JACkcu3DnYRIM2iCFdcd/oFbwOSSEQJIkSerUCDyBG8nNwBd4Z48JYG8xR9SdxKJqzMeYjifzILGyMYsxlSdzAda24ZlrBoZ/Qq7t4KUPOUtUOPRR4RoOIzpR4vEYFZ7zYUQnSkzisFX5fHgBU/YISZIkkcsPwUZ+ckKpJNQAAAAASUVORK5CYII="></img>
     <h2 className=' text-black text-center font-semibold '>Find a Store</h2>
     </div>

     <div className='flex gap-3    items-center'>
     <img className='w-[1rem]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3YsQnDMBBA0Z8sEJO0tz+eII3JACkcu3DnYRIM2iCFdcd/oFbwOSSEQJIkSerUCDyBG8nNwBd4Z48JYG8xR9SdxKJqzMeYjifzILGyMYsxlSdzAda24ZlrBoZ/Qq7t4KUPOUtUOPRR4RoOIzpR4vEYFZ7zYUQnSkzisFX5fHgBU/YISZIkkcsPwUZ+ckKpJNQAAAAASUVORK5CYII="></img>
     <h2 className=' text-black text-center font-semibold '>Apple vision pro </h2>
     </div>

     <div className='flex gap-3    items-center'>
     <img className='w-[1rem]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3YsQnDMBBA0Z8sEJO0tz+eII3JACkcu3DnYRIM2iCFdcd/oFbwOSSEQJIkSerUCDyBG8nNwBd4Z48JYG8xR9SdxKJqzMeYjifzILGyMYsxlSdzAda24ZlrBoZ/Qq7t4KUPOUtUOPRR4RoOIzpR4vEYFZ7zYUQnSkzisFX5fHgBU/YISZIkkcsPwUZ+ckKpJNQAAAAASUVORK5CYII="></img>
     <h2 className=' text-black text-center font-semibold '>Air pods</h2>
     </div>

     <div className='flex gap-3    items-center'>
     <img className='w-[1rem]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3YsQnDMBBA0Z8sEJO0tz+eII3JACkcu3DnYRIM2iCFdcd/oFbwOSSEQJIkSerUCDyBG8nNwBd4Z48JYG8xR9SdxKJqzMeYjifzILGyMYsxlSdzAda24ZlrBoZ/Qq7t4KUPOUtUOPRR4RoOIzpR4vEYFZ7zYUQnSkzisFX5fHgBU/YISZIkkcsPwUZ+ckKpJNQAAAAASUVORK5CYII="></img>
     <h2 className=' text-black text-center font-semibold '>Air tag</h2>
     </div>

     <div className='flex gap-3    items-center'>
     <img className='w-[1rem]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3YsQnDMBBA0Z8sEJO0tz+eII3JACkcu3DnYRIM2iCFdcd/oFbwOSSEQJIkSerUCDyBG8nNwBd4Z48JYG8xR9SdxKJqzMeYjifzILGyMYsxlSdzAda24ZlrBoZ/Qq7t4KUPOUtUOPRR4RoOIzpR4vEYFZ7zYUQnSkzisFX5fHgBU/YISZIkkcsPwUZ+ckKpJNQAAAAASUVORK5CYII="></img>
     <h2 className=' text-black text-center font-semibold '>Apple trade In</h2>
     </div>
     <div className='mt-[3rem]'>

     </div>

     
   
   
</div>
       
</div>
   
</div>

   {/*searchComponentEnd */}

    </>
  )
}

export default Information