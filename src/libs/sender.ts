import nodemailer, { SendMailOptions, Transporter } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

class EmailTransporter {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS,
      },
    });
  }

  async sendMail(options: SendMailOptions) {
    await this.transporter.sendMail(options, (error, info) => {
      if (error) {
        console.log("Erro ao enviar e-mail:", error);
        return;
      } else {
        console.log("E-mail enviado com sucesso: 1", info.response);
        return;
      }
    });
  }
}

export default new EmailTransporter();
