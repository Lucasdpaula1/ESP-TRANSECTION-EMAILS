import nodemailer from 'nodemailer';
import { espClientConfig } from './EspCLient.configs.js';
export class EspClientConnection {
    static instance;
    transporter;
    constructor() {
        console.log(espClientConfig);
        this.transporter = nodemailer.createTransport(espClientConfig);
    }
    static getInstance() {
        if (!EspClientConnection.instance) {
            EspClientConnection.instance = new EspClientConnection();
            Object.seal(EspClientConnection.instance);
        }
        return EspClientConnection.instance;
    }
    closeConnectionSMTP() {
        this.transporter.close();
    }
    getConnection() {
        return this.transporter;
    }
    recreateTransporter() {
        this.transporter = nodemailer.createTransport(espClientConfig);
    }
    isThereActualPoolConnection() {
        return this.transporter.isIdle;
    }
    async sendMail(mailOptions) {
        try {
            return await this.transporter.sendMail(mailOptions);
        }
        catch (error) {
            console.error("Erro no transporter, recriando...", error);
            this.recreateTransporter();
            return await this.transporter.sendMail(mailOptions);
        }
    }
}
export default EspClientConnection.getInstance();
