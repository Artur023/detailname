import { trpc } from '../lib/trpc';
import { getModelTrpcRoute } from './getModel';
import { getModelsTrpcRoute } from './getModels';

export const trpcRouter = trpc.router({
  getModel: getModelTrpcRoute,
  getModels: getModelsTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
