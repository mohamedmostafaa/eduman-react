import React from "react";
import ZoomInfoArea from "./ZoomInfoArea";
import ZoomSidebarArea from "./ZoomSidebarArea";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { idType, Course } from "@/interFace/interFace";
import zoom_data from "@/data/zoom-class-data";

const ZoomClassDetailsMain = ({ id }: idType) => {
  const ZoomCourse: any = zoom_data.find((item) => item.id === id);

  return (
    <main>
      <Breadcrumb
        title="Startup Business Management Live Classn"
        subTitle="Startup Business Management Live Classn"
      />

      <div className="zoom-class-detalis-area pt-120 pb-85">
        <div className="container">
          <div className="row">
            {ZoomCourse ? (
              <ZoomInfoArea ZoomCourse={ZoomCourse} />
            ) : (
              <p>No course found with the provided ID</p>
            )}
            <div className="col-xl-4 col-lg-5">
              <ZoomSidebarArea />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ZoomClassDetailsMain;
