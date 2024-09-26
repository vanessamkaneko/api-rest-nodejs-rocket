import { app } from './app'
import { env } from './env'

app.listen({
  port: env.PORT,
}).then(() => {
  console.log('Server is running')
})

/*
Testes:
- Unitários: testam uma unidade da aplicação
- Integração: testam a comunicação entre duas ou mais unidades da aplicação
- E2E (ponta a ponta - das rotas ao bd): simulam um usuário operando em nossa aplicação

*/