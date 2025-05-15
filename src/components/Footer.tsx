
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InstagramFeed from './InstagramFeed';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cafe-brown text-white">
      <div className="cafe-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Cozy Coffee</h3>
            <p className="text-cafe-cream/80">
              A place where coffee dreams come true and conversations flow as smoothly as our espresso.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-cafe-cream transition-colors">
                <Instagram />
              </a>
              <a href="mailto:hello@cozycoffee.com" aria-label="Email" className="hover:text-cafe-cream transition-colors">
                <Mail />
              </a>
              <a href="tel:+1234567890" aria-label="Phone" className="hover:text-cafe-cream transition-colors">
                <Phone />
              </a>
            </div>
          </div>

          {/* Opening hours */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-medium">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-medium">Contact Us</h4>
            <address className="not-italic space-y-2">
              <p className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>123 Coffee Street,<br />Brew City, BC 12345</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span>(123) 456-7890</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <span>hello@cozycoffee.com</span>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-medium">Newsletter</h4>
            <p className="text-cafe-cream/80">
              Subscribe to get special offers and cafe updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-cafe-cream"
                required
              />
              <Button className="bg-cafe-cream text-cafe-brown hover:bg-cafe-cream/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="mt-12">
          <h4 className="font-playfair text-xl font-medium mb-4">Follow Our Instagram</h4>
          <InstagramFeed />
        </div>

        <Separator className="my-8 bg-white/20" />
        
        {/* Copyright */}
        <div className="text-center text-cafe-cream/70 text-sm">
          <p>&copy; {currentYear} Cozy Coffee Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
