function getTextTemplate({
  nome,
  sobrenome,
  data,
  hora,
  telefone,
  cidade,
  bairro,
  valorDaConta,
  mensagem,
}: {
  nome: string;
  sobrenome: string;
  data: string;
  hora: string;
  telefone: string;
  cidade: string;
  bairro: string;
  valorDaConta: string;
  mensagem: string;
}) {
  return `
Nome: ${nome} ${sobrenome}
Data: ${data} ${hora}
Telefone: ${telefone}
Cidade: ${cidade}
Bairro: ${bairro}
Valor da Conta: ${valorDaConta}
Mensagem: ${mensagem}
`
}

export { getTextTemplate };
