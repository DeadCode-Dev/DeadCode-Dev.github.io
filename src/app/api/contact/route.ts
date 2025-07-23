import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please fill in all fields" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASS,
      },
    });

    const mailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_RECEIVER,
      subject: `📩 New Contact Form Message from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
    <h2 style="text-align: center; color: #4A90E2;">📬 New Message Received</h2>
    <table style="width: 100%; margin-top: 20px;">
      <tr>
        <td style="padding: 10px; font-weight: bold;">Name:</td>
        <td style="padding: 10px;">${name}</td>
      </tr>
      <tr style="background-color: #f0f0f0;">
        <td style="padding: 10px; font-weight: bold;">Email:</td>
        <td style="padding: 10px;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
        <td style="padding: 10px; white-space: pre-line;">${message}</td>
      </tr>
    </table>

    <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #888;">
      This message was sent from your portfolio's website.
    </div>
  </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
