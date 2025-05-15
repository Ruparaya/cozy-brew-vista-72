
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="cafe-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <Separator className="w-16 h-1 bg-cafe-green mx-auto mb-4" />
          <p className="section-subtitle">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-playfair font-semibold text-cafe-brown mb-4">
                Find Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cafe-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-cafe-brown">Address</h4>
                    <p className="text-cafe-brown-light">
                      123 Coffee Street,<br />
                      Brew City, BC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cafe-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-cafe-brown">Phone</h4>
                    <p className="text-cafe-brown-light">(123) 456-7890</p>
                    <p className="text-sm text-cafe-brown-light">For table reservations, please call us</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cafe-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-cafe-brown">Email</h4>
                    <p className="text-cafe-brown-light">hello@cozycoffee.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-cafe-green mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-cafe-brown">Opening Hours</h4>
                    <div className="text-cafe-brown-light">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 9:00 PM</p>
                      <p>Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-cafe-brown mb-4">
                Our Location
              </h3>
              <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215664816195!2d-73.98784692404537!3d40.75856907138659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1683215775759!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Café location"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cafe-cream p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair font-semibold text-cafe-brown mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium text-cafe-brown">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white border-cafe-brown/20 focus-visible:ring-cafe-green"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium text-cafe-brown">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-white border-cafe-brown/20 focus-visible:ring-cafe-green"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium text-cafe-brown">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  className="bg-white border-cafe-brown/20 focus-visible:ring-cafe-green"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium text-cafe-brown">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="bg-white border-cafe-brown/20 focus-visible:ring-cafe-green min-h-32"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-cafe-brown text-white hover:bg-cafe-brown-light w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
