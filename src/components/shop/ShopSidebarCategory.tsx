import { courseCategory } from "@/data/course-category-data";
import useGlobalContext from "@/hooks/use-context";
import React, { useState } from "react";

const ShopSidebarCategory = () => {
    const { setInputValue,setFilterType} = useGlobalContext()
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleSelect = (item:string)=>{
    setInputValue(item)
    setFilterType("category")
  }
  return (
    <>
      <div
        className={`course-sidebar-info ${
          isActive ? "danger" : "content-hidden"
        }`}
      >
        <h3 className="drop-btn" onClick={handleToggle}>
          Categories
        </h3>
        <ul>
        <li onClick={()=>handleSelect("")} >
              <div className="course-sidebar-list">
                <input className="edu-check-box" type="checkbox" id= "all-id"/>
                <label className="edu-check-label" htmlFor="all-id">
                 View All
                </label>
              </div>
            </li>
          {courseCategory.map((item) => (
            <li onClick={()=>handleSelect(item.category)} key={item.id}>
              <div className="course-sidebar-list">
                <input className="edu-check-box" type="checkbox" id={item.category + "id"} />
                <label className="edu-check-label" htmlFor={item.category + "id"}>
                 {item.category}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShopSidebarCategory;
