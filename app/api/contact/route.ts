import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

// Explicitly set Node.js runtime to avoid Edge runtime issues
export const runtime = "nodejs"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  institution: z.string().min(2, { message: "Please enter your institution or organization." }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
  projectDescription: z.string().min(10, { message: "Project description must be at least 10 characters." }),
})

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json()

    // Validate form data
    const result = formSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data", details: result.error.format() }, { status: 400 })
    }

    const { name, email, institution, serviceType, projectDescription } = result.data

    // Create Nodemailer transporter with simplified configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.gmail.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "465"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Disable DNS lookups to avoid the error
      ignoreTLS: process.env.NODE_ENV === "development",
      // For Gmail specifically, you can use direct configuration
      // This helps avoid DNS lookups in some environments
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "your-email@example.com",
      to: process.env.EMAIL_TO || "your-email@example.com",
      subject: `New Research Consultation Request: ${serviceType}`,
      text: `
        Name: ${name}
        Email: ${email}
        Institution: ${institution}
        Service Type: ${serviceType}
        
        Project Description:
        ${projectDescription}
      `,
      html: `
        <h2>New Research Consultation Request</h2>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <h3>Project Description:</h3>
        <p>${projectDescription}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to the client
    const confirmationMailOptions = {
      from: process.env.EMAIL_FROM || "your-email@example.com",
      to: email,
      subject: "Your Research Consultation Request Has Been Received",
      text: `
        Dear ${name},
        
        Thank you for submitting your research consultation request. I have received your inquiry regarding ${serviceType} services.
        
        I will review your project details and get back to you within 24-48 hours to discuss how I can best support your research needs.
        
        Best regards,
        Academic Research Consultant
      `,
      html: `
        <h2>Thank You for Your Research Consultation Request</h2>
        <p>Dear ${name},</p>
        <p>Thank you for submitting your research consultation request. I have received your inquiry regarding <strong>${serviceType}</strong> services.</p>
        <p>I will review your project details and get back to you within 24-48 hours to discuss how I can best support your research needs.</p>
        <p>Best regards,<br>Academic Research Consultant</p>
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email", details: (error as Error).message }, { status: 500 })
  }
}
