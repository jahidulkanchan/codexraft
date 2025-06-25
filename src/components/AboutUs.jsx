// AboutUs.jsx
import { FiArrowUpRight } from 'react-icons/fi';

const AboutUs = () => {
  return (
    <section className="about-us overflow-hidden relative text-white py-8 md:py-20">
      <div className="container mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 md:flex-row">
        {/* Left Content */}
        <div data-aos="fade-right" className="left-content w-full md:w-1/2">
          <h2 className="from-icon-bg to-main mb-4 bg-gradient-to-r bg-clip-text text-3xl font-medium text-transparent md:text-4xl lg:font-semibold">Who We Are</h2>
          <p className="mb-4 text-lg text-light-gray">
            We are a creative digital agency helping businesses grow through innovative digital marketing, modern web design, and eye-catching graphics. Our team is passionate about delivering quality
            work that creates impact.
          </p>
          <p className="mb-6 text-lg text-light-gray">
            From startups to established brands, we build strong online identities with measurable results. Our mission is to make your brand stand out in the digital world.
          </p>
          <a href="/contact-us" className="blue-gradient shadow-light-blue/30 group hidden w-fit items-center gap-1 rounded px-3 py-2 shadow-xl md:inline-flex">
            Let’s Connect
            <span className="transition group-hover:rotate-12">
              <FiArrowUpRight size={20} />
            </span>
          </a>
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" className="right-content w-full relative md:w-1/2">
          {/* Background card */}
          <div className="bg-card absolute w-full h-full -left-5 top-5 bg-main rounded-xl"></div>
          <img src="./assets/about-us.jpg" alt="About Us" className="w-full rounded-xl object-cover shadow-lg grayscale" />
        </div>
      </div>
    </section>
    
  );
};

export default AboutUs;
