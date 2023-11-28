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
      const mailchimpUrl = 'https://lactoflow.us13.list-manage.com/subscribe/post?u=f2c713cb04fc024e126ae662d&amp;id=96c32b9825&amp;f_id=0034ede7f0'

      const formData = new FormData();
      formData.append("name", input.name)
      formData.append("email", input.email)
      formData.append("phone", input.phoneNumber)
      formData.append('avatarUrl', lead.avatarUrl || "")
      formData.append('data', new Date().toISOString() || "")
      formData.append('tag', "pv")
      formData.append('url', input.url || "")
      formData.append('cta', input.ctaOption || "")
      const gSheets = await fetch(scriptURL, { method: 'POST', headers: {
      }, body: formData})
      const mcForm = new FormData();
      mcForm.append("FNAME", input.name)
      mcForm.append("EMAIL", input.email)
      mcForm.append("PHONE", input.phoneNumber)
      mcForm.append("tags", "7067103")
      mcForm.append("b_f2c713cb04fc024e126ae662d_96c32b9825", "")

      const mailChimpSub = await fetch(mailchimpUrl, { method: 'POST', headers: {
      }, body: mcForm})


      console.log(lead)


      return lead;
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
