import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <>
      <header className={`header transition-shadow duration-300 ${isScrolled ? 'shadow-purple' : ''}`}>
        <div className="header-container">
          <div className="header-content">
            <div className="header-logo">
              <div className="header-logo-icon">
                <Icon name="Code2" size={24} color="#ffffff" strokeWidth={2.5} />
              </div>
              <span className="header-logo-text">GiteshDev</span>
            </div>

            <nav className="header-nav">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="header-mobile-toggle"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon 
                name={isMobileMenuOpen ? 'X' : 'Menu'} 
                size={24} 
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="header-mobile-menu animate-fade-in">
          <nav className="header-mobile-nav">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`header-mobile-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;