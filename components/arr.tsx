import React from 'react';
import { VideoCard } from './VideoCard';

const VideoList: React.FC = () => {
    const videos = [
        { VideoTitle: 'Title 1', ChannelName: 'Channel 1', VideoPicURL: 'url1' },
        { VideoTitle: 'Title 2', ChannelName: 'Channel 2', VideoPicURL: 'url2' },
    ];

    return (
        <div>
            {videos.map((video, index) => (
                <VideoCard
                    key={index}
                    videoTitle={video.VideoTitle}
                    channelName={video.ChannelName}
                    videoPicUrl={video.VideoPicURL}
                />
            ))}
        </div>
    );
};

export default VideoList;
