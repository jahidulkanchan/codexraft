import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Fake data
  const companyInfo = {
    name: 'Codex Digital',
    description: 'Codex Digital is a premier web development agency specializing in custom websites, mobile applications, and digital solutions. We transform ideas into powerful digital experiences.',
    logo: '/assets/logo.png',
    year: new Date().getFullYear(),
  };

  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: 'https://facebook.com/codexdigital', label: 'Facebook' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/company/codexdigital', label: 'LinkedIn' },
    { icon: <FaInstagram size={20} />, url: 'https://instagram.com/codexdigital', label: 'Instagram' },
    { icon: <FaWhatsapp size={20} />, url: 'https://wa.me/1234567890', label: 'WhatsApp' },
  ];

  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  const followLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
  ];

  const contactInfo = [
    { icon: <FiMapPin className="text-icon-bg mt-0.5 mr-2 h-5 w-5" />, text: '123 Digital Lane, Tech City, 10101' },
    { icon: <FiPhone className="text-icon-bg mt-0.5 mr-2 h-5 w-5" />, text: '+1 (555) 123-4567' },
    { icon: <FiMail className="text-icon-bg mt-0.5 mr-2 h-5 w-5" />, text: 'hello@codexdigital.com', isEmail: true },
  ];

  return (
    <footer id="footer_section" className="relative overflow-hidden pt-8">
      <div className="relative container">
        <div className="flex flex-col justify-between md:flex-row md:gap-8 lg:gap-0">
          {/* Logo and Company Info */}
          <div>
            <div className="logo">
              <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
                <img className="w-[170px] rounded-lg object-cover md:w-[200px]" src={companyInfo.logo} alt={`${companyInfo.name} Logo`} />
              </Link>
            </div>
            <p className="text-light-gray text-sm max-w-[430px] md:max-w-[300px] lg:max-w-[400px] pt-2.5">{companyInfo.description}</p>

            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.url}
                  className="text-icon-bg hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={`Visit our ${social.label} page`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="mt-8 flex flex-wrap gap-6 md:mt-0 md:flex-row md:justify-between md:gap-8 lg:gap-24">
            {/* Menu Links */}
            <div>
              <p className="text-lg font-semibold">Menu</p>
              <ul className="text-light-gray mt-2 flex flex-col gap-2 text-sm">
                {menuLinks.map((item, index) => (
                  <li key={index} className="group relative w-fit">
                    <span className="blue-gradient absolute bottom-0 h-[2.5px] w-full origin-center scale-x-0 duration-300 group-hover:scale-x-100"></span>
                    <Link to={item.path} className="relative font-medium duration-150 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <p className="font-semibold mt-0.5 sm:mt-0">Follow us</p>
              <ul className="text-light-gray mt-2 space-y-2 text-sm">
                {followLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="font-semibold">Contact</p>
              <address className="mt-2 not-italic">
                <ul className="text-light-gray space-y-3 text-sm">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {item.icon}
                      {item.isEmail ? (
                        <a href={`mailto:${item.text}`} className="hover:underline">
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="relative mx-auto py-4 border-t-[1px] border-transparent pt-4 text-center">
          <div className="via-icon-bg/30 absolute inset-x-0 top-4 h-[1px] bg-gradient-to-r from-transparent to-transparent"></div>
          <p className="text-light-gray text-sm pt-4">
            © {companyInfo.year} 
            <Link className="text-icon-bg inline-block transition-colors px-2 duration-150 hover:text-white" to="/">
               {companyInfo.name}.
            </Link> 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
