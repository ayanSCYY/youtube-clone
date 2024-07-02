import React, { useState } from 'react';
import { MenuSvg, MicrophoneSvg, NotificationSvg, Searchsvg } from '../svgs';
import CustomAlert from '../CustomAlert';


const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSearchInput = () => {
        setShowSearch(!showSearch);
    };

    const handleMenuClick = () => {
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (    
        <div className="flex justify-between items-center h-auto p-5 w-full bg-[#0F0F0F] fixed top-0 z-50">
           
            <div className="flex items-center w-1/5">
                <div className='ml-3 mr-2 cursor-pointer' onClick={handleMenuClick}>
                    <MenuSvg/>
                </div>
                <div className="text-white">Logo</div>
            </div>
            <div className="w-3/5 flex max-sm:hidden"> 
                <input type="text" placeholder="Search" className="w-[70%] p-4 h-[45px] border-2 border-r-0 border-[#252525] placeholder-[#817F81] text-[#817F81] rounded-l-full bg-transparent" />
                <div onClick={handleMenuClick} className="w-[10%] flex justify-center items-center h-[45px] border-l-0 rounded-r-full bg-[#222222] cursor-pointer">
                    <Searchsvg/>
                </div>
                <div onClick={handleMenuClick} className='flex justify-center items-center w-[45px] h-[45px] rounded-full bg-[#222222] hover:bg-[#817F81]/[0.3] cursor-pointer ml-4'>
                    <MicrophoneSvg/>
                </div>
            </div>
            {showSearch && 
                <input type="text" placeholder="Search" className="w-[70%] p-4 h-[45px] border-2 border-r-0 border-[#252525] placeholder-[#817F81] text-[#817F81] rounded-l-full bg-transparent" />
            }
            <div className="flex items-center justify-between gap-2">
                <div className='sm:hidden' onClick={handleSearchInput}>
                    <Searchsvg/>
                </div>
                <div onClick={handleMenuClick} className='sm:hidden flex justify-center items-center w-[45px] h-[45px] rounded-full bg-[#222222] hover:bg-[#817F81]/[0.3] cursor-pointer ml-4'>
                    <MicrophoneSvg/>
                </div>
                <div onClick={handleMenuClick} className="w-8 h-8 cursor-pointer">
                    <NotificationSvg/>
                </div>
                <div onClick={handleMenuClick} className="w-10 h-10 text-white bg-yellow-600 flex justify-center items-center hover:bg-yellow-600/[0.8] cursor-pointer rounded-full">
                    {'h'.toUpperCase()}
                </div>
            </div>
            {showAlert && <CustomAlert message="Currently working on it" onClose={handleCloseAlert} />}
        </div>
    );
};

export default Header;
