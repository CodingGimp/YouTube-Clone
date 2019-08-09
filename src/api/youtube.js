import axios from 'axios';

export default.axios.create({
    baseURL: 'http://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDeh9H1YnPt9UQRgIP77vKS-LFVSiu3FSI'
    }
});