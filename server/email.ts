// Email service using SendGrid - requires SENDGRID_API_KEY environment variable
// This is where you'll integrate SendGrid when you add your API key

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface EmailResult {
  success: boolean;
  error?: string;
}

/**
 * Sends a contact form email using SendGrid
 * TODO: Uncomment and configure SendGrid integration when you add your API key
 * 
 * Steps to complete:
 * 1. Add your SENDGRID_API_KEY to environment variables
 * 2. Uncomment the SendGrid code below
 * 3. Replace "your-email@domain.com" with your actual email
 */
export async function sendContactEmail(data: ContactFormData): Promise<EmailResult> {
  try {
    // TODO: Uncomment when you have SendGrid API key
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'your-email@domain.com', // Replace with your email
      from: 'your-email@domain.com', // Replace with your verified SendGrid email
      subject: `Portfolio Contact: ${data.subject}`,
      text: `
        New contact form message:
        
        Name: ${data.name}
        Email: ${data.email}
        Subject: ${data.subject}
        
        Message:
        ${data.message}
      `,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    };

    await sgMail.send(msg);
    */
    
    // For now, just log the email data (remove this when SendGrid is set up)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      subject: data.subject || 'No subject',
      message: data.message
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}