"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import getVideos from '@/app/service/videoService';
import { Body } from './landingpage/body';

interface EventsProps {
    isVideoPage?: boolean;
}


interface Video {
    id: number;
    VideoTitle: string;
    ChannelName: string;
    VideoPicURL: string;
}

export default function Events({ isVideoPage }: EventsProps) {
    const [videoArr, setVideoArr] = useState<Video[]>([]);
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            const videoData = await getVideos();
            setVideoArr(videoData);
            console.log(videoData);
        };

        fetchData();
    }, []);

    console.log("ww",videoArr);

    const handleThumbnailClick = (id: number) => {
        const event = videoArr.find((event) => event.id === id);
        if (event) {
            
             router.push('/landingpage/' + event.id);
        }
    };

    return (
        <div id="events">
            <Body
                isVideoPage={isVideoPage}
                videoArr={videoArr}
                handleThumbnailClick={handleThumbnailClick}
            />
        </div>
    );
}
