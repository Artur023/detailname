import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import { applyTrpcToExpressApp } from './lib/trpc';
import { trpcRouter } from './router';

const expressApp = express();
expressApp.use(cors());
expressApp.get('/ping', (req, res) => {
  res.send('pong');
});
expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
);
applyTrpcToExpressApp(expressApp, trpcRouter);
expressApp.listen(3000, () => {
  console.info('Server is running on http://localhost:3000');
});
