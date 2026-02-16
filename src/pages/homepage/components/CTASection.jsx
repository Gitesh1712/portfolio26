import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import resumeFile from '../../../assets/docs/Gitesh_cv26Jan.pdf';

const CTASection = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = resumeFile;
    anchor.download = 'Gitesh_cv26Jan.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'gitesh.dev@example.com',
      action: () => window.location.href = 'mailto:gitesh.dev@example.com'
    },
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      action: () => window.open('https://linkedin.com', '_blank')
    },
    {
      icon: 'Github',
      label: 'GitHub',
      value: 'View Repositories',
      action: () => window.open('https://github.com', '_blank')
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-primary/30 mb-6 md:mb-8">
              <Icon name="Sparkles" size={16} color="var(--color-primary)" />
              <span className="text-xs md:text-sm text-primary font-medium">Let's Collaborate</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Ready to Build Something Amazing?
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12">
              I'm currently available for freelance projects, full-time opportunities, and exciting collaborations. Let's discuss how we can work together to bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
              <Button
                variant="default"
                size="lg"
                iconName="Send"
                iconPosition="left"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto"
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {contactMethods?.map((method, index) => (
                <button
                  key={index}
                  onClick={method?.action}
                  className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-4 md:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-purple text-left group"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon name={method?.icon} size={20} className="md:w-6 md:h-6" color="var(--color-primary)" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm text-muted-foreground mb-1">
                        {method?.label}
                      </div>
                      <div className="text-sm md:text-base text-foreground font-medium truncate">
                        {method?.value}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            <span>Available for new opportunities</span>
            <span>•</span>
            <span>Response time: &lt; 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;