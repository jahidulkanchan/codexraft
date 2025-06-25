import { Link } from 'react-router-dom';
import { MdRocketLaunch } from 'react-icons/md';
const Banner = () => {
  return (
    <section className="hero-section relative text-white overflow-hidden pt-20 pb-5" id="hero_section">
      {/* Background Gradient */}
      <div className="half-circle h-[250px] w-[500px] rounded-t-full left-0 mx-auto bg-main/20 absolute -bottom-20 blur-3xl z-[-1] right-0"></div>
      <img src="./assets/hero-grid.webp" alt="heroGrid" loading="lazy" className="absolute top-0 right-0 -z-2 mx-auto hidden h-full w-full object-cover opacity-15 md:block" />
      <div className="via-icon-bg/30 absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent to-transparent"></div>
      <div className="relative container flex flex-col-reverse items-center justify-between gap-4 overflow-hidden py-10 md:flex-row lg:min-h-[550px]">
        <div className="left-content" data-aos="fade-In">
          <div className="border-icon-bg/30 to-main/20 from-card-bg relative mx-auto mb-3 flex w-fit items-center gap-2 overflow-hidden rounded-lg border bg-gradient-to-r px-4 py-2 md:mx-0">
            <div className="blaze bg-icon-bg/40 absolute -top-10 -left-10 h-30 w-10 rotate-45 blur-xl"></div>
            <MdRocketLaunch />
            <span className="relative z-10">Transform Your Digital Presence.</span>
          </div>
          <h1 className="mb-2 text-center text-4xl leading-tight text-white font-bold md:text-left lg:text-6xl">
            Crafting Creativity,
            <br />
            <span className="from-icon-bg to-main bg-gradient-to-r bg-clip-text text-transparent">Pixel by Pixel</span>
          </h1>
          <p className="text-light-gray mb-6 max-w-[640px] text-center text-base md:text-left md:text-lg">
            We bring your ideas to life — one pixel at a time. From visually stunning websites to engaging graphics and strategic marketing campaigns, our goal is to make your brand stand out in the
            digital world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row justify-center gap-2 md:items-center md:justify-normal md:gap-4">
            <Link to="/contact" className="blue-gradient group flex w-fit items-center gap-3 rounded px-3 py-2.5">
              <span>
                <i className="w-[20px] transition group-hover:rotate-12" data-lucide="phone-outgoing"></i>
              </span>
              Book 1:1 DiscoveryCall
            </Link>
            <Link
              to="#provided_services"
              className="border-light-gray/20 px-5 py-2.5 to-main/20 from-card-bg text-light-gray flex w-fit items-center gap-1 rounded border bg-gradient-to-r  backdrop-blur-md transition duration-150 hover:text-white">
              Services
              <span className="mt-2.5">
                <i className="w-[20px] animate-bounce transition" data-lucide="chevrons-down"></i>
              </span>
            </Link>
          </div>

          <div className="user-avater mt-5 flex items-center justify-center gap-2.5 md:justify-normal">
            <img className="h-full w-full max-w-[130px] sm:max-w-[150px]" src="./assets/users-avatar.png" alt="users-avatar" loading="lazy" />
            <p className="text-sm sm:text-base text-white">Join 460+ happy clients</p>
          </div>
        </div>

        <div className="right-content hidden md:block" data-aos="zoom-in">
          <img src="./assets/banner.jpg" alt="PixelNest Showcase" className="grayscale h-full w-full max-w-[500px] rounded-lg object-cover" data-tilt data-tilt-max="10" data-tilt-speed="400" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
