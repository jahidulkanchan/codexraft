// import myProfile from '../assets/Profile.png'

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-t from-[#141312] to-black py-10 px-6">
      <div className="max-w-4xl text-center mx-auto">
        {/* <img className='w-[100px] bg-[#171717] object-cover mx-auto drop-shadow-[0_5px_10px_rgba(195,255,56,0.3)] border border-slate-800 h-[100px] rounded-full' src={myProfile} alt="" /> */}
        <h2 className="text-3xl font-semibold mb-5 mt-3 text-btnColor">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg text-slate-400 mb-4">
              Hello, I&apos;m Md Jahidul Islam, a passionate front-end developer
              with experience in full-stack development. I specialize in creating beautiful and functional websites
              using modern technologies like React, Node.js, and Tailwind CSS. I love learning new things and solving
              complex problems with code.
            </p>
            <p className="text-lg text-slate-400 mb-2">
              In my spare time, I enjoy working on personal projects, playing cricket, and experimenting with new web
              technologies. I&apos;m always eager to explore backend work and stay curious about learning and discovering new things.
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

