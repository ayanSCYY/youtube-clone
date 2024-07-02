'use client';

import getVideos from "@/app/service/videoService";
import NextVideo from "next-video";
import { useEffect, useState } from "react";
import { HorizontalTripleDotSvg, ShareButtonsvg, ThumbDownDislikedSvg, ThumbDownSvg, ThumbUpLikedSvg, ThumbUpSvg } from "../svgs";
import CustomAlert from "../CustomAlert";
import Events from "../Events";
import Header from "./header";
import { VideoData } from "@/staticdata/VideoData";

interface Video {
    id: number;
    VideoTitle: string;
    ChannelName: string;
    VideoPicURL: string;
    VideoURL: string;
}

const Video = ({ params }: { params: { movieId: string } }) => {
    const [video, setVideo] = useState<Video | null>(null);
    const [subscribed, setSubscribed] = useState(false);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubscribe = () => {
        setSubscribed(!subscribed);
    };

    const handleLike = () => {
        setLiked(!liked);
        if (disliked) {
            setDisliked(false);
        }
    };

    const handleDislike = () => {
        setDisliked(!disliked);
        if (liked) {
            setLiked(false);
        }
    };

    const handleMenuClick = () => {
        setShowAlert(true);
    }

    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    useEffect(() => {
        const fetchData =  () => {
            const videoData =  VideoData;
            const matchingVideo = videoData.find((video: Video) => video.id === parseInt(params.movieId));
            setVideo(matchingVideo || null);
        };

        fetchData();
    }, [params.movieId]);

    if (!video) {
        return <div>Video not found</div>;
    }

    return (
        <div className="bg-[#0F0F0F] min-h-screen">
            <Header />
            <div className=" grid grid-cols-1 lg:grid-cols-3 p-6  md:p-12 lg:p-24 gap-4">
                <div className="flex flex-col gap-6 col-span-1 lg:col-span-2 w-full max-w-full rounded-xl backdrop-blur-3xl">
                    <div className="w-full mt-18 max-lg:mt-12 aspect-video bg-slate-800 rounded-xl overflow-hidden">
                        <NextVideo src={video.VideoURL} className="w-full h-full" />
                    </div>
                    <div className="text-[20px] font-semibold text-[#ffffff]">{video.VideoTitle}</div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#222222]" style={{ backgroundImage: `url(${video.VideoPicURL})`, backgroundSize: 'cover' }}></div>
                            <div className="text-[16px] text-[#ffffff] font-semibold">{video.ChannelName}</div>
                            <button onClick={handleSubscribe} className="text-black bg-white hover:bg-white/[0.8] focus:outline-none font-medium rounded-full text-sm px-5 py-2">{!subscribed ? 'Subscribe' : 'Subscribed'}</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex">
                                <button onClick={handleLike} className={`text-white bg-[#222222] hover:bg-[#222222]/[0.8] focus:outline-none font-medium rounded-l-full text-sm px-5 py-2 `}>
                                    {liked ? <ThumbUpLikedSvg /> : <ThumbUpSvg />}
                                </button>
                                <button onClick={handleDislike} className={`text-white bg-[#222222] hover:bg-[#222222]/[0.8] focus:outline-none font-medium rounded-r-full text-sm px-5 py-2 `}>
                                    {disliked ? <ThumbDownDislikedSvg /> : <ThumbDownSvg />}
                                </button>
                            </div>
                            <button onClick={handleMenuClick} className="text-white bg-[#222222] hover:bg-[#222222]/[0.8] focus:outline-none font-medium rounded-full text-sm px-5 py-2 flex items-center gap-2">
                                <ShareButtonsvg /> Share
                            </button>
                            <button onClick={handleMenuClick} className="text-white bg-[#222222] hover:bg-[#222222]/[0.8] focus:outline-none font-medium rounded-full text-sm px-5 py-2">
                                <HorizontalTripleDotSvg />
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#222222] p-4 rounded-xl">
                        <div className="text-[14px] text-[#ffffff] font-semibold">11k views</div>
                        <div className="text-[12px] text-[#ffffff]">description</div>
                        <button onClick={handleMenuClick} className="text-[12px] text-[#ffffff]">...more</button>
                    </div>
                </div>
                <div className="pt-4 lg:pt-0 lg:col-span-1">
                    <Events isVideoPage={true} />
                </div>
            </div>
            {showAlert && <CustomAlert message="Currently working on it" onClose={handleCloseAlert} />}
        </div>
    );
}

export default Video;
