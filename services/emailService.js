import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

// Set API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const msg = {
      to,
      from: process.env.SENDER_EMAIL, // must be verified in SendGrid
      subject,
      text,
      html,
    };

    const response = await sgMail.send(msg);

    console.log("✅ Email sent:", response[0].statusCode);
    return true;
  } catch (error) {
    console.error(
      "❌ SendGrid Error:",
      error.response?.body || error.message
    );
    return false;
  }
};