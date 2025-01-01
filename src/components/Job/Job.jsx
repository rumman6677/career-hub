import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="p-5 py-2 font-bold border rounded border-blue-600 text-blue-500 mr-2">{remote_or_onsite}</button>
            <button className="p-5 py-2 font-bold border rounded border-blue-600 text-blue-500 mr-2">{job_type}</button>
        </div>
        <div className="flex mt-4 gap-5">
          <h2 className="flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
          <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h2>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
