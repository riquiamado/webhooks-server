import {get} from 'env-var'
import  'dotenv/config'

export const envs = {
    PORT:get('PORT').required().asPortNumber(),
    DISCORD_WEBHOOKS_URL:get('DISCORD_WEBHOOKS_URL').required().asString(),
    SECRET_TOKEN: get('SECRET_TOKEN').required().asString()
}