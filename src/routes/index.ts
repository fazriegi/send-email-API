import express from "express";
import { EmailController } from "../controller/email-controller";
import multer from "multer";

var upload = multer({ dest: "tmp/" });

const emailController = new EmailController();
const router = express.Router();

router.post("/email", upload.array("attachments"), emailController.SendEmail);

export default router;
