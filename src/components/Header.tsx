import React from 'react';
import { Download, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <img src="/logo.png" alt="Yatri Cabs" className="logo" />
        
        <div className="contact-number">
          24 x 7 &nbsp; +917860663999
        </div>
        
        <div className="user-actions">
          <a href="#" className="download-app">
            <Download size={20} />
            Download App
          </a>
          <a href="#" className="user-profile">
            <User size={20} />
            Hi, Ravi
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;