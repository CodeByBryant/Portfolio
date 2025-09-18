import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  subject: z.string().max(200, "Subject too long").optional(),
  message: z.string().min(1, "Message is required").max(2000, "Message too long")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);

      // Send the email (will just log for now until you add SendGrid API key)
      const emailResult = await sendContactEmail(validatedData);

      if (emailResult.success) {
        // Store contact form submission in memory (you can add database storage later)
        const contactSubmission = {
          ...validatedData,
          submittedAt: new Date().toISOString(),
          id: Date.now().toString() // Simple ID for now
        };
        
        // TODO: Store in database if you want to keep contact form submissions
        console.log('Contact form stored:', contactSubmission);

        res.status(200).json({ 
          success: true, 
          message: "Thank you for your message! I'll get back to you soon." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later.",
          error: emailResult.error 
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred. Please try again later." 
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    // TODO: Replace with your actual resume file path
    // For now, return a message about where to put your resume
    res.status(404).json({
      message: "Resume not found. Add your resume file to the server/assets/ directory and update this endpoint."
    });
    
    /* When you add your resume file, use this code:
    const resumePath = path.join(__dirname, 'assets', 'Bryant_Ejorh_Resume.pdf');
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, 'Bryant_Ejorh_Resume.pdf', (err) => {
        if (err) {
          console.error('Resume download error:', err);
          res.status(500).json({ message: 'Error downloading resume' });
        }
      });
    } else {
      res.status(404).json({ message: 'Resume file not found' });
    }
    */
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "ok", 
      timestamp: new Date().toISOString() 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
