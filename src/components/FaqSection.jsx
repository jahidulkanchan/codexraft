import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: 'What technologies were used to build this portfolio?',
      answer:
        "This portfolio was built with React.js, Tailwind CSS, and Vite for optimal performance. We've used modern web technologies including responsive design principles, CSS animations, and lazy loading for images.",
    },
    {
      question: 'How can I filter the projects in the portfolio?',
      answer:
        'Simply click on the category buttons above the project grid (All Projects, Web Development, WordPress, UX/UI Design, or App Development) to filter the projects. The active filter will be highlighted for better visibility.',
    },
    {
      question: 'Is this portfolio website mobile-friendly?',
      answer:
        'Absolutely! The entire website is built with a mobile-first approach using responsive design techniques. All components adapt seamlessly to different screen sizes from desktop to mobile devices.',
    },
    {
      question: 'Can I use this portfolio design for my own projects?',
      answer:
        "Yes, this project is open-source and available under the MIT License. You're welcome to use it as inspiration or as a template for your own portfolio. Attribution is appreciated but not required.",
    },
    {
      question: 'How often is the portfolio content updated?',
      answer:
        'The portfolio projects are updated quarterly with new work. The technology stack and design elements are reviewed annually to ensure they reflect current best practices in web development.',
    },
    {
      question: "What's the performance optimization strategy for this site?",
      answer:
        "We've implemented several optimizations including code splitting, optimized images, efficient CSS with Tailwind's purge feature, and lazy loading of non-critical resources. The site scores 90+ on Lighthouse performance tests.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section data-aos="fade-up" id="faq_section" className="faq-section relative min-h-[350px] overflow-hidden py-10">
      {/* Decorative Grid Image */}
      <img src="./assets/hero-grid.webp" alt="heroGrid" loading="lazy" className="absolute top-0 right-0 -z-10 mx-auto hidden h-full w-full object-cover opacity-15 md:block" />
      <div className="relative container mx-auto px-4">
        <div className="bg-main/30 absolute top-20 right-0 bottom-0 -z-10 mx-auto my-auto h-[250px] w-[250px] transform rounded-full blur-3xl sm:right-40"></div>

        <div className="heading-title relative mx-auto mb-8 text-center text-2xl md:text-3xl lg:text-4xl">
          <p className="text-light-gray border-icon-bg/30 from-card-bg to-card-bg mx-auto mb-5 w-fit rounded-3xl border bg-gradient-to-r px-5 py-1.5 text-xs uppercase">FREQUENTLY ASKED</p>
          <h2 className="from-icon-bg to-main mx-auto w-fit bg-gradient-to-l bg-clip-text font-medium text-transparent">Your Questions, Our Expert Solutions</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full flex-1 pb-1 text-left md:pb-5">
          <div className="accordion-container mx-auto max-w-2xl space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-t-icon-bg/30 overflow-hidden rounded-md border border-transparent shadow-lg transition-all duration-300 ${activeIndex === index ? 'border-main/20' : ''}`}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="ac-trigger to-main/20 from-card-bg flex w-full items-center justify-between bg-gradient-to-r px-2 sm:px-5 py-3 text-left text-md sm:text-lg backdrop-blur-xl"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-panel-${index}`}>
                  <span className="text-white/90 font-medium">{item.question}</span>
                  <ChevronDown className={`transition-transform text-white duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} size={24} />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={`ac-panel to-main/20 from-card-bg text-light-gray overflow-hidden bg-gradient-to-r px-2 sm:px-5 text-sm sm:text-base leading-relaxed backdrop-blur-xl ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 visible py-3' : 'max-h-0 opacity-0 invisible py-0'
                  } transition-all duration-300`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
