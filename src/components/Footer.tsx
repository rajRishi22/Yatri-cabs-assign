import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'News', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'Privacy Policy', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="Yatri Cabs" />
        </div>

        <nav className="footer-nav">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="footer-link">
              {link.text}
            </a>
          ))}
        </nav>

        <div className="newsletter">
          <div className="newsletter-form">
            <input type="email" placeholder="Email" className="newsletter-input" />
            <button className="newsletter-button">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="copyright">
          All Copyrights are reserved by YATRI CABS
        </div>
      </div>
    </footer>
  );
};

export default Footer;