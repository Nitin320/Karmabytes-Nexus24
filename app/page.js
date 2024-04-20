"use client"
import  React, { useRef } from 'react';

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
    <main className="w-[100vw] h-[200vh]">

      <div className="z-50 fixed w-[100vw] h-[10vh] bg-[#013022] flex flex-row justify-between items-center gap-2 text-white text-[0.7rem]">

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

      <div className="z-50 fixed w-[100vw] h-[13vh] top-[10vh] bg-[#137D17] flex flex-row justify-center items-center gap-8 text-white text-[0.8rem]">

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

          <div className="flex-col justify-center items-center gap-5 absolute top-[15vh] w-[40vh] h-[25vh] bg-[#9AD19C] rounded-[10px] hidden text-[#137D17]" ref={ref2}>
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

    </main>
  );
}
