import z from 'zod';
import { models } from '../../lib/models';
import { trpc } from '../../lib/trpc';

export const getModelTrpcRoute = trpc.procedure.input(z.object({ modelNick: z.string() })).query(({ input }) => {
  const model = models.find((d) => d.nick === input.modelNick);

  return { model: model || null };
});
