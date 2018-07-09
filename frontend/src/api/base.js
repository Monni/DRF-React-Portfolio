import axios from 'axios';


// TODO baseURL to be defined in settings.
export default axios.create({
    baseURL: `http://localhost:8100/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
});