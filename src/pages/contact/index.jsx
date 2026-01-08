import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      icon: 'Clock',
      value: '24h',
      label: 'Response Time',
      description: 'Average reply speed'
    },
    {
      icon: 'Users',
      value: '50+',
      label: 'Happy Clients',
      description: 'Successful projects'
    },
    {
      icon: 'Star',
      value: '4.9/5',
      label: 'Client Rating',
      description: 'Average satisfaction'
    },
    {
      icon: 'Globe',
      value: '15+',
      label: 'Countries',
      description: 'Global reach'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6">
              <Icon name="MessageSquare" size={16} color="var(--color-primary)" />
              <span className="text-xs md:text-sm font-medium text-primary">Let's Connect</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Looking for a reliable developer? Or just want to say hello? I'm always open to discussing new opportunities and collaborations.
            </p>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20">
            {stats?.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 md:p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={stat?.icon} size={20} color="var(--color-primary)" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 md:mb-2">{stat?.value}</div>
                <div className="text-xs md:text-sm font-medium text-foreground mb-1">{stat?.label}</div>
                <div className="text-xs text-muted-foreground">{stat?.description}</div>
              </div>
            ))}
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>

          <div className="mb-12 md:mb-16 lg:mb-20">
            <LocationMap />
          </div>

          <div className="mb-12 md:mb-16 lg:mb-20">
            <FAQSection />
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 lg:p-16 text-center border border-primary/20">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Icon name="Rocket" size={32} color="var(--color-primary)" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's turn your ideas into reality. Whether it's a web application, mobile app, or technical consultation, I'm here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:gitesh.dev@example.com"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-purple text-sm md:text-base"
              >
                <Icon name="Mail" size={20} />
                Email Me Directly
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-card text-foreground rounded-lg font-medium border border-border hover:border-primary/50 transition-all duration-300 text-sm md:text-base"
              >
                <Icon name="Phone" size={20} />
                Call for Urgent Matters
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-card border-t border-border mt-12 md:mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Code2" size={20} color="var(--color-primary)" />
              </div>
              <span className="text-lg font-bold text-foreground">GiteshDev</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date()?.getFullYear()} GiteshDev. All rights reserved. Built with React &amp; passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;