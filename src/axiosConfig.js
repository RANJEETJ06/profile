import axios from 'axios';

const baseUrl = process.env.PROXY_URL;

export default axios.create({
    baseURL: baseUrl,
    headers: {
        'ngrok-skip-browser-warning': 'true'
    }
});