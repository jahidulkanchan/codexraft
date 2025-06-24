import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <section id="contact_section" className="contact-section relative min-h-[350px] overflow-hidden py-10">
      <img src="./assets/hero-grid.webp" alt="heroGrid" loading="lazy" className="absolute top-0 right-0 -z-2 mx-auto hidden h-full w-full object-cover opacity-15 md:block" />
      <div className="relative container px-3">
        <div className="heading-title relative mx-auto text-center text-2xl md:text-3xl lg:mb-8 lg:text-4xl">
          <p className="text-light-gray border-icon-bg/30 from-card-bg to-card-bg mx-auto w-fit rounded-3xl border bg-gradient-to-r px-5 py-1.5 text-xs uppercase md:mb-5">Contact</p>
        </div>
        <br />

        <div className="contact-content flex flex-col justify-between gap-3 lg:flex-row">
          <div className="left-content mx-auto max-w-[600px]">
            <h2 className="from-icon-bg to-main w-fit bg-gradient-to-r bg-clip-text text-left text-3xl md:text-5xl font-medium text-transparent lg:mt-0">Ask whatever you have in your mind</h2>
            <p className="text-light-gray mt-2 text-lg md:text-xl">Whether you have questions or want to discuss your next project, we’re here to help. Reach out to CodexRaft today.</p>
            <div className="address mt-5 mb-5">
              <ul className="text-light-gray space-y-3 md:text-lg">
                <li className="flex items-start">
                  <FiMail className="text-icon-bg mt-0.5 mr-2 h-5 w-5" />
                  <a href="mailto:contact@codexraft.dev" className="hover:underline">
                    contact@codexraft.dev
                  </a>
                </li>
                <li className="flex items-start">
                  <FiPhone className="text-icon-bg mt-0.5 mr-2 h-5 w-5" />
                  <span>+880 1234-567890</span>
                </li>
                <li className="flex items-start">
                  <FiMapPin className="text-icon-bg mt-0.5 mr-2 h-7 w-5" />
                  <span>42 Dev Street, CodeTown, BD 4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="right-content sm:mx-auto">
            <form className="w-full space-y-6 sm:w-[450px] md:w-[600px]">
              <div>
                <label htmlFor="name" className="text-light-gray mb-1 block text-lg font-medium">
                  Name
                </label>
                <input type="text" id="name" name="name" required placeholder="Your name" className="bg-dark-bg w-full rounded-md border border-icon-bg/30 outline-none px-4 py-2 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="text-light-gray mb-1 block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Type your email"
                  className="bg-dark-bg w-full rounded-md border border-icon-bg/30 outline-none px-4 py-2 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-light-gray mb-1 block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  required
                  placeholder="Send us a message"
                  className="bg-dark-bg w-full rounded-md border border-icon-bg/30 outline-none px-4 py-2 text-white"></textarea>
              </div>
              <button type="submit" className="blue-gradient inline-block w-full rounded py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
