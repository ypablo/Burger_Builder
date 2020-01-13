import axios from "axios"

const instance = axios.create({
    baseURL: "https://burger-d3b7b.firebaseio.com/"
})

export default instance