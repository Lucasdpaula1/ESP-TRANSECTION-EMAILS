import express from 'express';
import './configdotenv.js';
import { NotificationService } from './notify.service.js';
const app = express();
app.use(express.json());
app.post('/send-emails-esp', async (req, res) => {
    const notificatio = new NotificationService();
    const body = req.body;
    await notificatio.sendEmail(body);
    res.send('email enviado com sucesso');
});
app.listen(3000, () => {
    console.log('minha api está rodando na porta 3000');
});
