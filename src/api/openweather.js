import axios from "axios";

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: 'f9748216d99e4a02fdf368412e49ccea',
        units: 'imperial'
    }
});