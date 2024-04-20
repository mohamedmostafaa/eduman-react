import faq_data from "@/data/faq-data";
import Link from "next/link";
import React from "react";

const FaqNavContent = () => {
  return (
    <div className="faq-nav-content">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="faq-area pt-30 pb-30">
            <div className="row">
              <div className="col-xl-12">
                <div className="faq-tittle-info text-center pt-55 mb-50">
                  <h2>Frequently Asked Queastions</h2>
                </div>
              </div>
              {faq_data.slice(0, 9).map((item) => (
                <div key={item.id} className="col-xl-4 col-md-6">
                  <div className="faq-wrapper mb-30">
                    <div className="faq-question-item">
                      <div className="faq-queastion-text">
                        <Link href={`/faq-details/${item.id}`}>{item.questionText}</Link>
                      </div>
                      <div className="faqicon-arrow">
                        <Link href={`/faq-details/${item.id}`}>
                          <i className={item.icon}></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="faq-area pt-30 pb-30">
            <div className="row">
              <div className="col-xl-12">
                <div className="faq-tittle-info text-center pt-55 mb-50">
                  <h2>Frequently Asked Queastions</h2>
                </div>
              </div>
              {faq_data.slice(9, 18).map((item) => (
                <div key={item.id} className="col-xl-4 col-md-6">
                  <div className="faq-wrapper mb-30">
                    <div className="faq-question-item">
                      <div className="faq-queastion-text">
                        <Link href="/faq-details">{item.questionText}</Link>
                      </div>
                      <div className="faqicon-arrow">
                        <Link href="/faq-details">
                          <i className={item.icon}></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqNavContent;
