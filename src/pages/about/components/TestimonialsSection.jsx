import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Engineering Manager",
    company: "Tech Innovations Inc.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
    imageAlt: "Professional headshot of Sarah Mitchell, a woman with shoulder-length brown hair wearing a navy blazer and white shirt, smiling confidently in modern office setting",
    quote: "Gitesh is one of the most talented developers I've had the pleasure of working with. His ability to break down complex problems and deliver elegant solutions is exceptional. He doesn't just write code—he crafts experiences.",
    rating: 5,
    relationship: "Direct Manager"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Senior Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17550fd67-1763295501645.png",
    imageAlt: "Professional portrait of Rajesh Kumar, a man with short black hair and beard wearing formal grey suit and blue tie, standing against neutral background with warm lighting",
    quote: "Working alongside Gitesh taught me what clean code really means. His attention to detail and commitment to best practices raised the bar for our entire team. A true professional who leads by example.",
    rating: 5,
    relationship: "Colleague"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Product Manager",
    company: "StartUp Ventures",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d60e496-1763295319842.png",
    imageAlt: "Professional photograph of Emily Chen, an Asian woman with long black hair wearing burgundy blazer and pearl necklace, smiling warmly in corporate office environment",
    quote: "Gitesh has an incredible ability to translate business requirements into technical solutions. He asks the right questions, anticipates challenges, and delivers beyond expectations. His communication skills are as strong as his coding abilities.",
    rating: 5,
    relationship: "Product Collaboration"
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    role: "Junior Developer",
    company: "Tech Innovations Inc.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14d5770fa-1763294770713.png",
    imageAlt: "Casual professional photo of Michael Rodriguez, a young man with short dark hair wearing black t-shirt and glasses, sitting at desk with laptop in modern tech workspace",
    quote: "As a junior developer, having Gitesh as a mentor was invaluable. He took time to explain concepts thoroughly, reviewed my code with patience, and helped me grow faster than I thought possible. He's the kind of senior developer every team needs.",
    rating: 5,
    relationship: "Mentee"
  }];


  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeIndex];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon name="MessageSquare" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            What People Say About Working With Me
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Authentic feedback from colleagues, managers, and mentees who've experienced my work firsthand.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 md:p-8 lg:p-12 shadow-purple-lg">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center lg:items-start">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-30"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
                    <Image
                      src={currentTestimonial?.image}
                      alt={currentTestimonial?.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <Icon name="Quote" size={32} color="var(--color-primary)" className="mb-4 mx-auto lg:mx-0 opacity-50" />
                <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-6 md:mb-8">
                  "{currentTestimonial?.quote}"
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4">
                  <div className="flex gap-1">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                    <Icon key={i} name="Star" size={16} color="var(--color-warning)" fill="var(--color-warning)" />
                    )}
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground">•</span>
                  <span className="text-xs md:text-sm text-muted-foreground">{currentTestimonial?.relationship}</span>
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground">{currentTestimonial?.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{currentTestimonial?.role}</p>
                  <p className="text-xs md:text-sm text-primary">{currentTestimonial?.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-purple"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeft" size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-primary' : 'bg-muted hover:bg-primary/50'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-purple"
              aria-label="Next testimonial">

              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-4 md:mt-6">
            <span className="text-xs md:text-sm text-muted-foreground">
              {activeIndex + 1} of {testimonials?.length}
            </span>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;