import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'giteshb260@gmail.com',
      description: 'Best for detailed inquiries',
      link: 'mailto:giteshb260@gmail.com',
      responseTime: '24 hours'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+91 7081833800',
      description: 'For urgent matters only',
      link: 'tel:+917081833800',
      responseTime: 'Same day'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Noida,Uttar Pradesh',
      description: 'Available for work , remote and otherwise',
      link: null,
      responseTime: 'Global timezone'
    },
    {
      icon: 'Calendar',
      label: 'Availability',
      value: 'Open to opportunities',
      description: 'Currently accepting projects',
      link: null,
      responseTime: 'Immediate start'
    }
  ];

  const socialLinks = [
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      username: '@giteshdev',
      link: 'https://linkedin.com/in/giteshdev',
      color: 'var(--color-info)'
    },
    {
      icon: 'Github',
      label: 'GitHub',
      username: '@giteshdev',
      link: 'https://github.com/giteshdev',
      color: 'var(--color-foreground)'
    },
    {
      icon: 'Twitter',
      label: 'Twitter',
      username: '@giteshdev',
      link: 'https://twitter.com/giteshdev',
      color: 'var(--color-info)'
    },
    {
      icon: 'Mail',
      label: 'Email',
      username: 'giteshb260@gmail.com',
      link: 'mailto:giteshb260@gmail.com',
      color: 'var(--color-error)'
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-purple">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon name="MessageSquare" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-sm md:text-base text-muted-foreground">Multiple ways to reach me</p>
          </div>
        </div>

        <div className="space-y-4">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={method?.icon} size={20} color="var(--color-primary)" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm md:text-base font-semibold text-foreground">{method?.label}</h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{method?.responseTime}</span>
                  </div>
                  {method?.link ? (
                    <a
                      href={method?.link}
                      className="text-sm md:text-base text-primary hover:text-secondary transition-colors duration-200 break-all"
                    >
                      {method?.value}
                    </a>
                  ) : (
                    <p className="text-sm md:text-base text-foreground">{method?.value}</p>
                  )}
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{method?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-purple">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon name="Share2" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Connect Online</h2>
            <p className="text-sm md:text-base text-muted-foreground">Find me on social platforms</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={social?.icon} size={20} color={social?.color} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-foreground">{social?.label}</h3>
                <p className="text-xs md:text-sm text-muted-foreground truncate">{social?.username}</p>
              </div>
              <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            </a>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8 border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Icon name="Clock" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Response Time</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              I typically respond to all inquiries within 24 hours during business days. For urgent matters, please call or mention "URGENT" in your message subject.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-success/10 text-success text-xs md:text-sm rounded-full border border-success/20">
                Available for projects
              </span>
              <span className="px-3 py-1 bg-info/10 text-info text-xs md:text-sm rounded-full border border-info/20">
                Remote friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;