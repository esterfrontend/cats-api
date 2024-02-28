import axios from "axios";

class catApiService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.thecatapi.com/v1',
            headers: {'x-api-key': 'live_sZojwL4lEEa3mPZWpSL1EwZXeRtlLWnBvOWmx2c86G9zhzq9FS2aMJNHqyH3uCRc'}
        })
    }

    async getRandomCats() {
        const {data} = await this.axios.get('/images/search?limit=10&has_breeds=true')
        return data
    }
}

export default new catApiService;