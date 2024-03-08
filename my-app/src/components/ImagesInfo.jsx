import React from 'react'
import callingImage from '../images/callingImage.png'
import journalImage from '../images/journalImage.png'
import itemsImage from '../images/itemsImage.png'
import avatarImage from '../images/avatarImage.png'
import mobileCall from '../images/mobileCall.png'
import numberImage from '../images/numberImage.png'
import clock from '../images/clockImage.png'
import IosSection from './IosSection'

function ImagesInfo() {
    return (
        <div className="">
            <div className="grid  gap-x-3.5  overflow-x-hidden grid-cols-5 grid-rows-4 max-h-[180vh] w-full ">
                    <img className=" lg:min-w-[14rem] lg:mx-[1rem] min-w-[13rem] sm:-mx-[6.2rem] md:min-w-[15rem] md:my-[12rem] md:-mx-[8rem]  -mx-[8rem] my-[7rem]  xl:my-[10rem] col-start-1 row-start-1 row-span-2 -z-30 translate-y-10 -translate-x-20  " src={itemsImage} alt='image' />
                    <img  className='col-start-2 row-start-1  my-[5rem] -mx-[6rem] min-w-[15rem]     md:min-w-[25rem] md:-mx-[7rem] md:my-[8rem] lg:-mx-[3rem] xl:min-w-[33rem] xl:my-[6rem]  ' src={callingImage} alt='image' />
                    <img className='col-start-4 col-span-1 row-start-1 mx-2 my-[3rem] min-w-[7rem]   md:min-w-[12rem]  xl:my-[1rem] xl:-mx-[2rem]  ' src={journalImage} alt='image' />
                    <img className='col-start-5 row-start-1 row-span-2 min-w-[13rem] mx-[8rem] mt-[7rem] md:min-w-[12rem] md:my-[15rem] xl:my-[10rem] xl:mx-[5rem]  ' src={avatarImage} alt='image' />
                    <img className='col-start-2 row-start-2 min-w-[9rem] -my-[7rem] -mx-[5rem] md:min-w-[15rem] md:-mx-[6rem] md:my-[3rem] lg:-mx-2 lg:-my-7  xl:my-[4rem] ' src={mobileCall} alt='image' />
                    <img className='row-start-2 col-start-3 -my-[6rem] md:my-[3rem] md:w-[7rem ] lg:w-[7rem] lg:mx-[4rem] lg:-my-[4rem] xl:my-[5rem] xl:mx-[1rem]' src={numberImage} alt='image' />
                    <img className='row-start-3 col-start-3    col-span-3  min-w-[17rem] -mx-[1rem] -my-[20rem]  md:min-w-[10rem]  md:-my-[6rem] lg:-my-[19rem] lg:w-[29rem] lg:mx-[3rem]  xl:-my-[8rem] xl:mx-[1rem] xl:min-w-[32rem]' src={clock} alt='image' />

            </div>

            <IosSection/>




            {/* <img className='w-[28rem] h-[13rem]' src={callingImage} alt='image'/>
    <img className='h-[38rem]' src={journalImage} alt='image'/>
    <img src={itemsImage}  alt='image'  className='h-[39rem] '/>
    <img className='w-[28rem] h-[13rem]' src={callingImage} alt='image'/>
    <img className='h-[38rem]' src={journalImage} alt='image'/> */}


            {/* <div class="  col-span-2 row-start-2 row-span-3 w-[14rem]">
<img src={itemsImage}  alt='image'  />
</div>
<div class="row-span-3  w-[30rem] ">
<img  src={callingImage} alt='image'/>
</div>
<div class=" col-start-12">
<img className='h-[38rem]' src={journalImage} alt='image'/>
</div>

<div class="row-span-2 col-span-2 ...">03</div> */}

        </div>





    )
}

export default ImagesInfo