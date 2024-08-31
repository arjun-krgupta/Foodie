import React from 'react';
import { menu_list } from '../assets/assets';

function Menu(props) {
    return (
       <>
       <div className='flex flex-col mt-3 gap-3'>
            <h1 className='text-3xl font-semibold'>Explore Our Menu</h1>
            <p className='text-sm max-w-[70%]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining expertise, one delicious meal at a time.</p>
        </div>
        <div className='flex justify-between items-center text-center gap-8 mt-4 overflow-x-scroll webkit'>
            {menu_list.map((item,index)=>
              <div key={index}>
                <img src={item.menu_image} alt="" className='w-[7.5vw] min-w-[80px] h-auto rounded-[50%] cursor-pointer transition-[0.2s]' />
                <p className='mt-2 cursor-pointer text-[#747474]'>{item.menu_name}</p>
              </div>
            )}
        </div>
        <hr className='h-1 bg-[#e2e2e2] my-3 mx-0 border-0 '/>
       </>
    );
}

export default Menu;