import React from 'react'
import callingImage from '../images/callingImage.png'
import journalImage from '../images/journalImage.png'
import itemsImage from '../images/itemsImage.png'
import avatarImage from '../images/avatarImage.png'
import mobileCall from '../images/mobileCall.png'
import numberImage from '../images/numberImage.png'
import clock from '../images/clockImage.png'
import IosSection from './IosSection'


function PhoneSection() {
    return (

        <div className='w-full md:p-[2rem]'> 

            <div className="my-[44rem] md:flex h-[90vh] md:h-[70vh] xl:h-[90vh] overflow-hidden md:overflow-y-hidden md:rounded-2xl bg-white">
                <div className='md:w-[40%] p-[2rem] justify-between items-center '>
                    <h2 className='text-blue-400   font-medium'>Personalized your phone calls</h2>
                    <p className='md:my-[13rem] font-medium text-2xl md:text-4xl md:font-bold'>Customize what people see when you call</p>
                </div>
                <div className="grid  gap-x-3.5 md:w-[60%]  overflow-x-hidden grid-cols-5 overflow-hidden grid-rows-4 max-h-[180vh] w-full ">
                    <img className="-mx-[8rem] my-[9rem] min-w-[13rem] lg:min-w-[14rem] lg:-mx-[rem]  sm:-mx-[6.2rem] z-20 md:min-w-[10rem] md:my-[12rem] md:-mx-[8rem]  xl:min-w-[17rem] xl:-z-2  xl:-my-[4rem] xl:mx-[10rem] xl:h-[27rem]   col-start-1 row-start-1 row-span-2 md:hidden lg:flex lg:col-start-2 " src={itemsImage} alt='image' />

                    <img className='col-start-2 row-start-1  my-[5rem] mx-[1rem] min-w-[13rem]     md:min-w-[16rem] md:-mx-[3rem] md:-my-[8rem]  xl:min-w-[10rem] xl:h-[29rem] xl:-my-[4rem] xl:mx-[2rem] xl:flex xl:col-start-1 col-span-2 ' src={mobileCall} alt='image' />
                    <img className='col-start-4 col-span- row-start-1 mx-[7rem] my-[9rem] min-w-[12rem]   md:min-w-[10rem] md:-my-[6rem]   lg:flex  xl:-my-[2rem] xl:min-w-[14rem] xl:mx-[9rem] ' src={journalImage} alt='image' />
                    <img className='col-start-1  row-start-2 -mx-[9rem] my-[11rem] min-w-[13rem]   md:min-w-[12rem]  xl:my-[18rem] xl:min-w-[14rem] xl:mx-[2rem] md:hidden  lg:flex ' src={journalImage} alt='image' />

                    <img className='col-start-3 row-start-2  min-w-[13rem] -mx-[3rem] mt-[4rem] md:min-w-[16rem] md:-mx-[8rem] md:my-[15rem] xl:my-[10rem] xl:mx-[1rem] xl:min-w-20rem lg:flex  ' src={avatarImage} alt='image' />
                    <img className='col-span-5  row-start-2 mx-[6rem] my-[11rem] min-w-[8rem]   md:min-w-[12rem]  xl:my-[19rem] xl:mx-[10rem]  lg:flex  xl:w-[14rem]' src={journalImage} alt='image' />




                </div>


            </div>

        </div>

    )
}

export default PhoneSection