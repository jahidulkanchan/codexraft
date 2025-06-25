import { MdRocketLaunch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import services01 from '../assets/services-01.jpg';
import services02 from '../assets/services-02.jpg';
import services03 from '../assets/services-03.jpg';
import services04 from '../assets/services-04.jpg';

const ServicesPage = () => {
  return (
    <>
      <section data-aos="fade-In" className="hero-section text-white relative py-14" id="hero_section">
        {/* Decorative Grid Image */}
        <img src="./assets/hero-grid.webp" alt="heroGrid" loading="lazy" className="absolute top-0 right-0 -z-2 mx-auto hidden h-full w-full object-cover opacity-15 md:block" />

        {/* Gradient Border */}
        <div className="via-icon-bg/30 absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent to-transparent"></div>

        <div className="relative container flex items-center justify-center gap-4 overflow-hidden py-10 lg:min-h-[550px]">
          <div className="mt-5 flex flex-col items-center justify-center text-center md:mt-0">
            {/* Animated Badge */}
            <div className="border-icon-bg/30 to-main/20 from-card-bg relative mb-3 flex w-fit items-center gap-2 overflow-hidden rounded-lg border bg-gradient-to-r px-4 py-2 lg:mx-0">
              {/* Blaze Effect */}
              <div className="blaze bg-icon-bg/40 absolute -top-10 -left-10 h-30 w-10 rotate-45 blur-xl"></div>

              {/* Icon + Text */}
              <MdRocketLaunch className="text-main relative z-10" />
              <span className="text-light-gray relative z-10">Your Vision, Our Design, Digitalized.</span>
            </div>

            {/* Heading */}
            <h1 className="my-4 md:my-6 text-4xl leading-tight font-bold lg:text-6xl">
              Fusing Creativity With <span className="from-light-blue to-main bg-gradient-to-r bg-clip-text text-transparent">Marketing & Technology</span> To Drive Business Growth
            </h1>

            {/* Paragraph */}
            <p className="text-light-gray mb-6 text-base md:text-lg lg:max-w-4xl">
              Unlock your brand&apos;s full potential with our expert services in Web Development, App Development, and WordPress Solutions. Whether you&apos;re building a fast website, launching an
              app, or growing your online presence — we provide creative solutions tailored for success.
            </p>

            {/* CTA Button */}
            <div>
              <a href="/contact" className="blue-gradient group flex w-fit items-center gap-3 rounded px-3 py-2.5">
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="services-items from-dark-bg to-dark-bg bg-gradient-to-r py-16 text-white overflow-hidden">
        <div data-aos="fade-up" className="heading-title relative mx-auto mb-12 text-center">
          <h2 className="from-light-blue text-3xl sm:text-4xl md:text-6xl max-w-4xl to-main mx-auto bg-gradient-to-r bg-clip-text font-medium text-transparent">
            <span className="text-white">Transform Your Digital Presence </span>With Our Comprehensive Services
          </h2>
          <p className="text-light-gray mx-auto mt-4 max-w-3xl text-sm md:text-base">
            Our full-service digital solutions combine innovative technology with strategic expertise to help your business thrive in today&apos;s competitive landscape.
          </p>
        </div>
        <div className="container px-4 mx-auto">
          {/* Web Design & Development */}
          <div className="web-services flex flex-col items-center gap-10 md:flex-row">
            <div data-aos="fade-right" className="left-content w-full md:w-1/2">
              <img src={services01} alt="Web Development Services" className="w-full rounded-lg grayscale" />
            </div>
            <div data-aos="fade-left" className="right-content w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Web Development Services</h2>
              <p className="mb-6 text-lg leading-relaxed">
                We build custom, high-performance websites and web applications using modern technologies. Our solutions are optimized for speed, security, and scalability to help your business grow
                online.
              </p>
              <Link to="/services/web-development" className="blue-gradient shadow-light-blue/30 group hidden w-fit items-center gap-1 rounded px-2.5 py-2 shadow-xl md:flex">
                View Web Services <FiArrowUpRight className="w-[20px] transition group-hover:rotate-12" />
              </Link>
              <ul className="mt-6 space-y-2 font-medium text-white">
                <li className="flex items-center gap-2">
                  <FiArrowRight /> Custom Website Development
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> E-Commerce Solutions
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> CMS Implementation
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> Web Application Development
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="graphics-services my-20 flex flex-col-reverse items-center gap-10 md:flex-row">
            <div data-aos="fade-right" className="left-content w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Mobile App Development</h2>
              <p className="mb-6 text-lg leading-relaxed">
                We create native and cross-platform mobile applications that deliver exceptional user experiences. Our apps are built for performance, engagement, and business growth.
              </p>
              <Link to="/services/mobile-development" className="blue-gradient shadow-light-blue/30 group hidden w-fit items-center gap-1 rounded px-2.5 py-2 shadow-xl md:flex">
                View App Services <FiArrowUpRight className="w-[20px] transition group-hover:rotate-12" />
              </Link>
              <ul className="mt-6 space-y-2 font-medium text-white">
                <li className="flex items-center gap-2">
                  <FiArrowRight /> iOS App Development
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> Android App Development
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> Cross-Platform Solutions
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> App Maintenance & Support
                </li>
              </ul>
            </div>
            <div data-aos="fade-left" className="right-content w-full md:w-1/2">
              <img src={services02} alt="Mobile App Development" className="w-full rounded-lg grayscale" />
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="digital-marketing-services flex flex-col items-center gap-10 md:flex-row">
            <div data-aos='fade-right'  className="left-content w-full md:w-1/2">
              <img src={services03} alt="UI/UX Design Services" className="w-full rounded-lg shadow-lg grayscale" />
            </div>
            <div data-aos='fade-left'  className="right-content w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">UI/UX Design Services</h2>
              <p className="mb-6 text-lg leading-relaxed">
                Our user-centered design approach creates intuitive interfaces that drive engagement and conversions. We combine aesthetics with functionality for exceptional digital experiences.
              </p>
              <Link to="/services/ui-ux-design" className="blue-gradient shadow-light-blue/30 group hidden w-fit items-center gap-1 rounded px-2.5 py-2 shadow-xl md:flex">
                View Design Services <FiArrowUpRight className="w-[20px] transition group-hover:rotate-12" />
              </Link>
              <ul className="mt-6 space-y-2 font-medium text-white">
                <li className="flex items-center gap-2">
                  <FiArrowRight /> User Interface Design
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> User Experience Research
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> Prototyping & Wireframing
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> Design System Creation
                </li>
              </ul>
            </div>
          </div>
          {/* WordPress Development */}
          <div className="wordpress-services mt-20 flex flex-col-reverse items-center gap-10 md:flex-row">
            <div data-aos='fade-right'  className="left-content w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">WordPress Development Solutions</h2>
              <p className="mb-6 text-lg leading-relaxed">
                We build powerful, scalable WordPress websites that combine beautiful design with robust functionality. Our expert developers create custom solutions tailored to your business needs.
              </p>
              <Link to="/services/wordpress-development" className="blue-gradient shadow-light-blue/30 group hidden w-fit items-center gap-1 rounded px-2.5 py-2 shadow-xl md:flex">
                View WordPress Services <FiArrowUpRight className="w-[20px] transition group-hover:rotate-12" />
              </Link>
              <ul className="mt-6 space-y-2 font-medium text-white">
                <li className="flex items-center gap-2">
                  <FiArrowRight /> Custom WordPress Theme Development
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> WooCommerce & E-Commerce Solutions
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> Plugin Development & Customization
                </li>
                <li className="flex items-center gap-2">
                  <FiArrowRight /> WordPress Performance Optimization
                </li>
              </ul>
            </div>
            <div data-aos='fade-left'  className="right-content w-full md:w-1/2">
              <img src={services04} alt="WordPress Development Services" className="w-full rounded-lg shadow-lg grayscale" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
