"use client";
import React from 'react';
import { VideoCardMoreButtonSvg } from './svgs';

interface VideoCardProps {
    id: number;
    videoTitle: string;
    channelName: string;
    videoPicUrl: string;
    handleThumbnailClick: (id: number) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ id, videoTitle, channelName, videoPicUrl, handleThumbnailClick }) => {
    console.log('Props in VideoCard:', { id, videoTitle, channelName, videoPicUrl }); // Log props in VideoCard

    return (
        <div className="flex flex-col gap-4 cursor-pointer" onClick={() => handleThumbnailClick(id)}>
            <div className="h-56 rounded-2xl bg-slate-400" >
         
            </div>
            <div className="flex justify-between gap-2">
                <div className="w-12 h-12 rounded-full bg-[#222222]">
                    
                </div>
                <div className="w-3/5">
                    <div className="text-[24px] text-[#F1F1F1]">rcfg</div>
                    <div className="text-[15px] text-[#AAAAAA]">chvgv</div>
                </div>
                <div>
                    <VideoCardMoreButtonSvg/>
                </div>
            </div>
        </div>
    );
};
