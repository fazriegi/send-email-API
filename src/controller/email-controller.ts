import { Request, Response } from "express";
import { EmailService } from "../service/email-service";
import { sendEmailScheme } from "../validation/email";

export class EmailController {
  async SendEmail(req: Request, res: Response): Promise<Response> {
    const validated = sendEmailScheme.safeParse({
      ...req.body,
      attachments: req.files,
    });

    if (!validated.success) {
      return res.status(422).send({
        message: "Request validation error",
        data: validated.error.flatten().fieldErrors,
      });
    }

    const emailService = new EmailService();
    const isSuccess = await emailService.SendEmail(validated.data);

    if (isSuccess) {
      return res.send({ message: "Email sent" });
    }

    return res.status(500).send({ message: "Failed to send email" });
  }
}
