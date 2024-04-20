import React from "react";
import Link from "next/link";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import PaginationData from "../common/pagination/pagination-data";
import courses_data from "@/data/courses-data";
import Image from "next/image";
import InstructorImg from "../../../public/assets/img/course/course-instructors.png";
import { idType } from "@/interFace/interFace";
import team_data from "@/data/team-data";

const InstructorProMain = ({id}:idType)  => {
  const team = team_data.find(item=> item.id == id)
  return (
    <main>
      <Breadcrumb title="Instructor" subTitle="David Allberto" />

      <div className="course-detalies-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="course-instructors-img mb-30">
               {team?.image &&  <Image
                  src={team?.image}
                  style={{ width: "100%", height: "auto" }}
                  alt="nstructors-img"
                />}
              </div>
            </div>
            <div className="col-xl-8 col-lg-9">
              <div className="course-detelies-wrapper">
                <div className="course-detiles-tittle mb-30">
                  <h3>{team?.title}</h3>
                  <span>{team?.info}</span>
                </div>
                <div className="course-detiles-meta">
                  <div className="total-course">
                    <span>Total Courses</span>
                    <label>22</label>
                  </div>
                  <div className="student course">
                    <span>Students</span>
                    <label>5,230</label>
                  </div>
                  <div className="review-course">
                    <span>Review</span>
                    <div className="review-course-inner d-flex">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fas fa-star"></i>
                          </Link>
                        </li>
                      </ul>
                      <p>4.9 (540)</p>
                    </div>
                  </div>
                  <div className="course-details-action">
                    <div className="course-follow">
                      <Link href="#!" className="edu-follow-btn">
                        Follow
                      </Link>
                    </div>
                    <div className="course-share">
                      <Link href="#" className="share-btn">
                        <i className="far fa-share-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="course-bio-text pt-45 pb-20">
                  <h3>Biography</h3>
                  <p>
                    David Allberto is a Software Developer and Instructor having
                    enjoyed his courses to date. He is the creator of Codexpand,
                    a place of learning and growth to help people move into and
                    be successful within the Helping Industry. One of{" "}
                    {`Graham's`} key driving forces is to remove the barriers to
                    the Helping Industry by producing high quality, accredited
                    courses at affordable prices.
                  </p>
                </div>
                <div className="my-course-info">
                  <h3>My Courses</h3>
                </div>
                <div className="row">
                  {courses_data.slice(61, 65).map((item) => (
                    <div
                      key={item.id}
                      className="col-xl-6 col-lg-6 col-md-6 col-md-6"
                    >
                      <div className="eduman-course-main-wrapper mb-30">
                        <div className="eduman-course-img w-img">
                          <Link href={`/course-details/${item.id}`}>
                            {item.img && <Image src={item.img} style={{ width: "100%", height: "auto" }}alt="course-img"/>}
                          </Link>
                        </div>
                        <div className="eduman-course-wraper">
                          <div className="eduman-course-heading">
                            <Link
                              href="/course"
                              className={
                                item.categoryColor
                                  ? `${item.categoryColor}`
                                  : "course-link-color-1"
                              }
                            >
                              {item.category}
                            </Link>
                            <span className="couse-star">
                              <i className="fas fa-star"></i>
                              {item.ratingAve} ({item.ratingCount})
                            </span>
                          </div>
                          <div className="eduman-course-text">
                            <h3>
                              <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                            </h3>
                          </div>
                          <div className="eduman-course-meta">
                            <div className="eduman-course-price">
                              <span className="price-now"> {item.price === 0 ? "FREE" : `$${item.price}.00`}</span>
                              <del>{item.oldPrice ? `$${item.oldPrice}` : " "} </del>
                            </div>
                            <div className="eduman-course-tutor">
                              <Link href="/instructor-profile">
                                <Image
                                  src={item.tutorImg}
                                  style={{ width: "auto", height: "auto" }}
                                  alt="img not found"
                                />
                              </Link>
                              <Link href="/instructor-profile">
                                <span>{item.authorName}</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="eduman-course-footer">
                          <div className="course-lessson-svg">
                            {item.courseLesson && (
                                <Image
                                  src={item.courseLesson}
                                  style={{ width: "16px", height: "auto" }}
                                  alt="course-img"
                                />
                            )}
                            <span className="ms-2">{item.lessons}</span>
                          </div>
                          <div className="course-deteals-btn">
                            <Link href={`/course-details/${item.id}`}>
                              <span className="me-2">View Details</span>
                              <i className="far fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <PaginationData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InstructorProMain;
