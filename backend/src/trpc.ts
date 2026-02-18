import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();
const details = [
  { nick: 'detail_1', title: 'detail_1', description: 'description 1' },
  { nick: 'detail_2', title: 'detail_2', description: 'description 2' },
  { nick: 'detail_3', title: 'detail_3', description: 'description 3' },
  { nick: 'detail_4', title: 'detail_4', description: 'description 4' },
  { nick: 'detail_5', title: 'detail_5', description: 'description 5' },
];


export const trpcRouter = trpc.router({
  getDetails: trpc.procedure.query(() => {
    // throw new Error('Failed to fetch details  TEST');
    return details;
  }),
});

export type TrpcRouter = typeof trpcRouter;
