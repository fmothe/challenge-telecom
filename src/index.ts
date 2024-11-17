import express, {Request,Response} from "express"
import weatherRouter from "./routes/v1/routes"

const app = express()

const port = 3000

app.use(express.json())
app.use("/v1", weatherRouter)
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})








app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


export default app