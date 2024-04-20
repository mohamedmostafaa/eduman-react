import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title:string;
  category:string;
  img?:StaticImageData;
}

const ZoomInfoArea:React.FC<{ ZoomCourse: Course }> = ({ZoomCourse}) => {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="zoom-main-thumb w-img mb-30">
       {ZoomCourse.img && <Image
          src={ZoomCourse.img}
          style={{ width: "100%", height: "auto" }}
          alt="zoom-tumb"
        />} 
      </div>
      <div className="zoom-main-content">
        <div className="content-main-heading">
          <Link className="category-color category-color-3" href="#">
            {ZoomCourse.category}
          </Link>
          <h2>{ZoomCourse.title}</h2>
        </div>
        <div className="contents-widget">
          <h4>Introduction</h4>
          <p>
            There are so many websites out there that have not considered the
            overall usability of their visually impaired users. When it comes to
            designing better links and sending better emails, Slava Shestopalov
            has a few tips on how to improve your websites experience while
            accessibility in mind.
          </p>
        </div>
        <div className="contents-widget">
          <h4>Objective:</h4>
          <div className="objective-list">
            <ul>
              <li>Exercise</li>
              <li>Case Study</li>
              <li>Role Play/ Simulation</li>
              <li>Lecture Discussion and </li>
              <li>Sharing/ Participatory</li>
            </ul>
          </div>
        </div>
        <div className="contents-widget mb-30">
          <h4>Contents of Class:</h4>
          <ul>
            <li>• HR Audit: Concept</li>
            <li>• Objectives and Purpose of Audit</li>
            <li>• Principles of Effective HR Auditing</li>
            <li>• Principles of Effective HR Auditing</li>
            <li>• Knowledge, Skills and Attitude of an HR Auditor</li>
            <li>• Tasks of an HR Auditor</li>
            <li>• Types of HR Audit</li>
            <li>• HR Audit Tools</li>
            <li>• Steps/ Stages of HR Audit</li>
            <li>• Techniques of Auditing</li>
            <li>• Method of HR Audit</li>
            <li>• Documents for HR Audit</li>
            <li>• HR Audit Check List</li>
            <li>• Specific Task during HR Audit</li>
            <li>• HR Audit Report Preparation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ZoomInfoArea;
