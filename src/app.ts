import express from 'express'
import { envs } from './config/envs'
import { GithubController } from './presentation/github/controllers'
import { GithubSha256Middlewares } from './presentation/middlewares/github-sha256.middlewares'

(()=>{
main()
})()

function main (){
    const app = express()
    app.use(express.json())
    const controllers = new GithubController()
    
    app.use(GithubSha256Middlewares.verifySignature)

    app.post('/api/github',controllers.webhookHandler )

    app.listen(envs.PORT,()=>{
        console.log(`Server is running on port ${envs.PORT}`)
    })
}