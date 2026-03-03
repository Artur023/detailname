import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();
const details = [
  { nick: 'detail_1', name: 'Detail 1', description: 'description 1' },
  { nick: 'detail_2', name: 'Detail 2', description: 'description 2' },
  { nick: 'detail_3', name: 'Detail 3', description: 'description 3' },
  { nick: 'detail_4', name: 'Detail 4', description: 'description 4' },
  { nick: 'detail_5', name: 'Detail 5', description: 'description 5' },
];

export const trpcRouter = trpc.router({
  getDetails: trpc.procedure.query(() => {
    // throw new Error('Failed to fetch details  TEST');
    return details;
  }),
});

export type TrpcRouter = typeof trpcRouter;
