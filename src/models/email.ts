import { IMulterFile } from "./types";

export interface ISendEmail {
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  bodyHtml?: string;
  attachments?: IMulterFile[];
}
