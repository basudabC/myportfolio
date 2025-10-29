import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, message, topic, preferredDate } = body;

    console.log('📩 Received request:', { name, email, topic });

    // Validate required fields
    if (!name || !email || !topic) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simple email template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Meeting Request</h2>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Topic:</strong> ${topic}</p>
          ${preferredDate ? `<p><strong>Preferred Date:</strong> ${preferredDate}</p>` : ''}
          ${message ? `<p><strong>Message:</strong><br>${message}</p>` : ''}
        </div>
        
        <p style="color: #666; font-size: 14px;">
          Submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    console.log('📧 Sending email...');

    // Send email
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use Resend's default email for testing
      to: 'basudabcraj@gmail.com',
      replyTo: email,
      subject: `Meeting Request from ${name}`,
      html: emailHtml,
    });

    console.log('✅ Email sent successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Meeting request sent successfully!',
      emailId: data.id
    });

  } catch (error) {
    console.error('❌ Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message
      },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';