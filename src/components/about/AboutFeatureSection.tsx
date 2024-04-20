import about_feature_data from "@/data/about-feature-data";
import React from "react";

const AboutFeatureSection = () => {
  return (
    <div className="features-area section-bg fix long-padding pt-110">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-60">
              <h2>
                Global Online <br />
                Education <span className="down-mark-line-2">Categories</span>
              </h2>
            </div>
          </div>
          {about_feature_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="features-box text-center mb-30">
                <div className="features-svg">{item.icon && <item.icon />}</div>
                <div className="features-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFeatureSection;
