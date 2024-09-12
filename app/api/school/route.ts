import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const {
    fname,
    lname,
    email,
    pnumber,
    eduqualification,
    state,
    studybudget,
    title,
  } = data;
  try {
    // Create a transporter using your email service SMTP details
    const transporter = nodemailer.createTransport({
      service: "Gmail", // You can use Gmail or another email service provider
      auth: {
        user: process.env.EMAIL_USERNAME, // your email address
        pass: process.env.EMAIL_PASSWORD, // your email password or app password
      },
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // from your email
      to: process.env.EMAIL_RECIPIENT, // recipient email (YOUR email)
      subject: `New Contact Form Submission from ${fname} ${lname} regarding ${title}`,
      text: `
      You have received a new message from your ${title} contact form.

      First Name: ${fname}

      Last Name: ${lname}

      Email: ${email}

      Phone Number: ${pnumber}

      Highest Education Qualification: ${eduqualification}

      State: ${state}
      
      Study Budget: ${studybudget}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
