import { useState } from "react";
import { Mail, Phone, MapPin, Download, Linkedin, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import TerminalWindow from "./terminal-window";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/api/resume/download");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Shashwat_Sharma_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        toast({
          title: "Resume downloaded successfully!",
        });
      } else {
        throw new Error("Failed to download resume");
      }
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Unable to download resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-vscode-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-vscode-comment">// </span>
          <span className="text-white">Get In Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <TerminalWindow>
              <h3 className="text-xl font-bold mb-4 text-vscode-blue">Contact Information</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-vscode-green" />
                  <span className="text-vscode-text">shashwatsharma111@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-vscode-cyan" />
                  <span className="text-vscode-text">+91-9329826754</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-vscode-orange" />
                  <span className="text-vscode-text">Pune, Maharashtra</span>
                </div>
              </div>
            </TerminalWindow>
            
            {/* Social Links */}
            <TerminalWindow>
              <h3 className="text-xl font-bold mb-4 text-vscode-cyan">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/shashwatsharma1211/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-vscode-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Shashwat1112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-vscode-secondary hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors border border-gray-600"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </TerminalWindow>
            
            {/* Resume Download */}
            <TerminalWindow>
              <h3 className="text-xl font-bold mb-4 text-vscode-green">Resume</h3>
              <p className="text-gray-300 mb-4">Download my complete resume for detailed information about my experience and skills.</p>
              <Button 
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className="bg-vscode-green hover:bg-green-600 text-white font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                {isDownloading ? "Downloading..." : "Download Resume"}
              </Button>
            </TerminalWindow>
          </div>
          
          {/* Contact Form */}
          <TerminalWindow>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-vscode-cyan">Send Message</h3>
              <span className="text-xs text-gray-400">contact_form.js</span>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-mono text-vscode-comment">// Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Enter your name"
                          className="bg-vscode-dark border-gray-600 text-vscode-text focus:border-vscode-blue"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-mono text-vscode-comment">// Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          placeholder="Enter your email"
                          className="bg-vscode-dark border-gray-600 text-vscode-text focus:border-vscode-blue"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-mono text-vscode-comment">// Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Enter subject"
                          className="bg-vscode-dark border-gray-600 text-vscode-text focus:border-vscode-blue"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-mono text-vscode-comment">// Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          placeholder="Enter your message"
                          className="bg-vscode-dark border-gray-600 text-vscode-text focus:border-vscode-blue resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-vscode-blue hover:bg-blue-600 text-white font-semibold"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
