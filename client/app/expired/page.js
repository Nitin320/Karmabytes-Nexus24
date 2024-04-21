"use client"
import Image from "next/image";
import  React, { useEffect, useRef, useState } from 'react';
import "../main.css"

import food1 from "../pics/food1.png"
import food2 from "../pics/food2.png"
import food3 from "../pics/food3.png"

import phone from "../pics/phone.png"
import mail from "../pics/mail.png"
import insta from "../pics/insta.png"
import x from "../pics/x.png"
import linkedin from "../pics/linkedin.png"
import facebook from "../pics/facebook.png"
import logo from "../pics/logo.png"

import bio from "../pics/bio.png"
import nonbio from "../pics/nonbio.png"
import nonexp from "../pics/nonexp.png"
import exp from "../pics/exp.png"

import bg from "../pics/bg.png"
import gradient from "../pics/gradient.png"
import shapes from "../pics/shapes.png"

function page() {

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
    <div className=''>
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
            <div className="nav1"><a href="/">Home</a></div>
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
                <div className='cursor-pointer'><a href='nonexpired'>Not Expired</a></div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                <Image src={exp} width={30} height={30}/>
                <div className='cursor-pointer'><a href='expired'>Expired</a></div>
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

        <div className='flex flex-row justify-end content-center gap-10 mr-[5vh] mb-[5vh] pt-[30vh] cursor-pointer'>
            <div className='px-3 py-1 bg-[#8EC68F] rounded-md'>Edit</div>
            <div className='px-3 py-1 bg-[#8EC68F] rounded-md'>Add</div>
        </div>

        <div className='flex flex-row justify-between content-center px-5 py-5'>
            <div className='flex flex-col h-[65vh] w-[25vw] gap-2 text-[0.8rem] p-3 bg-[#D9D9D9] rounded-md'>
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
                <div className='flex flex-row justify-between content-center mt-[2vh] text-[#E4A71C] cursor-pointer'>
                    <div>Buy</div>
                    <div>Chat</div>
                    <div>Connect</div>
                </div>
            </div>

            <div className='flex flex-col h-[65vh] w-[25vw] gap-2 text-[0.8rem] p-3 bg-[#D9D9D9] rounded-md'>
                <Image src={food2} width={300} height={300}/>
                <div>
                    <div className='font-bold'>Sliced Bread</div>
                    <div className='font-bold'>5 Plates</div>
                </div>
                <div>
                    <div>Sliced bread with mold (past it's prime)</div>
                    <div>Price per item : ₹0.5</div>
                </div>
                <div>
                    <div>Created: 2022-09-15</div>
                    <div>Expiry: 2022-09-25</div>
                </div>
                <div className='flex flex-row justify-between content-center mt-[2vh] text-[#E4A71C] cursor-pointer'>
                    <div>Buy</div>
                    <div>Chat</div>
                    <div>Connect</div>
                </div>
            </div>

            <div className='flex flex-col h-[65vh] w-[25vw] gap-2 text-[0.8rem] p-3 bg-[#D9D9D9] rounded-md'>
                <Image src={food3} width={300} height={300}/>
                <div>
                    <div className='font-bold'>Wilted Romaine Lettuce</div>
                    <div className='font-bold'>20 plates</div>
                </div>
                <div>
                    <div>Spoilt wilted Romaine Lettuce (past it's prime)</div>
                    <div>Price per item : ₹0.75</div>
                </div>
                <div>
                    <div>Created: 2022-09-15</div>
                    <div>Expiry: 2022-10-10</div>
                </div>
                <div className='flex flex-row justify-between content-center mt-[2vh] text-[#E4A71C] cursor-pointer'>
                    <div>Buy</div>
                    <div>Chat</div>
                    <div>Connect</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
