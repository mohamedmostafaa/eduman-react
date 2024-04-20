"use client";
import React, { useState } from "react";
import { courseRatingData } from "@/data/course-ratings-data";
import ShopSidebarCategory from "./ShopSidebarCategory";
import ShopPrice from "./ShopPrice";
import ShopLevel from "./ShopLevel";
import useGlobalContext from "@/hooks/use-context";

const ShopSidebar = () => {
  const [isActiveA, setActiveA] = useState(false);
  const { setInputValue,setFilterType } = useGlobalContext();
  const handleToggleA = () => {
    setActiveA(!isActiveA);
  };

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

  const handleSelect = (item:number)=>{
    const formate = item.toString()
    setInputValue(formate)
    setFilterType("ratings")
  }

  //for rating handle
  return (
    <div>
      <div className="course-sidebar-widget mb-20">
        <ShopSidebarCategory />
      </div>
      <ShopLevel />
      <div className="course-sidebar-widget mb-20">
        <div
          className={`course-sidebar-info ${
            isActiveA ? "danger" : "content-hidden"
          }`}
        >
          <h3 className="drop-btn" onClick={handleToggleA}>
            Ratings
          </h3>
          <ul>
            {courseRatingData.map((item) => (
              <li onClick={()=>handleSelect(item.ratings)}  key={item.id}>
                <div className="course-sidebar-list">
                  <input
                    className="edu-check-box"
                    type="radio"
                    id={item.checkBoxId}
                    name="rating"
                  />
                  <label className="edu-check-star" htmlFor={item.htmlForClass}>
                    {getRating(item?.ratings)}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ShopPrice/>
    </div>
  );
};

export default ShopSidebar;
