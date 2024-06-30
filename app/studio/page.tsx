"use client"

import axios from "axios";
import { useState } from "react";
import React from "react";

const StudioPage = () => {
    const [videoTitle, setVideoTitle] = useState("");
    const [channelName, setChannelName] = useState("");
    const [videoPicUrl, setVideoPicUrl] = useState("");

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:3000/api/user", {
                VideoTitle: videoTitle,
                ChannelName: channelName,
                VideoPicURL: videoPicUrl
            });
            alert('Submission successful!');
        } catch (error) {
            console.error('Error submitting data', error);
            alert('Submission failed!');
        }
    };

    return(
        <div>
            <input type="text" placeholder="Video Title" onChange={(e) => setVideoTitle(e.target.value)} />
            <input type="text" placeholder="Channel Name" onChange={(e) => setChannelName(e.target.value)} />
            <input type="text" placeholder="Video Pic URL" onChange={(e) => setVideoPicUrl(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default StudioPage;
