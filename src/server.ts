import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import EmailTransporter from "./libs/sender";
import { emailOptionsSchema } from "./data/schemas/email";
import { getTemplate } from "./utils/templates/emailTemplate";
import { getTextTemplate } from "./utils/templates/textTemplate";
import { getCurrentDate, limparTelefone } from "./utils/utils";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

// Routes
app.get("/", (request: Request, response: Response) => {
  response.send("hello world");
});

app.post("/email/send", async (request: Request, response: Response) => {
  try {
    const {
      nome,
      sobrenome,
      telefone,
      cidade,
      bairro,
      valorDaConta,
      mensagem,
    } = emailOptionsSchema.parse(request.body);

    const { data, hora } = getCurrentDate();
    let telefoneLimpo = limparTelefone(telefone);

    const htmlBody = getTemplate({
      nome,
      sobrenome,
      data,
      hora,
      telefone,
      cidade,
      bairro,
      valorDaConta,
      mensagem,
      telefoneLimpo,
    });

    const mailOptions1 = {
      from: process.env.SENDER_FROM,
      to: process.env.SENDER_TO,
      subject: "Orçamento",
      text: getTextTemplate({
        nome,
        sobrenome,
        data,
        hora,
        telefone,
        cidade,
        bairro,
        valorDaConta,
        mensagem,
      }),
      html: htmlBody,
    };

    console.log(`enviando ${mailOptions1.from} para ${mailOptions1.to} ...`);
    await EmailTransporter.sendMail(mailOptions1);
    console.log("enviado");

    // Corpo do e-mail
    const mailOptions2 = {
      from: process.env.SENDER_FROM,
      to: process.env.SENDER_FROM,
      subject: "Orçamento",
      text: getTextTemplate({
        nome,
        sobrenome,
        data,
        hora,
        telefone,
        cidade,
        bairro,
        valorDaConta,
        mensagem,
      }),
      html: htmlBody,
    };
    console.log(`enviando ${mailOptions2.from} para ${mailOptions2.to} ...`);
    await EmailTransporter.sendMail(mailOptions2);
    response.status(200).send("Sucesso!");
  } catch (error) {
    console.error(error);
    response.status(500).send("Deu ruim!");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
