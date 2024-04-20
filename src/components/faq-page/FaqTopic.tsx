import React from "react";
import Link from "next/link";
import FaqNavContent from "./FaqNavContent";
import categories_data from "@/data/categories-data";

const FaqTopic = () => {
  return (
    <div className="faq-topic-area pb-90">
      <div className="container">
        <div className="faq-tabs-area mt-50">
          <div className="row">
            <div className="col-xl-12">
              <div className="faq-nav-tab">
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
                      Student
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
                      Instructor
                    </button>
                  </li>
                </ul>
              </div>
              <FaqNavContent />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="faq-topic-title text-center pt-55 mb-45">
              <h3>FAQ Help Topic</h3>
            </div>
          </div>
          {categories_data.slice(18, 28).map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="topic-wrapper text-center mb-30">
                <div className="topic-items">
                  <div className="topic-svg">{item.icon && <item.icon />}</div>
                  <div className="topic-content">
                    <h4>
                      <Link href="/faq-page">{item.title}</Link>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqTopic;
