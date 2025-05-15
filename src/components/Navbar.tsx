"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface NavbarProps {
  transparent?: boolean;
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { icon: "🏠", label: "Nosotros", href: "#about" },
  { icon: "⚙️", label: "Servicios", href: "#services" },
  { icon: "💻", label: "Tecnologías", href: "#technologies" },
  { icon: "📂", label: "Proyectos", href: "#projects" },
  { icon: "📞", label: "Contacto", href: "#contact" },
];

const Navbar = ({ transparent = true, items = defaultItems }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);
  const dockHovered = useMotionValue(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };
  
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };
  
  const navbarClass = `navbar ${isScrolled ? 'scrolled' : ''} ${transparent && !isScrolled ? 'transparent' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">NOVA</a>
        
        <motion.div 
          className="navbar-dock"
          onMouseMove={(e) => {
            mouseX.set(e.pageX);
            dockHovered.set(true);
          }}
          onMouseLeave={() => {
            mouseX.set(Infinity);
            dockHovered.set(false);
          }}
        >
          {items.map((item, index) => (
            <NavbarDockItem 
              key={index}
              item={item}
              mouseX={mouseX}
              onClick={handleNavLinkClick}
            />
          ))}
        </motion.div>
        
        <div className="navbar-cta">
          <a href="#contact" className="nav-cta-button" onClick={handleNavLinkClick}>
            Contáctanos
          </a>
        </div>
        
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {items.map((item, index) => (
          <a 
            key={index}
            href={item.href} 
            className="mobile-menu-item"
            onClick={handleNavLinkClick}
          >
            <span className="mobile-menu-icon">{item.icon}</span>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="mobile-cta-button" onClick={handleNavLinkClick}>
          Contáctanos
        </a>
      </div>
      
      {/* Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      ></div>
    </nav>
  );
};

interface NavbarDockItemProps {
  item: NavItem;
  mouseX: any;
  onClick: () => void;
}

const NavbarDockItem = ({ item, mouseX, onClick }: NavbarDockItemProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const distance = 120;
  const springConfig: SpringOptions = { 
    stiffness: 350, 
    damping: 25 
  };
  
  const [isHovered, setIsHovered] = useState(false);
  
  const calculateDistance = () => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    return mouseX.get() - itemCenter;
  };
  
  const widthSync = useTransform(mouseX, () => {
    const distance = calculateDistance();
    return Math.max(1 - Math.abs(distance) / 150, 0.7);
  });
  
  const width = useSpring(widthSync, springConfig);
  const scale = useSpring(
    useTransform(width, [0.7, 1], [1, 1.2]), 
    springConfig
  );
  
  return (
    <motion.a
      ref={ref}
      href={item.href}
      className="navbar-dock-item"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ scale }}
    >
      <span className="dock-item-icon">{item.icon}</span>
      
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="dock-item-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default Navbar;