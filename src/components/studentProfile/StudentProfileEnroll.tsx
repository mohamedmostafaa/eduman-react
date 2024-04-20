import React from "react";
import UserEnrolledCourses from "./UserEnrolledCourses";
import StudentActiveCourses from "./StudentActiveCourses";

const StudentProfileEnroll = () => {
  return (
    <>
      <div className="student-profile-enroll">
        <ul className="nav mb-30" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="enrolled-tab"
              data-bs-toggle="tab"
              data-bs-target="#enrolled"
              type="button"
              role="tab"
              aria-controls="enrolled"
              aria-selected="true"
            >
              Enrolled Courses (5)
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="active-tab"
              data-bs-toggle="tab"
              data-bs-target="#active"
              type="button"
              role="tab"
              aria-controls="active"
              aria-selected="false"
            >
              Active Courses (2)
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="completed-tab"
              data-bs-toggle="tab"
              data-bs-target="#completed"
              type="button"
              role="tab"
              aria-controls="completed"
              aria-selected="false"
            >
              Completed Courses (0)
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="enrolled"
            role="tabpanel"
            aria-labelledby="enrolled-tab"
          >
            <div className="student-profile-enrolled-course">
              <div className="row">
                <UserEnrolledCourses />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="active"
            role="tabpanel"
            aria-labelledby="active-tab"
          >
            <div className="student-profile-enrolled-course">
              <div className="row">
                <StudentActiveCourses />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="completed"
            role="tabpanel"
            aria-labelledby="completed-tab"
          >
            <div className="student-profile-enrolled-course">
              <p>No course completed yet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfileEnroll;
