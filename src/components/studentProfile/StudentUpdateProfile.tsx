import React from "react";
import StudentImage from "../../../public/assets/img/course/course-student.png";
import Image from "next/image";
import StudentContactForm from "@/form/student-contact-form";
import StudentPasswordForm from "@/form/StudentPasswordForm";
import SocialProfileFrom from "@/form/social-profile-form";

const StudentUpdateProfile = () => {
  return (
    <>
      <div className="student-profile-enroll">
        <ul className="nav mb-30" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="profileA-tab"
              data-bs-toggle="tab"
              data-bs-target="#profileA"
              type="button"
              role="tab"
              aria-controls="profileA"
              aria-selected="true"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="password-tab"
              data-bs-toggle="tab"
              data-bs-target="#password"
              type="button"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
              Password
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="completedA-tab"
              data-bs-toggle="tab"
              data-bs-target="#completedA"
              type="button"
              role="tab"
              aria-controls="completedA"
              aria-selected="false"
            >
              Social
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="profileA"
            role="tabpanel"
            aria-labelledby="profileA-tab"
          >
            <div className="student-profile-settings">
              <div className="student-profile-setting-img mb-40">
                <div
                  className="student-profile-setting-cover-img"
                  style={{
                    backgroundImage:
                      "url(/assets/img/slider/course-slider.jpg)",
                  }}
                ></div>
                <div className="student-profile-setting-author-img">
                  <Image src={StudentImage} style={{width:'100%', height:'auto'}} alt="img not found" />
                </div>
              </div>
                <StudentContactForm/>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <StudentPasswordForm/>
          </div>
          <div
            className="tab-pane fade"
            id="completedA"
            role="tabpanel"
            aria-labelledby="completedA-tab"
          >
            <div className="student-social-profile-link">
              <span className="mb-20">Social Profile Link</span>
              <SocialProfileFrom/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentUpdateProfile;
