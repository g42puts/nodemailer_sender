function getCurrentDate(): { data: string; hora: string } {
  const newDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const [data, hora] = newDate.toLocaleDateString("pt-BR", options).split(",");

  return { data, hora };
}

function limparTelefone(telefone: string): string {
  // Utiliza uma expressão regular para remover todos os caracteres não numéricos e espaços em branco
  const telefoneLimpo = telefone.replace(/\D/g, ""); // \D corresponde a qualquer caractere que não seja dígito

  return telefoneLimpo;
}

export { getCurrentDate, limparTelefone };