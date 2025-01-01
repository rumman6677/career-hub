import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(jobs => jobs.id === idInt);
    // console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('Applied successfully')
    }

    return (
        <div>
 <h2 className="my-5 font-semibold">Job Details Id: {job.job_title}</h2>
            <div className="grid md:grid-cols-4 gap-4 ">
                <div className="border  md:col-span-3">
                    <div className="">
                        <p className="text-sm "><span className="font-bold">Job Description: </span>
                        {job.job_description}
                        </p>

                        <p className="text-sm mt-5"><span className="font-bold">Job Responsibility:  </span>{job.job_responsibility}</p>

                        <p className="text-sm mt-5"><span className="font-bold mt-2">Educational Requirements: </span>
                        <br /> <br />
                        {job.educational_requirements}.</p>

                        <p className="text-sm mt-5"><span className="font-bold ">Experiences: </span> <br /> <br />
                        {job.experiences}</p>
                    </div>
                </div>
                <div className="border">
                    <h2 className="text-2xl"></h2>
                    <button onClick={handleApplyJob}  className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;