import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
import { SMTP_CONFIG } from "../libs/utils";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { ISendEmail } from "../models/email";
import { File } from "../libs/file";

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

    if (props.attachments) {
      for (const attachment of props.attachments) {
        const attachmentPath = File.store(attachment, "email");
        const data: Attachment = {
          filename: attachment.originalname,
          path: attachmentPath,
        };
        attachments.push(data);
      }
    }

    try {
      const info = await transporter.sendMail({
        from: props.from,
        to: props.to,
        cc: props.cc,
        bcc: props.bcc,
        subject: props.subject,
        html: props.bodyHtml,
        attachments,
      });

      attachments.forEach((item) => {
        File.destroy(String(item.path));
      });

      console.log(`Response: ${info.response}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
