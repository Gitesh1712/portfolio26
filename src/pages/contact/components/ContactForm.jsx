import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypeOptions = [
    { value: 'web-app', label: 'Web Application Development' },
    { value: 'mobile-app', label: 'Mobile Application Development' },
    { value: 'full-stack', label: 'Full-Stack Development' },
    { value: 'api-integration', label: 'API Integration & Backend' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'code-review', label: 'Code Review & Optimization' },
    { value: 'other', label: 'Other (Specify in message)' }
  ];

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'flexible', label: 'Flexible / To Be Discussed' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-2 weeks)' },
    { value: 'short', label: 'Short-term (1-2 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' },
    { value: 'ongoing', label: 'Ongoing Partnership' }
  ];

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Please provide project details';
    } else if (formData?.message?.trim()?.length < 20) {
      newErrors.message = 'Please provide at least 20 characters of detail';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 lg:p-10 border border-border shadow-purple">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon name="Send" size={24} color="var(--color-primary)" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Start a Project</h2>
          <p className="text-sm md:text-base text-muted-foreground">Fill out the form and I'll get back to you within 24 hours</p>
        </div>
      </div>
      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start gap-3 animate-fade-in">
          <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
          <div>
            <p className="text-success font-medium text-sm md:text-base">Message sent successfully!</p>
            <p className="text-success/80 text-xs md:text-sm mt-1">I'll review your inquiry and respond within 24 hours.</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData?.name}
            onChange={handleChange}
            error={errors?.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData?.email}
            onChange={handleChange}
            error={errors?.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData?.phone}
            onChange={handleChange}
            description="Optional - for urgent matters"
          />

          <Select
            label="Project Type"
            placeholder="Select project type"
            options={projectTypeOptions}
            value={formData?.projectType}
            onChange={(value) => handleSelectChange('projectType', value)}
            error={errors?.projectType}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Select
            label="Budget Range"
            placeholder="Select budget range"
            options={budgetOptions}
            value={formData?.budget}
            onChange={(value) => handleSelectChange('budget', value)}
            description="Approximate project budget"
          />

          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleSelectChange('timeline', value)}
            description="Expected project duration"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Details <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Please describe your project requirements, goals, and any specific technologies or features you need..."
            value={formData?.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none text-sm md:text-base"
          />
          {errors?.message && (
            <p className="mt-2 text-sm text-error flex items-center gap-1">
              <Icon name="AlertCircle" size={14} />
              {errors?.message}
            </p>
          )}
          <p className="mt-2 text-xs md:text-sm text-muted-foreground">
            Minimum 20 characters required
          </p>
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="mt-6"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Project Inquiry'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;