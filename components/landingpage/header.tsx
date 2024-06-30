import React from 'react'
import { MenuSvg, MicrophoneSvg, Searchsvg } from "../svgs"

export const Header = () => {
    return (    
        <div className="flex justify-between items-center h-auto p-5 w-full bg-[#0F0F0F] fixed top-0 z-50">
            <div className="w-1/5 flex ">
                <div className='ml-3 mr-2 cursor-pointer'>
                    <MenuSvg/>
                </div>
                <div>Logo</div>
            </div>
            <div className=" w-3/5 flex "> 
                <input type="text" placeholder="Search" className="w-[70%] p-4 h-[50px] border-2 border-[#252525] placeholder-[#817F81] rounded-l-full bg-transparent " />
                <div className="w-[10%] flex justify-center items-center h-[50px] rounded-r-full bg-[#222222] cursor-pointer">
                    <Searchsvg/>
                </div>
                <div className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#222222] hover:bg-[#817F81]/[0.3] cursor-pointer ml-4'>
                    <MicrophoneSvg/>
                </div>
            </div>
            <div className="w-1/5 flex justify-end">
                <div className="w-8 h-8 bg-slate-500"></div>
                <div className="w-8 h-8 bg-slate-400 rounded-full"></div>
            </div>
        </div>
    )
}
