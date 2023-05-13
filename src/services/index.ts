import axios from 'axios';
import Config  from '../config'
const api = axios.create({
    baseURL: Config.baseURL
})

const apis = {
    async getPets(offset:number){
        let response = await api.get('breeders',{
            params:{
                offset: offset,
                limit: Config.limit
            }
        })
        return response.data
    }
}

export default apis;