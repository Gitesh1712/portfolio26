import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your typical response time?",
      answer: "I respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent matters, please call directly or mark your email as urgent, and I'll prioritize your request."
    },
    {
      question: "What types of projects do you accept?",
      answer: "I specialize in full-stack web development, React applications, Spring Boot backends, API integrations, and system architecture. I accept projects ranging from small feature implementations to complete application development. Minimum project size is typically $5,000."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients worldwide and am flexible with timezone adjustments for meetings and calls. I have experience collaborating with teams across North America, Europe, and Asia."
    },
    {
      question: "What is your availability for new projects?",
      answer: "I'm currently accepting new projects with start dates in the next 2-4 weeks. For urgent projects, please mention this in your inquiry, and I'll do my best to accommodate your timeline."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, I provide post-launch support and maintenance packages. This includes bug fixes, performance optimization, feature updates, and technical support. We can discuss specific terms based on your needs."
    },
    {
      question: "What is your development process?",
      answer: "I follow an agile methodology with regular check-ins and demos. The process includes: initial consultation, project planning, iterative development with weekly updates, testing, deployment, and post-launch support. You'll have full visibility throughout the project."
    },
    {
      question: "Can you work with my existing team?",
      answer: "Absolutely! I have extensive experience collaborating with existing development teams, designers, and project managers. I can integrate seamlessly into your workflow and use your preferred tools and communication channels."
    },
    {
      question: "What technologies do you work with?",
      answer: "My primary stack includes React, Next.js, Node.js, Spring Boot, PostgreSQL, MongoDB, and AWS. I'm also proficient in TypeScript, Redux, REST APIs, GraphQL, and modern DevOps practices. I'm always learning new technologies based on project requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 lg:p-10 border border-border shadow-purple">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon name="HelpCircle" size={24} color="var(--color-primary)" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-sm md:text-base text-muted-foreground">Quick answers to common inquiries</p>
        </div>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="bg-background rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary/50"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 md:p-5 flex items-center justify-between gap-4 text-left group"
            >
              <span className="text-sm md:text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {faq?.question}
              </span>
              <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <Icon 
                  name="ChevronDown" 
                  size={20} 
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
                />
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 md:px-5 pb-4 md:pb-5">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq?.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 md:p-6 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-start gap-3">
          <Icon name="MessageCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Don't hesitate to reach out! I'm happy to discuss your project requirements, provide technical consultation, or answer any specific questions you may have.
            </p>
            <a
              href="mailto:gitesh.dev@example.com"
              className="inline-flex items-center gap-2 text-sm md:text-base text-primary hover:text-secondary transition-colors duration-200 font-medium"
            >
              Send me an email
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;