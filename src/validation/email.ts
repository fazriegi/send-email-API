import { z } from "zod";

export const sendEmailScheme = z.object({
  to: z.array(z.string()),
  cc: z.array(z.string().email()).optional(),
  bcc: z.array(z.string().email()).optional(),
  subject: z.string(),
  bodyText: z.string().optional(),
  bodyHtml: z.string().optional(),
  attachments: z.array(z.any()).optional(),
});
