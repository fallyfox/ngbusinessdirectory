// sendTestEmail.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL_FROM,
  to: "ozjosh128@gmail.com", // Replace with your email
  subject: "Test Email",
  text: "This is a test email to verify email sending.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
