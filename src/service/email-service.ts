import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
import { SMTP_CONFIG } from "../libs/utils";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { ISendEmail } from "../models/email";

export class EmailService {
  async SendEmail(props: ISendEmail): Promise<boolean> {
    const attachments: Attachment[] = [];
    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.smtp_host,
      port: Number(SMTP_CONFIG.smtp_port),
      secure: true,
      auth: {
        user: SMTP_CONFIG.smtp_user,
        pass: SMTP_CONFIG.smtp_password,
      },
    } as SMTPTransport.Options);

    try {
      const info = await transporter.sendMail({
        from: SMTP_CONFIG.smtp_user,
        to: props.to,
        cc: props.cc,
        bcc: props.bcc,
        subject: props.subject,
        text: props.bodyText,
        html: props.bodyHtml,
        attachments,
      });

      console.log(`Response: ${info.response}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
