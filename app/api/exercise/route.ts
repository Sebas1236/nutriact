import axios from "axios";

const exerciseRoute = axios.create({
    baseURL: "https://exercisedb.p.rapidapi.com/exercises"
});

export default exerciseRoute;