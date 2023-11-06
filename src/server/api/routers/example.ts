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
  saveLead: publicProcedure
    .input(z.object({ ctaOption: z.string().optional(), url: z.string().optional(), name: z.string(), email: z.string(), phoneNumber: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const lead =  {
          email: input.email,
          phone: input.phoneNumber,
          avatarUrl: "",
          url: input.url 
        }

      
      const scriptURL = 'https://script.google.com/macros/s/AKfycbw72hugYvfvgDz18Ce4yxv9fU0XMtTcSmsgNV4My6rol2vvtN89OqiBlp7yGgDpAfHoDw/exec'
      const formData = new FormData();
      formData.append("name", input.name)
      formData.append("email", input.email)
      formData.append("phone", input.phoneNumber)
      formData.append('avatarUrl', lead.avatarUrl || "")
      formData.append('data', new Date().toISOString() || "")
      formData.append('tag', "bf")
      formData.append('url', input.url || "")
      formData.append('cta', input.ctaOption || "")
      const gSheets = await fetch(scriptURL, { method: 'POST', headers: {
      }, body: formData})
      console.log(lead)


      return lead;
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
