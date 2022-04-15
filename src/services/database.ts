import axios from "axios";
const database = axios.create({
    baseURL:"http://localhost:3000/"
})
export default database;