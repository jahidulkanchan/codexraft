
import { FaCode, FaMobileAlt, FaWordpress, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-main" size={20} />,
    title: 'Web Development',
    description:
      'We specialize in creating fast, SEO-optimized, and responsive websites using cutting-edge technologies like React and Next.js. Whether it’s a sleek portfolio or a dynamic business platform, our solutions ensure high performance, scalability, and modern user experiences tailored for growth.',
    services: ['React/Next.js Development', 'Responsive Design', 'API Integration', 'Performance Optimization', 'SEO Friendly'],
  },
  {
    icon: <FaWordpress className="text-main" size={20} />,
    title: 'WordPress Development',
    description:
      'From custom theme design to full-scale eCommerce solutions, our WordPress services cover everything you need for a professional online presence. We deliver robust, secure, and easy-to-manage websites backed by powerful plugins and tailored design systems.',
    services: ['Custom Theme Development', 'WooCommerce Solutions', 'Security Optimization', 'Performance Tuning', 'Maintenance & Support'],
  },
  {
    icon: <FaMobileAlt className="text-main" size={20} />,
    title: 'App Development',
    description:
      'We craft intuitive, cross-platform mobile applications with consistent performance across iOS and Android. From wireframes to deployment, we focus on usability, speed, and aesthetic interfaces that engage users and drive real results.',
    services: ['React Native Development', 'Performance Optimization', 'App Store Deployment', 'UI/UX Design', 'Push Notifications'],
  },
  {
    icon: <FaPaintBrush className="text-main" size={20} />,
    title: 'UI/UX Design',
    description:
      'A great product starts with great design. Our UI/UX team creates elegant, user-centric interfaces that not only look good but are intuitive and conversion-focused. We ensure your brand communicates clearly through every visual element.',
    services: ['Wireframing & Prototyping', 'Web & App Design', 'Brand Consistency', 'User Journey Mapping', 'Design Systems'],
  },
];

const ProvidedServices = () => {
  return (
    <section className="services-section py-12" id="provided_services">
      <div className="container px-4">
        <div className="heading-title relative mx-auto mb-12 text-center">
          <h2 className="from-icon-bg text-4xl md:text-6xl max-w-4xl to-main mx-auto bg-gradient-to-r bg-clip-text font-medium text-transparent">
            <span className="text-white">Elevate Your Brand </span>with Our Expert Solutions
          </h2>
          <p className="text-light-gray mx-auto mt-4 max-w-3xl text-sm md:text-base">
            We deliver cutting-edge digital services tailored to your business goals — combining design, development, and technology to drive measurable results.
          </p>
        </div>

        <div id="services_section_container" className="relative text-white">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {services.map((service, index) => (
              <div key={index} data-aos="fade-up" className="card border-icon-bg/30 bg-card-bg min-h-[300px] relative overflow-hidden rounded-lg border px-2.5 py-5">
                <div className="bg-main/50 absolute -top-10 -right-10 h-[100px] w-[100px] blur-2xl"></div>
                <div className="flex items-center gap-4">
                  <div className="border-light-gray/20 flex h-[50px] w-[50px] items-center justify-center rounded-md border">{service.icon}</div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                </div>
                <p className="text-light-gray pt-4 text-sm">{service.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {service.services.map((item, i) => (
                    <div key={i} className="bg-main/10 border border-icon-bg/30 inline-flex items-center gap-2 rounded px-3 py-1.5">
                      <span className="bg-icon-bg inline-block h-[5px] w-[5px] rounded-full"></span>
                      <p className="text-light-gray text-xs capitalize">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:grid gap-10 md:grid-cols-2">
            <div className="absolute left-1/2 top-0 h-full -translate-x-1/2">
              <div className="bg-main relative h-full w-0.5">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{ top: `${index * 25 + 12.5}%` }}
                  >
                    <div className="border-icon-bg/30 bg-card-bg flex h-12 w-12 items-center justify-center rounded-full border-2">{service.icon}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Desktop Layout */}
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`card border-icon-bg/30 bg-card-bg relative min-h-[350px] overflow-hidden rounded-xl px-3 border py-5 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                style={{ width: '90%' }}>
                <div className="bg-main/50 absolute -top-10 -right-10 h-[100px] w-[100px] blur-2xl"></div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-light-gray pt-4 text-lg">{service.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {service.services.map((item, i) => (
                    <div key={i} className="bg-main/10 border border-icon-bg/30 inline-flex items-center gap-2 rounded-lg px-3 py-1.5">
                      <span className="bg-icon-bg inline-block h-[6px] w-[6px] rounded-full"></span>
                      <p className="text-light-gray text-sm capitalize">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvidedServices;
