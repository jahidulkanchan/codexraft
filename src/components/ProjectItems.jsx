import { useState } from 'react';
import { FiLayout, FiCode, FiMonitor, FiSmartphone } from 'react-icons/fi';

const ProjectItems = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // Web Development Projects
    {
      id: 1,
      category: 'web',
      title: 'E-Commerce Platform',
      description: 'Custom online store with payment integration and inventory management',
      tag: 'Web Development',
      tagColor: 'bg-blue-100 text-blue-800',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      icon: <FiCode className="text-blue-500" />,
    },
    {
      id: 2,
      category: 'web',
      title: 'Corporate Website',
      description: 'Responsive business website with CMS integration',
      tag: 'Web Development',
      tagColor: 'bg-blue-100 text-blue-800',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      icon: <FiCode className="text-blue-500" />,
    },
    // WordPress Development Projects
    {
      id: 3,
      category: 'wordpress',
      title: 'WordPress Blog',
      description: 'Custom theme development for professional blog',
      tag: 'WordPress Development',
      tagColor: 'bg-green-100 text-green-800',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
      icon: <FiMonitor className="text-green-500" />,
    },
    {
      id: 4,
      category: 'wordpress',
      title: 'Corporate WordPress Site',
      description: 'Custom theme with advanced admin panel',
      tag: 'WordPress Development',
      tagColor: 'bg-green-100 text-green-800',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      icon: <FiMonitor className="text-green-500" />,
    },
    // UX/UI Design Projects
    {
      id: 5,
      category: 'uxui',
      title: 'Mobile App UI',
      description: 'User interface design for fitness tracking application',
      tag: 'UX/UI Design',
      tagColor: 'bg-purple-100 text-purple-800',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      icon: <FiLayout className="text-purple-500" />,
    },
    {
      id: 6,
      category: 'uxui',
      title: 'Website Redesign',
      description: 'Complete UX overhaul for improved conversion rates',
      tag: 'UX/UI Design',
      tagColor: 'bg-purple-100 text-purple-800',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      icon: <FiLayout className="text-purple-500" />,
    },
    // App Development Projects
    {
      id: 7,
      category: 'app',
      title: 'Fitness Tracker App',
      description: 'Cross-platform mobile application with health integrations',
      tag: 'App Development',
      tagColor: 'bg-red-100 text-red-800',
      image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      icon: <FiSmartphone className="text-red-500" />,
    },
    {
      id: 8,
      category: 'app',
      title: 'E-Commerce Mobile App',
      description: 'Native iOS and Android shopping application',
      tag: 'App Development',
      tagColor: 'bg-red-100 text-red-800',
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1367&q=80',
      icon: <FiSmartphone className="text-red-500" />,
    },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="project-showcase py-12">
      <div className="container min-h-[300px]">
        <div className="heading-title relative mx-auto mb-12 text-center">
          <h2 className="from-icon-bg text-4xl md:text-6xl max-w-4xl to-main mx-auto bg-gradient-to-r bg-clip-text font-medium text-transparent">
            <span className="text-white">Explore Our </span>Project Portfolio
          </h2>
          <p className="text-light-gray mx-auto mt-4 max-w-3xl text-sm md:text-base">
            Discover our diverse range of successful projects — from web development to creative design solutions. Each project reflects our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            className={`filter-btn border-icon-bg/30 rounded border px-3 md:px-5 py-2 font-medium transition-all duration-150 flex items-center gap-2 ${
              activeFilter === 'all' ? 'blue-gradient text-white' : 'bg-card-bg text-light-gray hover:bg-light-blue hover:text-white'
            }`}
            onClick={() => setActiveFilter('all')}>
            <FiLayout /> All Projects
          </button>

          <button
            className={`filter-btn border-icon-bg/30 rounded border px-3 md:px-5 py-2 font-medium transition-all duration-150 flex items-center gap-2 ${
              activeFilter === 'web' ? 'blue-gradient text-white' : 'bg-card-bg text-light-gray hover:bg-light-blue hover:text-white'
            }`}
            onClick={() => setActiveFilter('web')}>
            <FiCode /> Web Development
          </button>

          <button
            className={`filter-btn border-icon-bg/30 rounded border px-3 md:px-5 py-2 font-medium transition-all duration-150 flex items-center gap-2 ${
              activeFilter === 'wordpress' ? 'blue-gradient text-white' : 'bg-card-bg text-light-gray hover:bg-light-blue hover:text-white'
            }`}
            onClick={() => setActiveFilter('wordpress')}>
            <FiMonitor /> WordPress Development
          </button>

          <button
            className={`filter-btn border-icon-bg/30 rounded border px-3 md:px-5 py-2 font-medium transition-all duration-150 flex items-center gap-2 ${
              activeFilter === 'uxui' ? 'blue-gradient text-white' : 'bg-card-bg text-light-gray hover:bg-light-blue hover:text-white'
            }`}
            onClick={() => setActiveFilter('uxui')}>
            <FiLayout /> UX/UI Design
          </button>

          <button
            className={`filter-btn border-icon-bg/30 rounded border px-3 md:px-5 py-2 font-medium transition-all duration-150 flex items-center gap-2 ${
              activeFilter === 'app' ? 'blue-gradient text-white' : 'bg-card-bg text-light-gray hover:bg-light-blue hover:text-white'
            }`}
            onClick={() => setActiveFilter('app')}>
            <FiSmartphone /> App Development
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group border-icon-bg/30 hover:shadow-main/35 overflow-hidden rounded-2xl border shadow-2xl transition-all duration-500">
              <img className="h-[280px] w-full object-cover transition-all duration-500 group-hover:scale-105" src={project.image} alt={project.title} />
              <div className="info px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="text-xl">{project.icon}</div>
                  <h2 className="bg-gradient-to-l from-light-blue to-main bg-clip-text text-transparent to text-2xl font-medium">{project.title}</h2>
                </div>
                <p className="text-light-gray mt-2">{project.description}</p>
                <span className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${project.tagColor}`}>{project.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectItems;
