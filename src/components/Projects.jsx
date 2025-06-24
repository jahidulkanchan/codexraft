import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
   const [projects, setProjects] = useState([]);
    useEffect(() => {
      fetch("/projects.json")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);
  return (
    <>
      <section id="projects" className="px-2 md:px-5 bg-gradient-to-l py-8 lg:py-16 from-[#141312] to-black mt-[50px]">
        <div className="heading">
          <h2 className="text-3xl font-semibold text-center text-btnColor mb-10">Recent Projects</h2>
        </div>
        <div className="grid gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project,index)=> (
            <div className="project-card border border-slate-800 pb-5 bg-bgDarkBlack shadow-lg rounded-xl overflow-hidden" key={index}>
              <img className="scale-90 hover:scale-100 duration-300 transition" src={project.image} alt="" />
              <h2 className="text-white text-md md:text-lg ml-5"><span className="text-btnColor">Project Name:</span> {project.projectName}</h2>
              <div className="flex justify-between px-5 py-2">
                <Link to={`/project/${project.id}`} className="px-5 py-2 bg-btnColor rounded mt-2 hover:bg-opacity-80 duration-100">View Details</Link>
                <Link to={project.url} target="_blank" className="px-5 py-2 bg-btnColor rounded mt-2 hover:bg-opacity-80 duration-100">Preview</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;