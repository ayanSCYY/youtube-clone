"use client";
import React from 'react';
import { VideoCard } from '../VideoCard';

interface Video {
    id: number;
    VideoTitle: string;
    ChannelName: string;
    VideoPicURL: string;
}

interface BodyProps {
    videoArr: Video[];
    handleThumbnailClick: (id: number) => void;
    isVideoPage?: boolean;
    
}

export const Body: React.FC<BodyProps> = ({ videoArr, handleThumbnailClick,isVideoPage }) => {
    console.log('videoArr in Body:', videoArr); 
    return (
        <div className={`grid ${isVideoPage ? 'grid-cols-1 gap-y-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8'} gap-x-4 `}>
            {videoArr.map((video) => (
                <div key={video.id}>
                   <>{console.log(video.id)}</> 
                <VideoCard
                    id={video.id}
                    videoTitle={video.VideoTitle}
                    channelName={video.ChannelName}
                    videoPicUrl={video.VideoPicURL}
                    handleThumbnailClick={handleThumbnailClick} 
                    isVideoPage={isVideoPage}
                /></div>           
            ))}
        </div>
    );
};
