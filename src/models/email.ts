import { IMulterFile } from "./types";

export interface ISendEmail {
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  bodyText?: string;
  bodyHtml?: string;
  attachments?: IMulterFile[];
}
