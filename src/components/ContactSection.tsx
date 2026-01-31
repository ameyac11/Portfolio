import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Globe, Instagram, Send, MapPin, Clock, MessageCircle, Zap, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Domain Restriction
    const allowedDomains = ['ameyac11.vercel.app', 'ameyac11.in', 'www.ameyac11.in'];
    if (!allowedDomains.includes(window.location.hostname)) {
      toast({
        title: "Submission Restricted",
        description: "This contact form can only be used from the official portfolio website.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const access_key = import.meta.env.VITE_WEB3_FORMS_API;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: access_key,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          botcheck: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default",
        });
      } else {
        setSubmitStatus('error');
        toast({
          title: "Submission Failed",
          description: result.message || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Error",
        description: "Network error. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      subtitle: "Send me an email",
      value: "ameyaccod171@gmail.com",
      href: "mailto:ameyaccod171@gmail.com",
      primary: true
    },
    {
      icon: <MapPin className="text-primary" />,
      title: "Location",
      subtitle: "Based in",
      value: "India",
      href: "#",
      primary: false
    },
    {
      icon: <Clock className="text-primary" />,
      title: "Response Time",
      subtitle: "Usually within",
      value: "24 hours",
      href: "#",
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/AmeyC171",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ameya-chopade11",
      color: "hover:text-blue-600"
    },
    {
      icon: <Mail size={24} />,
      name: "Email",
      url: "mailto:ameyaccod171@gmail.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements - Subtler/Neutral */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-primary rounded-full pulse-animation"></div>
            <span className="text-foreground font-medium">Let's connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-foreground to-transparent rounded-full"></div>
          <p className="text-muted-foreground text-center max-w-2xl mt-4">
            Ready to start your next project? Let's collaborate and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in stagger-3">
            <div className="mb-8">
              <h3 className="text-3xl font-bold font-heading mb-4">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                Whether you have a question or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`border border-border/50  bg-card hover:bg-secondary/50 transition-all duration-300 hover:scale-105 cursor-pointer group ${method.primary ? 'ring-1 ring-primary/20' : ''}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform text-primary">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold group-hover:text-primary transition-colors">{method.title}</p>
                        <p className="text-sm text-muted-foreground mb-1">{method.subtitle}</p>
                        <a
                          href={method.href}
                          className="text-sm font-medium text-foreground hover:text-primary hover:underline truncate block transition-colors"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Follow me on social media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-primary" />
                <h4 className="font-semibold">Quick Response Guaranteed</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent matters, feel free to call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in stagger-4">
            <Card className="border border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms Access Key is handled in handleSubmit */}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          required
                          disabled={isSubmitting}
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`bg-background/50 transition-all duration-300 ${focusedField === 'name' ? 'ring-2 ring-primary/20 border-primary' : 'border-input'}`}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          disabled={isSubmitting}
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`bg-background/50 transition-all duration-300 ${focusedField === 'email' ? 'ring-2 ring-primary/20 border-primary' : 'border-input'}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-background/50 transition-all duration-300 ${focusedField === 'subject' ? 'ring-2 ring-primary/20 border-primary' : 'border-input'}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-background/50 transition-all duration-300 resize-none ${focusedField === 'message' ? 'ring-2 ring-primary/20 border-primary' : 'border-input'}`}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 btn-modern ${submitStatus === 'success' ? 'bg-green-600 hover:bg-green-700' :
                      submitStatus === 'error' ? 'bg-red-600 hover:bg-red-700' :
                        'bg-primary hover:bg-primary/90'
                      }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle2 size={18} />
                          Message Sent!
                        </>
                      ) : submitStatus === 'error' ? (
                        <>
                          <XCircle size={18} />
                          Failed - Try Again
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )
                      }
                    </div>
                  </Button>
                </form>

                {/* Form Footer Removed */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
