import dotenv from "dotenv";

dotenv.config();

export const APP_PORT = process.env["APP_PORT"] || 80;

export const SMTP_CONFIG = {
  smtp_host: process.env["SMTP_HOST"] || "",
  smtp_port: process.env["SMTP_PORT"] || "",
  smtp_user: process.env["SMTP_USER"] || "",
  smtp_password: process.env["SMTP_PASSWORD"] || "",
};
