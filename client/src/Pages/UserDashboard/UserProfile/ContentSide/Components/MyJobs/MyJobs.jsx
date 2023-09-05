import React, { useEffect, useState } from "react";
import axios from "axios";
import Job from "../../../../BrowsePage/Content/WorkCards/Job";
import CircularProgress from "@mui/material/CircularProgress";

const MyJobs = () => {
  const [company, setCompany] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const id = JSON.parse(localStorage.getItem("user"))._id;

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:8000/job/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest()
      .then((data) => setCompany(data.company))
      .finally(() => setIsLoading(false));
  }, []);
  const noJobsMessageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    fontSize: "2rem",
  };
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <div>
      {company && company.jobs && company.jobs.length > 0 ? (
        company.jobs.map((job, index) => (
          <Job
            id={job._id}
            key={index}
            isUser={true}
            title={job.title}
            description={job.description}
            salary={job.salary}
            imageURL={job.image}
            profilpic={company.picturePath}
            userName={company.companyName}
          />
        ))
      ) : (
        <div style={noJobsMessageStyle}>
          <p>You haven't added any jobs yet.</p>
        </div>
      )}
    </div>
  );
};

export default MyJobs;
