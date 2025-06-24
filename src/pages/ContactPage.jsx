import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <section id="contact_section" className="contact-section relative min-h-[350px] overflow-hidden py-10">
      <img src="./assets/hero-grid.webp" alt="heroGrid" loading="lazy" className="absolute top-0 right-0 -z-2 mx-auto hidden h-full w-full object-cover opacity-15 md:block" />

      <div className="relative container">
        <div className="bg-main/30 absolute top-20 right-0 bottom-0 -z-1 mx-auto my-auto h-[250px] w-[250px] transform rounded-full blur-3xl sm:right-40"></div>
        <div className="heading-title relative mx-auto text-center text-2xl md:text-3xl lg:mb-8 lg:text-4xl">
          <p className="text-light-gray border-icon-bg/30 from-card-bg to-card-bg mx-auto w-fit rounded-3xl border bg-gradient-to-r px-5 py-1.5 text-xs uppercase md:mb-5">Contact</p>
        </div>
        <br />

        <div className="contact-content flex flex-col justify-between gap-3 lg:flex-row">
          <div className="left-content mx-auto max-w-[600px]">
            <h2 className="from-icon-bg to-main w-fit bg-gradient-to-r bg-clip-text text-left text-3xl md:text-5xl font-medium text-transparent lg:mt-0">Ask whatever you have in your mind</h2>
            <p className="text-light-gray mt-2 text-lg md:text-xl">Whether you have questions or are ready to discuss your business, we&#39;re here to help. Reach out today.</p>
            <div className="address mt-5 mb-5">
              <ul className="text-light-gray space-y-3 md:text-lg">
                <li className="flex items-start">
                  <FiMail className="text-icon-bg mt-0.5 mr-2 h-5 w-5" />
                  <a href="mailto:hello@codexdigital.com" className="hover:underline">
                    hello@codexdigital.com
                  </a>
                </li>
                <li className="flex items-start">
                  <FiPhone className="text-icon-bg mt-0.5 mr-2 h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <FiMapPin className="text-icon-bg mt-0.5 mr-2 h-7 w-5" />
                  <span>123 Digital Lane, Tech City, 10101</span>
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
                <input type="text" id="name" name="name" required placeholder="Jane Smith" className="bg-dark-bg w-full rounded-md border border-icon-bg/30 outline-none px-4 py-2 text-white" />
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
                  placeholder="jane@example.com"
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
                  placeholder="Hi, I am reaching out for..."
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
