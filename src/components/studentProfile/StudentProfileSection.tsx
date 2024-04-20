import React from "react";
import courseStudentImage from "../../../public/assets/img/course/course-student.png";
import Image from "next/image";
import StudentProfileSidebar from "./StudentProfileSidebar";
import DashboardCounter from "./DashboardCounter";
import InProgressCourse from "./InProgressCourse";
import MyProfile from "./MyProfile";
import StudentProfileEnroll from "./StudentProfileEnroll";
import StudentProfileReviews from "./StudentProfileReviews";
import OrderHistory from "./OrderHistory";
import StudentUpdateProfile from "./StudentUpdateProfile";
import StudentWishlistCourse from "./StudentWishlistCourse";

const StudentProfileSection = () => {
  return (
    <div className="course-details-area pt-120 pb-100">
      <div className="container">
        <div className="student-profile-author pb-30">
          <div className="student-profile-author-img">
            <Image
              src={courseStudentImage}
              style={{ width: "100%", height: "auto" }}
              alt="img not found"
            />
          </div>
          <div className="student-profile-author-text">
            <span>Hello,</span>
            <h3 className="student-profile-author-name">David Allberto</h3>
          </div>
        </div>
        <div className="row">
          <StudentProfileSidebar />
          <div className="col-xl-9 col-lg-8">
            <div className="student-profile-content">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h4 className="mb-25">Dashboard</h4>
                  <div className="student-profile-content-fact">
                    <DashboardCounter />
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="mb-25">In Progress Courses</h4>
                        <InProgressCourse />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h4 className="mb-25">My Profile</h4>
                  <MyProfile />
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <h4 className="mb-25">Enrolled Courses</h4>
                  <StudentProfileEnroll />
                </div>
                <div
                  className="tab-pane fade"
                  id="wishlist"
                  role="tabpanel"
                  aria-labelledby="wishlist-tab"
                >
                  <h4 className="mb-25">Wishlist</h4>
                  <div className="student-profile-wishlist">
                    <div className="row">
                      <StudentWishlistCourse />
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <h4 className="mb-25">Reviews</h4>
                  <StudentProfileReviews />
                </div>
                <div
                  className="tab-pane fade"
                  id="quiz"
                  role="tabpanel"
                  aria-labelledby="quiz-tab"
                >
                  <p>No quiz attempts yet.</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="history"
                  role="tabpanel"
                  aria-labelledby="history-tab"
                >
                  <h4 className="mb-25">Order History</h4>
                  <OrderHistory />
                </div>
                <div
                  className="tab-pane fade"
                  id="ques"
                  role="tabpanel"
                  aria-labelledby="ques-tab"
                >
                  <p>No question completed yet.</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="setting"
                  role="tabpanel"
                  aria-labelledby="setting-tab"
                >
                  <h4 className="mb-25">Settings</h4>
                  <StudentUpdateProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileSection;
