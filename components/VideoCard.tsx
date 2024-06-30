import React from "react";
import { VideoCardMoreButtonSvg } from "./svgs"; 

interface VideoCardProps {
    videoTitle: string;
    channelName: string;
    videoPicUrl: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ videoTitle, channelName, videoPicUrl }) => {
    return (
        <div className="flex flex-col gap-4 cursor-pointer">
            <div className="h-56 rounded-2xl bg-slate-400">
                
            </div>
            <div className="flex justify-between gap-2">
                <div className="w-12 h-12 rounded-full bg-[#222222]">
                    {/* Placeholder for channel profile picture */}
                </div>
                <div className="w-3/5">
                    <div className="text-[24px] text-[#F1F1F1]">{videoTitle}</div>
                    <div className="text-[15px] text-[#AAAAAA]">{channelName}</div>
                    <div className="text-[15px] text-[#AAAAAA]">Description or other info</div>
                </div>
                <div>
                    <VideoCardMoreButtonSvg />
                </div>
            </div>
        </div>
    );
};
