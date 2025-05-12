import axios from "axios";

const Axios = axios.create({
    baseURL:'https://dummyjson.com/products'
    // baseURL:'https://dummyjson.com/recipes'

})

export default Axios