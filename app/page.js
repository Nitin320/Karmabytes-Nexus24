"use client"
import  React, { useRef } from 'react';
import Script from "next/script"

import Image from "next/image";
import phone from "./pics/phone.png"
import mail from "./pics/mail.png"
import insta from "./pics/insta.png"
import x from "./pics/x.png"
import linkedin from "./pics/linkedin.png"
import facebook from "./pics/facebook.png"
import logo from "./pics/logo.png"

import bio from "./pics/bio.png"
import nonbio from "./pics/nonbio.png"
import nonexp from "./pics/nonexp.png"
import exp from "./pics/exp.png"

import bg from "./pics/bg.png"
import gradient from "./pics/gradient.png"
import shapes from "./pics/shapes.png"

import price1 from "./pics/price1.png"
import price2 from "./pics/price2.png"
import price3 from "./pics/price3.png"

import "./main.css"


export default function Home() {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const nav1 = () => {   
    ref2.current.style.display = "none"
    ref3.current.style.display = "none"
    if(ref1.current.style.display == "flex"){
      ref1.current.style.display = "none"
    }
    else{
      ref1.current.style.display = "flex"
    }
  }
  const nav2 = () => {  
    ref1.current.style.display = "none"
    ref3.current.style.display = "none" 
    if(ref2.current.style.display == "flex"){
      ref2.current.style.display = "none"
    }
    else{
      ref2.current.style.display = "flex"
    }
  }
  const nav3 = () => { 
    ref1.current.style.display = "none"
    ref2.current.style.display = "none"  
    if(ref3.current.style.display == "flex"){
      ref3.current.style.display = "none"
    }
    else{
      ref3.current.style.display = "flex"
    }
  }

  return (
    <div>
    <head>
                
                <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
                <Script src="https://mediafiles.botpress.cloud/7f31a681-897b-42cf-b109-88b93224dd76/webchat/config.js" defer></Script>
            </head>
    <main className="w-[100vw] h-[200vh]">

      <div className="z-10 fixed w-[100vw] h-[10vh] bg-[#013022] flex flex-row justify-between items-center gap-2 text-white text-[0.7rem]">

        <div className="flex flex-row justify-center items-center m-[1vh] gap-10 ml-[5vw]">
          <div className="flex flex-row justify-center items-center gap-2">
            <Image src={phone} width={20} height={20}/>
            <div>+(91) 0292893820</div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <Image src={mail} width={20} height={20}/>
            <div>example123@gmail.com</div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center m-[1vh] gap-5 mr-[10vw]">
          <Image src={insta} width={20} height={20}/>
          <Image src={x} width={20} height={20}/>
          <Image src={linkedin} width={20} height={20}/>
          <Image src={facebook} width={20} height={20}/>
        </div>

      </div>

      <div className="z-10 fixed w-[100vw] h-[13vh] top-[10vh] bg-[#137D17] flex flex-row justify-center items-center gap-8 text-white text-[0.8rem]">

        <Image src={logo} width={100} height={100}/>

        <div className="flex flex-row justify-center items-center">
          <div className="nav1">Home</div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="nav2" onClick={nav1}>Residential</div>

          <div className="flex-col justify-center items-center gap-5 absolute top-[15vh] w-[40vh] h-[25vh] bg-[#9AD19C] rounded-[10px] hidden text-[#137D17]" ref={ref1}>
            <div className='flex flex-row justify-center items-center'>
              <Image src={bio} width={30} height={30}/>
              <div className='cursor-pointer'>Bio-Degradable</div>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <Image src={nonbio} width={30} height={30}/>
              <div className='cursor-pointer'>Non Bio-Degradable</div>
            </div>
          </div>

        </div>


        <div className="flex flex-row justify-center items-center">
          <div className="nav3" onClick={nav2}>Food Waste</div>

          <div className="z-[50] flex-col justify-center items-center gap-5 absolute top-[15vh] w-[40vh] h-[25vh] bg-[#9AD19C] rounded-[10px] hidden text-[#137D17]" ref={ref2}>
            <div className='flex flex-row justify-center items-center'>
              <Image src={nonexp} width={30} height={30}/>
              <div className='cursor-pointer'>Not Expired</div>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <Image src={exp} width={30} height={30}/>
              <div className='cursor-pointer'>Expired</div>
            </div>
          </div>

        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="nav4" onClick={nav3}>Buy</div>

          <div className="flex-col justify-center items-center gap-3 absolute top-[15vh] w-[40vh] h-[25vh] bg-[#9AD19C] rounded-[10px] hidden text-[#137D17]" ref={ref3}>
            <div className='flex flex-row justify-center items-center'>
              <Image src={nonexp} width={30} height={30}/>
              <div className='cursor-pointer'>Fertilizers</div>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <Image src={exp} width={30} height={30}/>
              <div className='cursor-pointer'>Manure</div>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <Image src={exp} width={30} height={30}/>
              <div className='cursor-pointer'>Seeds</div>
            </div>
          </div>

        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="nav5">Service Area</div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="nav6">About Us</div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="nav7">Contact Us</div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="nav8">Request Pickup</div>
        </div>
        
      </div>

      <div className='bg-main'>
        <div className='bg absolute top-[22vh] h-[80vh] w-[100vw] flex flex-col justify-center'>
          <div className='flex flex-col justify-center items-start ml-[10vh] gap-7'>
            <div className='text-[2.5rem] font-bold text-[white]'>Waste Management<br></br>Garbage Pickup<br></br>Agricultural Setups</div>
            <div className='text-[1rem] text-[white] explore'>Explore Plans</div>
          </div>
        </div>
      </div>

      <div className='absolute top-[90vh] right-0'>
        <Image src={shapes} width={300} height={300}/>
      </div>

      <div className='absolute top-[115vh] '>
        <div className='text-[#137D17] font-bold text-[2.5rem] ml-[10vw] border-b-2 border-[#137D17] mb-[10vh] w-[30vw]'>Subscription Plan</div>

        <div className='w-[100vw] flex flex-row justify-center items-center gap-4'>

          <div className='zoom flex flex-col justify-center items-start p-7 bg-[#E6F5E7] gap-7 w-[30vw] h-[60vh] rounded-md'>
            <div className='font-bold text-[1.5rem]'>Tier 1</div>
            <div>
              <li>Shops/Offices</li>
              <li className=''>Small scale waste generation</li>
            </div>
            <Image src={price1} width={120} height={120}/>
            <div className='mt-[5vh] pr-[10vw] pl-[10vw] pt-[1vh] pd-[1vh] cursor-pointer bg-[#99C292] rounded-md truncate'><a href='https://forms.gle/BUEH67Zn3s5XkPjp9' target='_BLANK'>Select Plan</a></div>
          </div>
          
          <div className='zoom flex flex-col justify-center items-start p-7 bg-[#8EC68F] gap-7 w-[30vw] h-[60vh] rounded-md'>
            <div className='font-bold text-[1.5rem]'>Tier 2</div>
            <div>
              <li>Institutions/Apartments</li>
              <li className=''>Medium scale waste generation</li>
            </div>
            <Image src={price2} width={120} height={120}/>
            <div className='mt-[5vh] pr-[10vw] pl-[10vw] pt-[1vh] pd-[1vh] cursor-pointer bg-[white] rounded-md truncate'><a href='https://forms.gle/BUEH67Zn3s5XkPjp9' target='_BLANK'>Select Plan</a></div>
          </div>

          <div className='zoom flex flex-col justify-center items-start p-7 bg-[#E6F5E7] gap-7 w-[30vw] h-[60vh] rounded-md'>
            <div className='font-bold text-[1.5rem]'>Tier 3</div>
            <div>
              <li>Industries/Malls</li>
              <li className=''>High scale waste generation</li>
            </div>
            <Image src={price3} width={120} height={120}/>
            <div className='mt-[5vh] pr-[10vw] pl-[10vw] pt-[1vh] pd-[1vh] cursor-pointer bg-[#99C292] rounded-md truncate'><a href='https://forms.gle/BUEH67Zn3s5XkPjp9' target='_BLANK'>Select Plan</a></div>
          </div>

        </div>

      </div>

    </main>
    </div>
  );
}
