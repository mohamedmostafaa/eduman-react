import React from "react";
import Link from "next/link";
import team_data from "@/data/team-data";
import Image from "next/image";

const Instructors = () => {
  return (
    <section className="member-area pt-125 pb-90">
      <div className="container">
        <div className="row">
          {team_data.slice(0, 12).map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="member-main-wrapper mb-30">
                <div className="member-body text-center">
                  <div className="member-item">
                    <div className="member-thumb">
                      <Link href={`/instructor-profile/${item.id}`}>
                        {item.image && (
                          <Image
                            src={item.image}
                            style={{ width: "100%", height: "auto" }}
                            alt="member-img"
                          />
                        )}
                      </Link>
                    </div>
                    <div className="member-content">
                      <h4>
                        <Link href={`/instructor-profile/${item.id}`}>{item.title}</Link>
                      </h4>
                      <span>{item.info}</span>
                    </div>
                    <div className="member-social">
                      <ul>
                        {item.socialIcon.map((item: any) => (
                          <li key={item.id}>
                            <Link href={item.socialLink}>
                              <i className={item.icon}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="member-meta">
                  <div className="member-reating">
                    <i className="fas fa-star"></i>
                    <span>
                      {item.ratingAve}{" "}
                      {item.ratingCount && `(${item.ratingCount}k+)`}
                    </span>
                  </div>
                  <div className="member-course">
                    <i className="flaticon-computer"></i>
                    <Link href="/course">
                      <span>{item.memberCourse} Courses</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
