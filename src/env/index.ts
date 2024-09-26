import  { config } from 'dotenv'
import { z } from 'zod'; // p/ validações de tipos e formatos de dados (no caso, p/ as variáveis de ambiente)

if(process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' }) // vitest atribui o NODE_ENV = test automaticamente, não precisando ter essa variável no .env.test 
} else {
  config() // irá pegar as variáveis do .env
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(), // verifica se o valor dessa variável é uma string
  PORT: z.number().default(3333) // se não tiver essa variável com um valor declarado, usa o 3333 por padrão
})

const _env = envSchema.safeParse(process.env) /* safeParse faz as validações dos valores de acordo c/ os das variáveis no .env e
diferente do parse, não lança um erro automático */

if(_env.success === false) {
  console.error('Invalid envinroment variables!', _env.error.format())

  throw new Error('Invalid envinroment variables!')
}

export const env = _env.data

// enum = "pode ser um entre algumas opções"