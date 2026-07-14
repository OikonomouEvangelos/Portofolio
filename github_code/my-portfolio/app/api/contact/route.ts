import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email,
      subject: `Νέο μήνυμα από το Portfolio - ${name}`,
      text: `Όνομα: ${name}\nEmail: ${email}\n\nΜήνυμα:\n${message}`,
    };

    // Αναγκάζουμε το Next.js να περιμένει την απάντηση της Google
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    return NextResponse.json({ message: 'Επιτυχής αποστολή' }, { status: 200 });
  } catch (error) {
    console.error("Σφάλμα API:", error);
    return NextResponse.json({ error: 'Σφάλμα αποστολής' }, { status: 500 });
  }
}