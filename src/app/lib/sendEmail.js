// utils/sendEmail.js
import nodemailer from 'nodemailer';

export async function sendEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASS, // Use app password if Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: `New message from ${name}`,
    text: message,
  };

  await transporter.sendMail(mailOptions);
}
