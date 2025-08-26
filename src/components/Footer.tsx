import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageCircle,
  Send
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Notes', href: '/notes' },
    { name: 'Exam Papers', href: '/exam-papers' },
    { name: 'My Library', href: '/library' },
    { name: 'Upload & Earn', href: '/upload' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 font-playfair font-bold text-xl">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="gradient-text">CampusCraft</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your ultimate destination for academic excellence. Access thousands of books, 
              notes, and exam papers from top institutions worldwide.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  to={social.href}
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">support@campuscraft.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Mumbai, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="text-sm"
                  required
                />
                <Button type="submit" className="w-full" size="sm">
                  <Send className="h-3 w-3 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* AI Chatbot Banner */}
        <div className="hero-card mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Need Help? Ask Our AI Assistant</h4>
                <p className="text-sm text-muted-foreground">Get instant answers to your questions 24/7</p>
              </div>
            </div>
            <Button className="btn-secondary">
              Chat Now
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
          {[
            { number: '15,000+', label: 'Resources Available' },
            { number: '5,000+', label: 'Happy Students' },
            { number: '500+', label: 'Partner Institutions' },
            { number: '98%', label: 'Success Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-muted-foreground">
          <p>© 2024 CampusCraft. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Made with ❤️ for students worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;