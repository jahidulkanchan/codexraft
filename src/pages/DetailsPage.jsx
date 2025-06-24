import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const {id} = useParams();
  const loadData = useLoaderData()
  const mainData = loadData.find(item=> item.id === id)
  const [detail,setDetail]= useState(mainData)
  const {projectName,details,image,url,sourceCode,type,challenge,improvement,technology} = detail
  return (
    <>
      <section className="px-2 text-white container mx-auto md:px-5 mt-[130px]">
        <div className="details-card md:flex gap-8  justify-center">
          <div className="w-full">
            <img className="h-[350px] min-w-[320px] mb-5 md:mb-0" src={image} alt="" />
            <br />
            <Link className="px-5 py-2 bg-btnColor text-black rounded hover:bg-opacity-80 duration-100" to="/">
              Go Back
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="mb-5 text-3xl">
              {projectName} {type}
            </h2>
            <p className="text-slate-400">
              <span className="font-semibold text-btnColor">Website Details: </span> {details}
            </p>
            <p className="my-2 text-slate-400">
              <span className="font-semibold text-btnColor">Technology Used: </span> {technology}
            </p>
            <hr />
            <p className="mt-2 text-slate-400">
              <span className="font-semibold text-btnColor">Development Challenges: </span>
              {challenge}
            </p>
            <p className="mt-2 text-slate-400">
              <span className="font-semibold text-btnColor">Improvement: </span>
              {improvement}
            </p>
            <div className="flex gap-5 items-center">
              <Link to={url} target="_blank" className="px-5 py-2 shadow-md mt-5 block w-fit bg-btnColor text-black rounded hover:bg-opacity-80 duration-100">
                Preview
              </Link>
              <Link to={sourceCode} target="_blank" className="px-5 py-2 shadow-md mt-5 block w-fit bg-btnColor text-black rounded hover:bg-opacity-80 duration-100">
                Github
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;