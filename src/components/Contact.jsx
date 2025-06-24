import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Contact = () => {
  const handleForm  = (e) => {
    e.preventDefault();
    e.target.reset()
    toast.success('Message sent successfully')
  }
  return (
    <>
      <section id="contact" className="px-2 bg-gradient-to-r from-[#141312] to-black py-10 lg:px-5">
        <div className="heading">
          <h2 className="text-3xl font-semibold text-center text-btnColor mb-10">Contact Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="contact-form bg-bgDarkBlack shadow-lg border border-slate-900 rounded-xl p-5">
            <form onSubmit={handleForm}>
              <div className="flex gap-3 lg:gap-10">
                <div className="w-full">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    className="border border-slate-800 bg-black text-white w-full px-2 py-1 outline-none"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    className="border border-slate-800 bg-black text-white w-full px-2 py-1 outline-none"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <br />
              <label htmlFor="message" className="mt-5">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="border border-slate-800 bg-black text-white px-2 py-1 outline-none w-full min-h-[140px]"
                placeholder="Your Message"
                required
              ></textarea>
              <br />
              <button className="bg-btnColor rounded-md mt-5 ml-auto flex items-center gap-2 px-5 py-2">
                send <PiPaperPlaneTiltFill />
              </button>
            </form>
          </div>
          <div className="location md:p-5 mt-5 md:mt-0 flex flex-col min-h-full items-center justify-center ">
            <div className="border border-slate-950 drop-shadow-[0_5px_55px_rgba(195,255,56,0.3)] bg-gradient-to-t from-[#141312] to-black md:w-10/12 px-8 rounded-lg shadow-md py-5">
            <h3 className="text-2xl font-semibold mb-3 text-btnColor">Location:</h3>
            <ul className="space-y-2">
              <li className="flex text-slate-400 gap-2 items-center font-semibold"><span className="text-btnColor"><MdOutlineMarkEmailRead /> </span><span>jahidkanchan24@gmail.com</span></li>
              <li className="flex text-slate-400 gap-2 items-center font-semibold"><span className="text-btnColor"><FaPhoneAlt /> </span><span>01832741516</span></li>
              <li className="flex text-slate-400 gap-2 items-center font-semibold"><span className="text-btnColor"><FaMapMarkerAlt /></span><span>Tangail, Dhaka, Bangladesh</span></li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
