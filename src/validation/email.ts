import { z } from "zod";

export const sendEmailScheme = z.object({
  from: z.string(),
  to: z.array(z.string()),
  cc: z.array(z.string().email()).optional(),
  bcc: z.array(z.string().email()).optional(),
  subject: z.string(),
  bodyHtml: z.string().optional(),
  attachments: z.array(z.any()).optional(),
});
