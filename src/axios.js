import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-dc2ce.cloudfunctions.net/api'
    //'http://localhost:5001/challenge-dc2ce/us-central1/api' 
});

export default instance;