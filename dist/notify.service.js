import instanceTransoprte from './transporterConnection.js';
export class NotificationService {
    transporter = instanceTransoprte;
    constructor() { }
    async sendEmail(emailOptions) {
        const email = await this.transporter.sendMail(emailOptions);
        console.log(email);
        return email;
    }
}
