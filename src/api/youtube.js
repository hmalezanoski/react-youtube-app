import axios from 'axios'

const KEY = 'AIzaSyBR3-dufkjD7lhC1va2Y_W4AZ4Gcyr2YBk';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});