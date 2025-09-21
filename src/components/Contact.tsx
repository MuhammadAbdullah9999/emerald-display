import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    bagType: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'm interested in your eco-friendly bags.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Bag Type: ${formData.bagType}
Quantity: ${formData.quantity}
Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=923214075755&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '', email: '', phone: '', company: '', bagType: '', quantity: '', message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+92 321 4075755", "+92 314 4000705"],
      action: "tel:+923214075755"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@bagsclub.com", "sales@bagsclub.com"],
      action: "mailto:info@bagsclub.com"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Manufacturing Unit", "Industrial Zone, Pakistan"],
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Ready to Go Eco-Friendly?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a custom quote for your business needs. We'll help you find the perfect sustainable packaging solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-eco">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Request a Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number *</label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company Name</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Bag Type</label>
                      <Input
                        value={formData.bagType}
                        onChange={(e) => setFormData({...formData, bagType: e.target.value})}
                        placeholder="D-Cut, Loop Handle, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Estimated Quantity</label>
                      <Input
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        placeholder="1000 pieces"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Additional Requirements</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your specific requirements, colors, printing needs, etc."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Quote Request via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-eco">
                        <IconComponent className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick WhatsApp */}
            <Card className="bg-gradient-eco text-primary-foreground shadow-eco">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Quick Support</h4>
                <p className="text-sm mb-4 text-primary-foreground/90">
                  Need immediate assistance? Chat with us on WhatsApp!
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=923214075755', '_blank')}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;