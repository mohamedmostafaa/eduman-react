import { slidebarLavelCategory } from "@/data/sidebar-level-cetagory-data";
import useGlobalContext from "@/hooks/use-context";
import React, { useState } from "react";

const ShopLevel = () => {
  const { setInputValue,setFilterType } = useGlobalContext();
  const [isActiveC, setActiveC] = useState(false);
  const handleToggleC = () => {
    setActiveC(!isActiveC);
  };

  const handleSelect = (item:string)=>{
    setInputValue(item)
    setFilterType("level")
  }
  return (
    <div className="course-sidebar-widget mb-20">
      <div
        className={`course-sidebar-info ${
          isActiveC ? "danger" : "content-hidden"
        }`}
      >
        <h3 className="drop-btn" onClick={handleToggleC}>
          Level
        </h3>
        <ul>
          <li onClick={()=>handleSelect("")}>
            <div className="course-sidebar-list">
              <input className="edu-check-box" type="checkbox" id="e-lave" />
              <label className="edu-check-label" htmlFor="e-lave">
                All levels
              </label>
            </div>
          </li>

          {slidebarLavelCategory.map((item) => (
            <li onClick={()=>handleSelect(item.level)} key={item.id}>
            <div className="course-sidebar-list">
              <input className="edu-check-box" type="checkbox" id={item.level + "id"} />
              <label className="edu-check-label" htmlFor={item.level + "id"}>
                {item?.level}
              </label>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopLevel;
