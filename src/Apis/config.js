import axios from "axios";

const Axios = axios.create({
    baseURL:'https://dummyjson.com/products'
})

export default Axios