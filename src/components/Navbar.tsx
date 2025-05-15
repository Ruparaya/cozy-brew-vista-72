
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavbarProps = {
  transparent?: boolean;
};

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const bgClass = transparent && !scrolled 
    ? 'bg-transparent' 
    : 'bg-cafe-cream/95 backdrop-blur-sm shadow-sm';

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        bgClass
      )}
    >
      <nav className="cafe-container flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="#" className="font-playfair text-2xl font-bold text-cafe-brown">
            Cozy Coffee
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-cafe-brown hover:text-cafe-brown-light transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-cafe-brown text-white hover:bg-cafe-brown-light">
            Reserve a Table
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="text-cafe-brown"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cafe-cream animate-fade-in py-4">
          <div className="cafe-container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium py-2 text-cafe-brown hover:text-cafe-brown-light"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-cafe-brown text-white hover:bg-cafe-brown-light w-full mt-2">
              Reserve a Table
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
