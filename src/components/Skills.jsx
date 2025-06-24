import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <>
      <section id="skills" className="px-2 bg-gradient-to-b from-[#141312] to-black py-8 lg:px-5 lg:py-16">
        <div className="heading">
          <h2 className="text-3xl font-semibold text-btnColor text-center mb-10">Skills</h2>
        </div>
        <Marquee className="mb-2 md:mb-6" gradient={true} gradientColor='black' autoFill={true} speed={30}>
          {skills.map((item, index) => (
            <div className="text-center group md:min-w-[150px] flex items-center px-5 py-1 md:py-3 gap-3 mx-2 border border-slate-900 rounded bg-bgDarkBlack" key={index}>
              <img className="w-[50px] h-[50px] grayscale group-hover:grayscale-0" src={item.image} alt={item.name} />
              <p className="text-white">{item.name}</p>
            </div>
          ))}
        </Marquee>
        <Marquee autoFill={true} direction="right" gradient={true} gradientColor='black' speed={30}>
          {skills.map((item, index) => (
            <div className="text-center md:min-w-[150px] group flex items-center px-5 py-1 md:py-3 gap-3 mx-2 border border-slate-900 rounded bg-bgDarkBlack" key={index}>
              <img className="w-[50px] h-[50px] grayscale group-hover:grayscale-0 " src={item.image} alt={item.name} />
              <p className="text-white" >{item.name}</p>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default Skills;
