import axios from 'axios';
const KEY = "AIzaSyC9DtFJlVPnuyKG5yMRWGhWe9A5gT01Cfo";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:8,
        key:KEY
    }
});