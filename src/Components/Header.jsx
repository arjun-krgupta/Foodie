import React from 'react';

function Header(props) {
    return (
       <>
           <div className='h-[34vw] my-7 mx-auto relative' style={{backgroundImage:"url(./header_img.png",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]' style={{animation:"fadeIn 3s"}}>
            <h2 className='font-[500] text-white text-6xl'>Order your favourite food here</h2>
            <p className='text-white text-base'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining expertise, one delicious meal at a time.</p>
            <button className='text-[#747474] font-[500] py-[12px] px-[30px] bg-white border-0 outline-none text-[max(1vw,13px)]  rounded-[50px] hover:text-gray-600'>View Menu</button>
        </div>
       </div>
       </>
    );
}

export default Header;