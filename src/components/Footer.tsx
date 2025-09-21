import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Custom Bags', href: '#contact' },
    { name: 'Get Quote', href: '#contact' },
  ];

  const services = [
    { name: 'D-Cut Bags', href: '#products' },
    { name: 'Loop Handle Bags', href: '#products' },
    { name: 'Box Type Bags', href: '#products' },
    { name: 'Custom Printing', href: '#contact' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Shipping Info', href: '/shipping' },
  ];

  return (
    <footer className="bg-forest-green text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-green">
                  <span className="text-sm font-bold text-forest-green">BH</span>
                </div>
                <span className="text-xl font-bold">Bags Hub</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Your trusted partner for eco-friendly non-woven bags. Promoting sustainable living 
                through innovative, high-quality packaging solutions for businesses of all sizes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+92 321 4075755</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>info@bagshub.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Industrial Zone, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Our Products</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Policies */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Stay Updated</h4>
              <p className="text-primary-foreground/80 text-sm">
                Get the latest updates about our eco-friendly products and sustainability initiatives.
              </p>
              <Button variant="secondary" className="w-full">
                Subscribe to Newsletter
              </Button>
              <div className="space-y-2">
                <h5 className="font-medium text-sm">Policies</h5>
                <ul className="space-y-2">
                  {policies.map((policy, index) => (
                    <li key={index}>
                      <a
                        href={policy.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs"
                      >
                        {policy.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 Bags Hub. All rights reserved. Designed for a sustainable future.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-primary-foreground/80">Follow us:</span>
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" className="h-8 w-8 text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="pb-8">
          <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
            <h5 className="font-medium mb-2">Business Hours</h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-primary-foreground/80">
              <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 9:00 AM - 2:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;