import axios from 'axios';

const KEY = 'AIzaSyBXoEYpsCGSxl_nr9g8J5u7zSIPJYlyV-4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
