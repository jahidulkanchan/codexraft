import { MdRocketLaunch } from 'react-icons/md';

const Services = () => {
  return (
    <section className="hero-section text-white relative py-14" id="hero_section">
      {/* Decorative Grid Image */}
      <img src="./assets/hero-grid.webp" alt="heroGrid" loading="lazy" className="absolute top-0 right-0 -z-2 mx-auto hidden h-full w-full object-cover opacity-15 md:block" />

      {/* Gradient Border */}
      <div className="via-icon-bg/30 absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent to-transparent"></div>

      <div className="relative container flex items-center justify-center gap-4 overflow-hidden py-10 lg:min-h-[550px]">
        <div data-aos="fade-in" className="mt-5 flex flex-col items-center justify-center text-center md:mt-0">
          {/* Animated Badge */}
          <div className="border-icon-bg/30 to-main/20 from-card-bg relative mb-3 flex w-fit items-center gap-2 overflow-hidden rounded-lg border bg-gradient-to-r px-4 py-2 lg:mx-0">
            {/* Blaze Effect */}
            <div className="blaze bg-icon-bg/40 absolute -top-10 -left-10 h-30 w-10 rotate-45 blur-xl"></div>

            {/* Icon + Text */}
            <MdRocketLaunch className="text-icon-bg relative z-10" />
            <span className="text-light-gray relative z-10">Your Vision, Our Design, Digitalized.</span>
          </div>

          {/* Heading */}
          <h1 className="mb-2 text-4xl leading-tight font-bold lg:text-6xl">
            Fusing Creativity With <span className="from-icon-bg to-main bg-gradient-to-r bg-clip-text text-transparent">Marketing & Technology</span> To Drive Business Growth
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
  );
};

export default Services;
