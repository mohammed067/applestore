import React, {  useEffect, useState } from 'react'
import appleIcon from '../images/appleIcon.png'
import StoreInfo from './StoreInfo'
import {FaBars,  FaTimes} from "react-icons/fa"
 //import {IoIosMenu} from "react-icons/fa"
import MacInfo from './MacInfo'
import Information from './information'




function Navbar() {
  const  [isopen,setisopen]=useState(false)
  
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  

    
      
  


   
  const open1=()=>{
    setisopen(1)
   
  }



 
   return (
    
      <div id='navbar' className={`py-4  w-full flex ${isopen? "bg-white":""} items-center top-[2rem] lg:justify-center gap-4 md:px-10 text-white text-[14px]  w-full  justify-between  `}>
         <div className='bg-transparent '>
            <img className=' bg-transparent min-w-max h-[20px]  ' alt='/' src={appleIcon} />
        </div> 


         {/* menu */}
         <div  className="bg-transparent">
         <ul className={` hidden md:flex  z-50  ${isopen===1 ||  isopen===2 ||  isopen===3 ||  isopen===4 ||  isopen===5 ||  isopen===6 ||  isopen===7 ||  isopen===8 ||  isopen===9 ||  isopen===10 ||  isopen===11 ? "bg-transparent":""} `}>
            <a href='#Home' className='bg-transparent px-2  font-semibold' onMouseEnter={open1}    > <li className="text-[#818799] bg-transparent text-sm min-w-max ">Store</li></a>
            <a href='#about' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(2)} > <li className="text-[#818799] text-sm bg-transparent">Mac</li></a>
            <a href='#skills' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(3)} > <li className="text-[#818799] text-sm bg-transparent">ipad</li></a>
            <a href='#Projects' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(4)} ><li className="text-[#818799] text-sm bg-transparent">iphone</li></a>
            <a href='#Contact  ' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(5)} > <li className="text-[#818799] text-sm bg-transparent"> watch</li></a>
            <a href='#Contact' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(6)} > <li className="text-[#818799] text-sm bg-transparent"> Vision</li></a>
            <a href='#Contact' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(7)} > <li className="text-[#818799] text-sm bg-transparent"> Airpods</li></a>
            <a href='#Contact' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(8)} > <li className="text-[#818799] text-sm bg-transparent min-w-max"> Tv & Home</li></a>
            <a href='#Contact' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(9)} > <li className="text-[#818799] text-sm bg-transparent"> Entertainment</li></a>

            <a href='#Contact' className='bg-transparent px-2 font-semibold' onMouseEnter={()=>setisopen(10)} > <li className="text-[#818799] text-sm bg-transparent"> Accessories</li></a>

            <a href='#Contact' className='bg-transparent px-2 font-semibold' onClick={()=>setisopen(11)} > <li className="text-[#818799] text-sm bg-transparent"> support</li></a>
         </ul>
         </div>
        

          {/* Mobile menu */}
       <ul
        className={
          !nav
            ? ' absolute -translate-y-full duration-300 ease-in top-0 left-0 w-full h-screen flex flex-col justify-center items-center'
            : 'absolute translate-y-0 top-0 left-0 w-full h-screen duration-300 ease-in bg-[#ffffff] flex flex-col justify-center items-center lg:hidden'
        }
      >
        <li className=' py-2 text-4xl text-black bg-[#ffffff]'>
          Mac
        
        </li>
        <li className='py-2 text-4xl text-black bg-[#ffffff]'>
          {' '}
      
            ipad
        
        </li>
        <li className='py-2 text-4xl text-black bg-[#ffffff]'>
          {' '}
         
            Iphone
        </li>
        <li className='py-2 text-4xl text-black bg-[#ffffff]'>
          {' '}
        
            Watch
        
        </li>
        <li className='py-2 text-4xl text-black bg-[#ffffff]'>
          {' '}
     
            Vision
       
        </li>

        <li className=' text-4xl text-black bg-[#ffffff]'>
          {' '}
     
            Airpods
       
        </li>

        <li className='py-2 text-4xl text-black bg-[#ffffff]'>
          {' '}
     
            TV & Home
       
        </li>

        <li className='py-2 text-4xl text-black bg-[#ffffff]'>
          {' '}
     
            Accessories
       
        </li>

        <li  className='py-2 text-4xl text-black bg-[#ffffff]'>
          {' '}
     
            Support
       
        </li>
      </ul>


        
         <div  className=" flex items-center bg-transparent" >
            <div className='icons bg-transparent'>
               <ul className='md:flex'>
                
                 <svg onClick={()=>setisopen(12)} className='h-[20px] bg-transparent' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                     <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                  </svg>
                 
               </ul>
            </div>

          
            <div onClick={handleClick } className='z-20  md:hidden w-8 '>
                {!nav ? <FaBars className='text-black h-5 w-6'/>:<FaTimes  className='text-black h-5 w-6 bg-[#ffffff]'/>}
           </div>
               

                
        </div>
        <div className={`absolute w-[100vw] transition-all duration-300  ${isopen===1 || isopen===2 ||  isopen===3 ||  isopen===4 ||  isopen===5 ||  isopen===6 ||  isopen===7||  isopen===8 ||  isopen===9 ||  isopen===10 ||  isopen===11 ||  isopen===12?"z-50 translate-y-[8.2rem]":"-translate-y-full"}` } onMouseLeave={()=>setisopen(false)}>
            <Information val={isopen}/>
         </div>

       

        {/* <div className={`absolute w-[100vw] transition-all duration-300 ${isopen===2?"z-50 translate-y-[9rem]":"-translate-y-52 "}` } onMouseEnter={()=>setisopen(2)}  onMouseLeave={()=>setisopen(false)}>
            <MacInfo />
         </div>
    */}
         
         <div className={`${isopen===1 |isopen===2 || isopen===3 || isopen===4 || isopen===5 ?"  w-[100vw] left-0 z-[50rem] fixed top-[7rem] h-[100vh] backdrop-blur-2xl":"hidden"}`}>
            
         </div>
        
       
   
      </div>
     
   )
}

export default Navbar