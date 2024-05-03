import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '210d4f83135845fd946c0af08b74e120',
    }
})