import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validation des données
    if (!name || typeof name !== 'string' || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Nom invalide' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Message invalide' },
        { status: 400 }
      );
    }

    // Sanitization des entrées
    const sanitizedName = name.replace(/<[^>]*>/g, '');
    const sanitizedEmail = email.replace(/<[^>]*>/g, '');
    const sanitizedMessage = message.replace(/<[^>]*>/g, '');

    // Créer un transporteur d'email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configurer l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'remy.gouhier.pro@gmail.com', // Votre adresse email
      subject: `Nouveau message de contact de ${sanitizedName}`,
      text: `
        Nom: ${sanitizedName}
        Email: ${sanitizedEmail}
        Message: ${sanitizedMessage}
      `,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
} 