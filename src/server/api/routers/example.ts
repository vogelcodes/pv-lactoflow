import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.lead.findMany();
  }),
  saveLead: publicProcedure.input(z.object(
    {email: z.string().email(), phoneNumber: z.string()}
  )).mutation(async ({ctx, input }) => {
      const lead = await ctx.prisma.lead.create({
        data: {
          email: input.email,
          phone: input.phoneNumber
        }
      }
        
      )
      return lead
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
