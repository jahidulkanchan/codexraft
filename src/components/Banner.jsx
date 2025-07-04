import { MdRocketLaunch } from 'react-icons/md';
import { FiPhoneOutgoing, FiChevronsRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="hero-section relative w-full text-center overflow-hidden pt-20 pb-5 text-white" id="hero_section">
      {/* Background Gradient */}
      <div className="half-circle absolute -bottom-20 left-0 right-0 mx-auto h-[250px] w-[500px] rounded-t-full bg-main/20 blur-3xl z-[-1]"></div>

      {/* Decorative Grid Image */}
      <img src="./assets/hero-grid.webp" alt="heroGrid" loading="lazy" className="absolute top-0 right-0 -z-2 hidden h-full w-full object-cover opacity-15 md:block" />
      <div data-aos="fade-In" className="container">
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center justify-between gap-4  py-10 md:flex-row lg:min-h-[550px]">
          <div className="left-content w-full">
            {/* Badge */}
            <div className="border-icon-bg/30 to-main/20 from-card-bg relative mx-auto mb-3 flex w-fit items-center gap-2 overflow-hidden rounded-lg border bg-gradient-to-l px-4 py-2">
              <div className="blaze bg-icon-bg/40 absolute -top-10 -left-10 h-30 w-10 rotate-45 blur-xl"></div>
              <MdRocketLaunch className="text-main" size={20} />
              <span className="relative text-sm sm:text-base text-light-gray">Build Smart. Launch Fast. Scale Better.</span>
            </div>

            {/* Heading */}
            <h1 className="text-center text-3xl sm:text-4xl font-bold leading-tight text-white lg:text-6xl">
              Building Digital Products,
              <br />
              <span className="from-icon-bg to-main bg-gradient-to-l bg-clip-text text-transparent">Designed to Perform</span>
            </h1>

            {/* Paragraph */}
            <p className="text-light-gray my-4  sm:my-6 md:max-w-4xl text-center mx-auto  text-base md:text-lg">
              At CodexRaft, we turn ideas into reliable, scalable digital experiences. We build fast websites, mobile apps, and WordPress platforms with intuitive UI/UX. Whether you&apos;re launching
              a startup or upgrading your business, we’re here to deliver solutions that perform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row justify-center gap-3 items-center md:gap-4">
              <Link to="/contact" className="blue-gradient group flex w-fit items-center gap-3 rounded px-2 sm:px-5 py-2.5">
                <FiPhoneOutgoing size={20} className="transition group-hover:rotate-12" />
                Let&apos;s Work Together
              </Link>
              <Link
                to="/services"
                className="from-card-bg to-main/30 text-light-gray flex w-fit border border-main/10 border-r-0 items-center gap-1 rounded  bg-gradient-to-l px-2 sm:px-5 py-2.5 transition duration-150 hover:text-white">
                Services
                <span className="">
                  <FiChevronsRight size={20} className="transition" />
                </span>
              </Link>
            </div>

            {/* User Avatars */}
            <div className="user-avater mt-5 flex items-center justify-center gap-2.5">
              <img className="h-full w-full max-w-[130px] sm:max-w-[150px]" src="./assets/users-avatar.png" alt="users-avatar" loading="lazy" />
              <p className="text-sm text-white sm:text-base">Join 460+ happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
