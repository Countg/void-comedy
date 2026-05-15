import nodemailer from 'nodemailer';

export async function sendEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASS,
    },
  });

  const mailOptions = {
    from: process.env.CONTACT_EMAIL,  // ← Fixed: send FROM your email
    to: process.env.CONTACT_EMAIL,
    replyTo: email,  // ← User's email goes here
    subject: `New message from ${name}`,
    text: message,
  };

  await transporter.sendMail(mailOptions);
}



