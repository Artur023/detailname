import _ from 'lodash';
import { models } from '../../lib/models';
import { trpc } from '../../lib/trpc';

export const getModelsTrpcRoute = trpc.procedure.query(() => {
  // throw new Error('Failed to fetch models  TEST');
  return { models: models.map((model) => _.pick(model, ['nick', 'name', 'description'])) };
});
