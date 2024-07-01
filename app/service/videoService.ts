import axios from 'axios';

const API_URL = 'http://localhost:3000/api/user';
const getVideos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error getting videos', error);
        throw error;
    }
};

export default getVideos;