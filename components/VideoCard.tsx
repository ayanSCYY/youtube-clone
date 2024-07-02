'use client';
import React from 'react';
import { VideoCardMoreButtonSvg } from './svgs';

interface VideoCardProps {
    id: number;
    videoTitle: string;
    channelName: string;
    videoPicUrl: string;
    handleThumbnailClick: (id: number) => void;
    isVideoPage?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ id, videoTitle, channelName, videoPicUrl, handleThumbnailClick, isVideoPage }) => {
    console.log('Props in VideoCard:', { id, videoTitle, channelName, videoPicUrl });

    return (
        <div
            className={`cursor-pointer ${isVideoPage ? 'grid grid-cols-2 gap-2' : 'flex flex-col gap-5'}`}
            onClick={() => handleThumbnailClick(id)}
        >
            <div
                className={`${isVideoPage ? 'w-[155px] h-24' : 'h-56 sm:h-48'} bg-slate-400 rounded-xl`}
                style={{ backgroundImage: `url(${videoPicUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="flex justify-between items-start gap-2 w-full">
                {!isVideoPage && (
                    <div
                        className="w-12 h-12 rounded-full bg-[#222222] flex-shrink-0"
                        style={{ backgroundImage: `url(${videoPicUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                )}
                <div className={`flex-1 ${isVideoPage ? 'ml-0' : 'ml-4'} w-full`}>
                    <div className="text-left">
                        <div className="text-[16px] font-semibold text-[#F1F1F1] truncate">{videoTitle}</div>
                        <div className="text-[12px] text-[#AAAAAA] font-normal truncate">{channelName}</div>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <VideoCardMoreButtonSvg />
                </div>
            </div>
        </div>
    );
};
