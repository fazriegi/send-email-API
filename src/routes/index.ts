import express from "express";
import { EmailController } from "../controller/email-controller";

const emailController = new EmailController();
const router = express.Router();

router.post("/email", emailController.SendEmail);

export default router;
