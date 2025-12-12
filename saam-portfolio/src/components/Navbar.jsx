import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = ['Home', 'About', 'Skills' ,'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(0, 15, 4, 0.95)' : 'rgba(3, 23, 20, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow: isScrolled ? '0 5px 20px rgba(33, 67, 96, 0.3)' : 'none',
      transition: 'all 0.3s ease',
      padding: '20px 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a 
          href="#home" 
          style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#d2e7ebff',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#00b4d8';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Nawrasama
        </a>

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '40px',
          margin: 0,
          padding: 0
        }}>
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00b4d8';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                }}
              >
                {item}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#00b4d8',
                  transition: 'width 0.3s ease'
                }}></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;