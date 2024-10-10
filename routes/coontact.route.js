// contactRoute.js
import express from 'express'
import nodemailer from 'nodemailer'
const router = express.Router();

router.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Set up transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or any other email provider
      auth: {
        user: process.env.EMAIL, // your email
        pass: process.env.PASSWORD, // your email password or app-specific password
      },
    });

    // Set up mail options
    const mailOptions  = {
      from: email, // sender address
      to: process.env.RECEIVER_EMAIL, // receiver email
      subject: `Contact form submission from ${name}`,
      text: message,
      html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p>
            <p>${message}</p>`,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Email failed to send.' });
  }
});

export default router
