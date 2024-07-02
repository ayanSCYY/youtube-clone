"use client"
import { CldUploadWidget, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import axios from "axios";
import { useState } from "react";
import React from "react";

const StudioPage = () => {
    const [videoTitle, setVideoTitle] = useState("");
    const [channelName, setChannelName] = useState("");
    const [videoPicUrl, setVideoPicUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const handleSubmit = async () => {
        try {
            await axios.post("/api/user", {
                VideoTitle: videoTitle,
                ChannelName: channelName,
                VideoPicURL: videoPicUrl,
                VideoURL: videoUrl,
            });
            alert('Submission successful!');
        } catch (error) {
            console.error('Error submitting data', error);
            alert('Submission failed!');
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete("/api/user");
            if (response.status === 200) {
                alert('Delete successful!');
            } else {
                alert('Delete failed!');
            }
        } catch (error) {
            console.error('Error deleting data', error);
            alert('Delete failed!');
        }
    };

    const handleUpload = (results: CloudinaryUploadWidgetResults): void => {
        if (results.event === 'success' && typeof results.info === 'object') {
            setVideoPicUrl(results.info.secure_url);
        }
    };

    const handleUpload2 = (results: CloudinaryUploadWidgetResults): void => {
        if (results.event === 'success' && typeof results.info === 'object') {
            setVideoUrl(results.info.secure_url);
        }
    };

    return (
        <div className='flex bg-gray-400 h-screen w-screen justify-center items-center'>
            <div className='w-auto flex flex-col gap-2 p-10 bg-gray-600 rounded-3xl backdrop-blur-10'>
                <input 
                    type="text" 
                    placeholder="Video Title" 
                    onChange={(e) => setVideoTitle(e.target.value)} 
                    value={videoTitle}
                    className="bg-gray-50 mb-3 border hover:scale-105 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input 
                    type="text" 
                    placeholder="Channel Name" 
                    onChange={(e) => setChannelName(e.target.value)} 
                    value={channelName}
                    className="bg-gray-50 border mb-3 hover:scale-105 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className='bg-gray-50 border mb-3 hover:scale-105 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 text-center'>
                    <CldUploadWidget 
                        uploadPreset="youtube-clone" 
                        onUpload={handleUpload}
                    >
                        {({ open }) => {
                            return (
                                <button onClick={() => open()}>
                                    Upload a Thumbnail
                                </button>
                            );
                        }}
                    </CldUploadWidget>
                </div>
                <div className='bg-gray-50 border mb-3 hover:scale-105 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 text-center'>
                    <CldUploadWidget 
                        uploadPreset="youtube-clone" 
                        onUpload={handleUpload2}
                    >
                        {({ open }) => {
                            return (
                                <button onClick={() => open()}>
                                    Upload your Video
                                </button>
                            );
                        }}
                    </CldUploadWidget>
                </div>
                <button 
                    onClick={handleSubmit} 
                    className="text-white mb-3 bg-slate-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
                <button 
                    onClick={handleDelete} 
                    className="text-white mb-3 bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default StudioPage;
