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
}

export const Body: React.FC<BodyProps> = ({ videoArr, handleThumbnailClick }) => {
    console.log('videoArr in Body:', videoArr); 
    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
            {videoArr.map((video) => (
                <div key={video.id}>
                   <>{console.log(video.id)}</> 
                <VideoCard
                    id={video.id}
                    videoTitle={video.VideoTitle}
                    channelName={video.ChannelName}
                    videoPicUrl={video.VideoPicURL}
                    handleThumbnailClick={handleThumbnailClick} 
                /></div>           
            ))}
        </div>
    );
};
