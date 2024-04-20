import categories_data from "@/data/categories-data";
import React from "react";

const InstructorFeature = () => {
  return (
    <div className="features-area fix pt-110 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-50">
              <h2>
                Spread Your <span className="down-mark-line-2">Knowledge</span>
              </h2>
            </div>
          </div>
          {categories_data.slice(15, 18).map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="features-box text-center mb-30">
                <div className="features-svg">
                    {item.icon && <item.icon/>}
                </div>
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

export default InstructorFeature;
