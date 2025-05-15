
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      <div className="cafe-container text-center space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Where Every Sip Tells a Story
        </h1>
        <p className="text-xl md:text-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Discover the perfect blend of cozy ambiance and exceptional coffee at our little corner of paradise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            className="bg-cafe-cream text-cafe-brown hover:bg-white rounded-full text-lg px-8 py-6"
            asChild
          >
            <a href="#menu">
              View Our Menu
            </a>
          </Button>
          <Button 
            className="bg-transparent border-2 border-cafe-cream hover:bg-cafe-cream/20 rounded-full text-lg px-8 py-6"
            variant="outline"
            asChild
          >
            <a href="#contact">
              Find Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
