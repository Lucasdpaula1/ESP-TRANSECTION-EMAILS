import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { ImailOptions } from './Esp.interface';
import { espClientConfig } from './EspCLient.configs.js';

export class EspClientConnection {
  private static instance: EspClientConnection;
  private transporter: Transporter<SMTPTransport.SentMessageInfo>;

  private constructor() {
    console.log(espClientConfig)
    this.transporter = nodemailer.createTransport(espClientConfig);
  }

  static getInstance(): EspClientConnection {
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

  async sendMail(mailOptions: ImailOptions) {
    try {
      return await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Erro no transporter, recriando...", error);
      this.recreateTransporter();
      return await this.transporter.sendMail(mailOptions);
    }
  }
}
export default EspClientConnection.getInstance();
