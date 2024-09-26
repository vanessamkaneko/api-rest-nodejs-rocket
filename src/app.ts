import fastify from 'fastify';
import cookie from '@fastify/cookie';

import { transactionsRoutes } from './routes/transactions';

export const app = fastify();

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions' //todas as rotas desse plugin "transactionsRoutes" iniciam com /transactions
})

// register -> método usado p/ registrar um plugin que contém todas as rotas com o mesmo path
