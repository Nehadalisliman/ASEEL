import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../App';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المتجر', path: '/shop' },
    { name: 'قصتنا', path: '/about' },
    { name: 'المدونة', path: '/blog' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-white">
          ASSEE<span className="text-gold-500">L</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                location.pathname === link.path ? 'text-gold-500' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/login" className="text-white hover:text-gold-500 transition-colors">
            <User size={22} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" className="text-white hover:text-gold-500 transition-colors relative">
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-300 pt-24 px-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-xl font-medium text-white hover:text-gold-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;