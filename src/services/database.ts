import axios from "axios";
console.log(`${process.env.REACT_APP_DB_Host}`)

const database = axios.create({
    baseURL:process.env.REACT_APP_DB_Host
})
export default database;