import { z } from "zod";

const emailOptionsSchema = z.object({
  nome: z.string(),
  sobrenome: z.string(),
  telefone: z.string(),
  cidade: z.string(),
  bairro: z.string(),
  valorDaConta: z.string(),
  mensagem: z.string(),
})

export { emailOptionsSchema };