
import { ImailOptions } from "./Esp.interface";
import instanceTransoprte from './transporterConnection.js'
export class NotificationService{

    private transporter = instanceTransoprte
    constructor(){}

    async sendEmail(emailOptions:ImailOptions){
      const email = await this.transporter.sendMail(emailOptions)
      console.log(email)
      return email
    
}}