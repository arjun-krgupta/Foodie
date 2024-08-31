import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const[menu,setMenu] = useState("HOME")
    return (
       <>
         <div className='md:flex md:justify-between md:items-center md:py-5 '>
            <h1 className='font-semibold text-4xl'>Foodie</h1>
            <div className='text-[#49557e] text-base md:flex md:gap-6'>
                <Link onClick={()=>setMenu('HOME')} to="/" className={menu==="HOME"?"active:pb-1 border-b-2 border-[#49557e] cursor-pointer":""}>HOME</Link>
                <Link onClick={()=>setMenu('ABOUT')} to="/about" className={menu==="ABOUT"?"active:pb-1 border-b-2 border-[#49557e] cursor-pointer":""}>ABOUT</Link>
                <Link onClick={()=>setMenu('MENU')} to="/menu" className={menu==="MENU"?"active:pb-1 border-b-2 border-[#49557e] cursor-pointer":""}>MENU</Link>
                <Link onClick={()=>setMenu('CONTACT')} to="/contact" className={menu==="CONTACT"?"active:pb-1 border-b-2 border-[#49557e] cursor-pointer":""}>CONTACT</Link>
            </div>
            <div className='md:flex md:gap-10 md:items-center'>
                <img src={assets.search_icon} alt="" className='cursor-pointer' />
                <div className='relative'>
                    <img src={assets.basket_icon} alt="" className='cursor-pointer' />
                    <div className='absolute min-w-[10px] min-h-[10px] bg-[#ff6347] rounded-[5px] top-[-8px] right-[-8px]'></div>
                </div>
                <button className='border border-[#ff6347] p-1 bg-transparent text-base text-[#49557e] py-2 px-7 rounded-[50px] cursor-pointer transition-[0.3s] hover:bg-[#fff4f2]'>sign in</button>
            </div>
         </div>
       </>
    );
}

export default Navbar;