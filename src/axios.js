import axios from "axios";

const instance = axios.create({
     baseURL: "https://profile-zvxb.onrender.com",   
});

export default instance;