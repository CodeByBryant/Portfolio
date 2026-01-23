"use client";

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Send, MessageSquare, Calendar } from "lucide-react"

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "codebybryant@gmail.com", // TODO: Replace with actual email
    href: "mailto:codebybryant@gmail.com"
  },
 /* {
    icon: Phone,
    label: "",
    value: "", // TODO: Replace with actual phone
    href: ""
  },*/
  {
    icon: MapPin,
    label: "Location",
    value: "California, US", // TODO: Replace with actual location
    href: "#"
  }
]

export default function ContactSection() {
  const { toast } = useToast()
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    console.log(`Form updated: ${field} = ${value}`)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const emailAddress = "codebybryant@gmail.com"
    const subject = form.subject || "Contact from Portfolio Website"
    const body = `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
    
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
    
    toast({
      title: "Opening Email Client",
      description: "Your default email app will open with a pre-filled message.",
    })
    
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const isFormValid = form.name && form.email && form.message

  return (
    <section className="py-24 px-6 bg-background" data-testid="contact-section">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="What's this about?"
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid}
                  className="w-full"
                  data-testid="button-submit-contact"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Availability */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-${info.label.toLowerCase()}`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                    Available for new projects
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  I'm currently accepting new client work and interesting collaboration opportunities.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>🚀 Response time: Usually within 24 hours</p>
                  <p>⏰ Timezone: PST (UTC-8)</p>
                  <p>📅 Best time to reach: 9 AM - 6 PM PST</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-auto p-4 flex-col space-y-2"
                onClick={() => console.log('Schedule call clicked')}
                data-testid="button-schedule-call"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Schedule Call</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex-col space-y-2"
                onClick={() => console.log('Download resume clicked')}
                data-testid="button-download-resume"
              >
                <Send className="w-5 h-5" />
                <span className="text-sm">Download Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}