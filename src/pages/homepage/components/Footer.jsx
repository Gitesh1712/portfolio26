import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Home', path: '/homepage' },
      { label: 'About', path: '/about' },
      { label: 'Projects', path: '/projects' },
      { label: 'Skills', path: '/skills' },
      { label: 'Experience', path: '/experience' },
      { label: 'Contact', path: '/contact' }
    ],
    social: [
      { icon: 'Github', label: 'GitHub', url: 'https://github.com' },
      { icon: 'Linkedin', label: 'LinkedIn', url: 'https://linkedin.com' },
      { icon: 'Twitter', label: 'Twitter', url: 'https://twitter.com' },
      { icon: 'Mail', label: 'Email', url: 'mailto:gitesh.dev@example.com' }
    ]
  };

  return (
    <footer className="bg-card border-t border-border px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                <Icon name="Code2" size={24} className="md:w-7 md:h-7" color="#ffffff" strokeWidth={2.5} />
              </div>
              <span className="text-xl md:text-2xl font-bold text-foreground">GiteshDev</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-md">
              Building digital solutions that matter through clean code, scalable architecture, and user-centric design.
            </p>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-4 md:mb-6">Navigation</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks?.navigation?.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link?.path)}
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-4 md:mb-6">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {footerLinks?.social?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:shadow-purple"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={20} className="md:w-6 md:h-6" color="var(--color-foreground)" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} GiteshDev. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <span>•</span>
              <button className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;