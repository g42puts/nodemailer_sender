import { GetTemplateProps } from "./types";

function getTemplate({
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
}: GetTemplateProps) {
  return `
  <!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
    }
    .body-container {
      padding: 4px;
    }
    .body-label {
      font-weight: 600;
    }
    .body-field {
      font-weight: normal;
    }
    .contato {
      margin-top: 20px;
    }
    </style>
  </head>
  <body>
    <div class="email-body" style="width: 100%; font-size: 16px;">
      <div class="body-container">
        <span class="body-label">Nome: </span>
        <span class="body-field">${nome} ${sobrenome}</span>
      </div>
      <div class="body-container">
        <span class="body-label">Data: </span>
        <span class="body-field">${data} | ${hora}</span>
      </div>
      <div class="body-container">
        <span class="body-label">Telefone: </span>
        <span class="body-field">${telefone}</span>
      </div>
      <div class="body-container">
        <span class="body-label">Cidade: </span>
        <span class="body-field">${cidade}</span>
      </div>
      <div class="body-container">
        <span class="body-label">Bairro: </span>
        <span class="body-field">${bairro}</span>
      </div>
      <div class="body-container">
        <span class="body-label">Valor da Conta: </span>
        <span class="body-field">${valorDaConta}</span>
      </div>
      <div class="body-container">
        <span class="body-label">Mensagem: </span>
        <span class="body-field">${mensagem}</span>
      </div>
    </div>
    <div class="contato">
      <span>Entrar em contato com o cliente via
        <a
          href="https://api.whatsapp.com/send?phone=55${telefoneLimpo}&text=Ol%C3%A1%20%7B${nome}%7D%2C%20meu%20nome%20%C3%A9%20Adjailson%2C%20sou%20o%20representante%20da%20Arco%20Solar.%20Estou%20entrando%20em%20contato%20com%20voc%C3%AA%20a%20respeito%20do%20or%C3%A7amento%20solicitado."
          class="whatsapp"
          style="font-size: 18px; text-decoration: none; font-weight: 700; letter-spacing: 1px;">
          Whatsapp
        </a>
      </span>
    </div>
  </body>
</html>`;
}

export { getTemplate };
