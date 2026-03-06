import { initTRPC } from '@trpc/server';
import _ from 'lodash';

const trpc = initTRPC.create();

const details = _.times(100, (i) => ({
  nick: `detail_${i + 1}`,
  name: `Detail ${i + 1}`,
  description: `description ${i + 1}`,
  text: _.times(100, (j) => `Text paragraph ${j + 1} of detail:${i + 1}`).join(''),
}));

export const trpcRouter = trpc.router({
  getDetails: trpc.procedure.query(() => {
    // throw new Error('Failed to fetch details  TEST');
    return { details: details.map((detail) => _.pick(detail, ['nick', 'name', 'description'])) };
  }),
});

export type TrpcRouter = typeof trpcRouter;
