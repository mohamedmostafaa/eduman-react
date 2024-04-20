import { progress_data } from "@/data/in-progrss-course-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InProgressCourse = () => {
  //for rating handle
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
  //for rating handle
  return (
    <>
      {progress_data.map((item) => (
        <div key={item.id} className="inprogress-course mb-30">
          <div className="inprogress-course-img">
            <Link href="/course">
              <Image
                src={item.img}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
            </Link>
          </div>
          <div className="inprogress-course-text">
            <div className="inprogress-course-rating">
              {getRating(item?.ratings)}
              <span>{item.ratingAve}</span>
            </div>
            <h4 className="inprogress-course-title">
              <Link href="/course">{item.title}</Link>
            </h4>
            <div className="inprogress-course-lesson mb-15">
              <span>Completed Lessons :</span>
              <h6>
                <span>{item.lesson}</span> of <span>{item.lessonTwo}</span>{" "}
                lessons
              </h6>
            </div>
            <div className="rating-row mb-10">
              <div className="progress">
                <div
                  className="progress-bar progress-bar1 wow fadeInLeft"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="progress-tittle">
                <h6>
                  <span>{item.progrssNum && `${item.progrssNum}%`}</span>{" "}
                  Complete
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default InProgressCourse;
