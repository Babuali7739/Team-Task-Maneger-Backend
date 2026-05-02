import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (mailOptions) => {
  try {
    const msg = {
      to: mailOptions.to,
      from: process.env.SENDER_EMAIL, // must be verified in SendGrid
      subject: mailOptions.subject,
      text: mailOptions.text,
      html: mailOptions.html,
    };

    const response = await sgMail.send(msg);
    console.log("Email sent:", response[0].statusCode);
  } catch (error) {
    console.error(
      "SendGrid Error:",
      error.response?.body || error.message
    );
    throw error;
  }
};