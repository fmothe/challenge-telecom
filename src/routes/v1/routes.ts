import {Router, Request, Response} from "express"
import axios from "axios"
import dotenv from "dotenv"


const router = Router()
const IP_API_URL = 'http://ip-api.com/json/';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_KEY = 'f62e59611e5b69dd19e6468005260f04'


router.get("/location", async (req:Request, res:Response) => {
    try{
        const response = await axios.get(IP_API_URL)
        res.json(response.data)
    }catch(e: any){
        res.status(500).json({error: e.message})
    }
})

router.get("/current/:city?", async (req:Request, res:Response) => {
    try{
        const city = req.params.city
        let locationData
        if(!city){
            locationData = await axios.get(IP_API_URL)
        }

        const cityName = city || locationData?.data?.city
        const weatherData = await axios.get(
            `${WEATHER_API_URL}/weather?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
        )
        res.json(weatherData.data)
    }catch(e: any){
        res.status(500).json({error: e.message})
    }
})


router.get("/forecast/:city?", async (req: Request, res: Response) => {
    try{
        const city = req.params.city
        let locationData
        if(!city){
            locationData = await axios.get(IP_API_URL)
        }

        const cityName = city || locationData?.data?.city
        const weatherData = await axios.get(
            `${WEATHER_API_URL}/forecast?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
        )
        res.json(weatherData.data)

    }catch(e: any){
        res.status(500).json({error: e.message})
    }
})


export default router