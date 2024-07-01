"use client";
import { useState, useEffect } from 'react';
import getVideos from '@/app/service/videoService';
import { Body } from './landingpage/body';

interface Video {
    id: number;
    VideoTitle: string;
    ChannelName: string;
    VideoPicURL: string;
}

export default function Events() {
    const [videoArr, setVideoArr] = useState<Video[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const videoData = await getVideos();
            setVideoArr([videoData]);
            console.log(videoData);
        };

        fetchData();
    }, []);

    console.log("ww",videoArr);

    const handleThumbnailClick = (id: number) => {
        const event = videoArr.find((event) => event.id === id);
        if (event) {
            setVideoArr([event]);

        }
    };

    return (
        <div id="events">
            <Body
                videoArr={videoArr}
                handleThumbnailClick={handleThumbnailClick}
            />
        </div>
    );
}
