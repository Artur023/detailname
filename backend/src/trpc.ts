import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();
const details = [
  { nick: 'detail_1', name: 'detail_1', description: 'description 1' },
  { nick: 'detail_2', name: 'detail_2', description: 'description 2' },
  { nick: 'detail_3', name: 'detail_3', description: 'description 3' },
  { nick: 'detail_4', name: 'detail_4', description: 'description 4' },
  { nick: 'detail_5', name: 'detail_5', description: 'description 5' },
];

export const trpcRouter = trpc.router({
  getDetails: trpc.procedure.query(() => {
    // throw new Error('Failed to fetch details  TEST');
    return details;
  }),
});


export type TrpcRouter = typeof trpcRouter;