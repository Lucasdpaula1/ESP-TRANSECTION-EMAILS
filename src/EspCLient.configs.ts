import { IEspClientConfig } from "./Esp.interface";

export const espClientConfig:IEspClientConfig = {
    host: process.env.SOURCE_MAIL_ACCOUNT_HOST!, auth:{pass:process.env.SOURCE_MAIL_ACCOUNT_PASSWORD!,user: process.env.SOURCE_MAIL_ACCOUNT!}, secure:false, port: Number(process.env.SOURCE_MAIL_ACCOUNT_PORT) 
}