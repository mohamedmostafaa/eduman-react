import React from "react";
import Link from "next/link";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SidebarEvent from "./SidebarEvent";
import events_data from "@/data/events-data";
import Image from "next/image";

const EventMain = () => {
  return (
    <main>
      <Breadcrumb title="Upcoming Event" subTitle="Upcoming Event" />

      <div className="event-ara pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {events_data.map((item) => (
                <div key={item.id} className="single-item mb-30">
                  <div className="event_date f-left">
                    <div className="event_date_inner">
                      <h4>{item.eventDate}</h4>
                      <span>{item.eventMonth}</span>
                    </div>
                  </div>
                  <div className="event_info">
                    <h3>
                      <Link href={`/event-details/${item.id}`}>{item.title}</Link>
                    </h3>
                    <div className="event-detalis d-flex align-items-center">
                      <div className="event-time mr-30 d-flex align-items-center">
                        <i className="flaticon-clock-1"></i>
                        <span>{item.clock}</span>
                      </div>
                      <div className="event-location d-flex align-items-centere">
                        <i className="flaticon-pin"></i>
                        <span>{item.palce}</span>
                      </div>
                    </div>
                    <div className="event-aduence d-flex align-items-center">
                      <div className="aduence-thumb">
                        {item.aduenceThumb.map((item) => (
                          <Image
                            key={item.id}
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="event-thumb"
                          />
                        ))}
                      </div>
                      <div className="adence-info">
                        <span>{item.adanceInfo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="get-ticket-btn">
                    <Link href="/" className="get-btn">
                      {item.btn}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <SidebarEvent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventMain;
