import WebinarData from "@/data/webinar-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WebinarSection = () => {
  return (
    <div className="edu-webinar-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          {WebinarData.map((item) => (
            <div key={item.id} className="col-lg-6">
              <div className="edu-webinar mb-30">
                <div className="edu-webinar-img">
                 {item.img && <Image
                    src={item.img}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />}
                  <span className="webinar-badge">{item.badge}</span>
                </div>
                <div className="edu-webinar-text">
                  <h3 className="edu-webinar-text-title">
                    <Link href={`/webinar-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <i className="far fa-calendar-alt"></i>
                      {item.date}
                    </li>
                    <li>
                      <i className="far fa-clock"></i> {item.time}
                    </li>
                  </ul>
                  <p>{item.desc}</p>
                  <Link
                    href={`/webinar-details/${item.id}`}
                    className="edu-btn"
                  >
                    {item.btn}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebinarSection;
