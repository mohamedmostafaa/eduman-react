"use client"

import { useRouter } from "next/navigation";
import React from "react";

const StudentProfileSidebar = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/login');
  };

  return (
    <div className="col-xl-3 col-lg-4">
      <div className="student-profile-sidebar mb-30">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i className="fas fa-tachometer-alt-fast"></i>
              Dashboard
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <i className="fas fa-user"></i> My Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <i className="fas fa-graduation-cap"></i> Enrolled Courses
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="wishlist-tab"
              data-bs-toggle="tab"
              data-bs-target="#wishlist"
              type="button"
              role="tab"
              aria-controls="wishlist"
              aria-selected="false"
            >
              <i className="fas fa-bookmark"></i> Wishlist
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              <i className="fas fa-star"></i> Reviews
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="quiz-tab"
              data-bs-toggle="tab"
              data-bs-target="#quiz"
              type="button"
              role="tab"
              aria-controls="quiz"
              aria-selected="false"
            >
              <i className="fas fa-cubes"></i> My Quiz Attempts
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="history-tab"
              data-bs-toggle="tab"
              data-bs-target="#history"
              type="button"
              role="tab"
              aria-controls="history"
              aria-selected="false"
            >
              <i className="fas fa-cart-plus"></i> Order History
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="ques-tab"
              data-bs-toggle="tab"
              data-bs-target="#ques"
              type="button"
              role="tab"
              aria-controls="ques"
              aria-selected="false"
            >
              <i className="fas fa-fist-raised"></i> Question & Answer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="setting-tab"
              data-bs-toggle="tab"
              data-bs-target="#setting"
              type="button"
              role="tab"
              aria-controls="setting"
              aria-selected="false"
            >
              <i className="fas fa-cog"></i> Settings
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button onClick={handleButtonClick}
              className="nav-link"
              id="logout-tab"
              data-bs-toggle="tab"
              data-bs-target="#logout"
              type="button"
              role="tab"
              aria-controls="logout"
              aria-selected="false"
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentProfileSidebar;
