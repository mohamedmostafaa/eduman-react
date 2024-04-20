"use client";

import courses_data from "@/data/courses-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StudentWishlistCourse = () => {
  
  //handle ratings
  const getRating = (ratingsNum: any) => {
    let empty_rating_count = 5 - ratingsNum;
    let ratings = [];
    for (let i = 0; i < ratingsNum; i++) {
      ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
    }
    for (let i = 0; i < empty_rating_count; i++) {
      ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
    }
    return ratings;
  };

  return (
    <>
      {courses_data.slice(17, 20).map((item: any) => (
        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
          <div className="course-wrapper-2 mb-30">
            <div className="student-course-img">
              <Image
                src={item?.img}
                style={{ width: "100%", height: "auto" }}
                alt="course-img"
              />
            </div>
            <div className="course-cart">
              <div className="course-info-wrapper">
                <div className="cart-info-body">
                  <Link
                    href="/course"
                    className="category-color category-color-1"
                  >
                    {item?.category}
                  </Link>
                  <Link href="/course-details">
                    <h3>{item?.title}</h3>
                  </Link>
                  <div className="cart-lavel">
                    <h5>
                      Level : <span>{item?.level}</span>
                    </h5>
                    <p>
                      Knowledge is power. Information is liberating. Education
                      is the premise of progress, in every society, in every
                      family
                    </p>
                  </div>
                  <div className="info-cart-text">
                    <ul>
                      {item?.checkIcons?.map((item: any) => (
                        <li key={item.id}>
                          <i className={item.icon}></i>
                          {item.checkInfo}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="course-action">
                    <Link href="/course-details" className="view-details-btn">
                      View Details
                    </Link>
                    <button className="wishlist-btn">
                      <i className="fal fa-cart-arrow-down"></i>
                    </button>
                    <Link href="/course-details" className="c-share-btn">
                      <i className="flaticon-previous"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="student-course-footer">
              <div className="student-course-linkter">
                <div className="course-lessons">
                  <i className="fal fa-tv"></i>
                  <span className="ms-2">12 Lessons</span>
                </div>
                <div className="portfolio-price">
                  <span>
                    {item.price === "FREE" ? "FREE" : `$${item.price}`}
                  </span>
                </div>
              </div>
              <div className="student-course-text">
                <h3>
                  <Link href="/course-details">{item.title}</Link>
                </h3>
              </div>
              <div className="portfolio-user">
                <div className="user-icon">
                  <Link href="/instructor-profile">
                    <i className="fas fa-user"></i>
                    {item.authorName}
                  </Link>
                </div>
                <div className="course-icon">
                  {getRating(item?.ratings)}
                  <span>({item.ratingCount})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StudentWishlistCourse;
