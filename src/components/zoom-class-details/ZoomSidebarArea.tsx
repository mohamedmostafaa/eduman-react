"use client"
import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const ZoomSidebarArea = () => {
  const [value, onChange] = useState<any>(new Date());

  return (
    <div className="sidebar-widget-wrapper">
      <div className="sidebar-widget mb-30">
        <div className="sidebar-widget-details">
          <div className="zoom-widget-tittle">
            <h4>Details</h4>
          </div>
          <div className="zoom-widget-list">
            <ul>
              <li>
                <div className="widget-detalis">
                  <i className="flaticon-avatar"></i>
                  <span>Hosted by</span>
                </div>
                <div className="widget-list">
                  <span>Junior Lucy</span>
                </div>
              </li>
              <li>
                <div className="widget-detalis">
                  <i className="flaticon-calendar"></i>
                  <span>Date</span>
                </div>
                <div className="widget-list">
                  <span>10 Jan 2022</span>
                </div>
              </li>
              <li>
                <div className="widget-detalis">
                  <i className="flaticon-clock"></i>
                  <span>Schedule</span>
                </div>
                <div className="widget-list">
                  <span>10 AM - 12 PM</span>
                </div>
              </li>
              <li>
                <div className="widget-detalis">
                  <i className="flaticon-video-marketing"></i>
                  <span>Length</span>
                </div>
                <div className="widget-list">
                  <span>2h 10m</span>
                </div>
              </li>
              <li>
                <div className="widget-detalis">
                  <i className="flaticon-menu-2"></i>
                  <span>Category</span>
                </div>
                <div className="widget-list">
                  <span>Data Science</span>
                </div>
              </li>
              <li>
                <div className="widget-detalis">
                  <i className="flaticon-earth-grid-select-language-button"></i>
                  <span>Laguage</span>
                </div>
                <div className="widget-list">
                  <span>English</span>
                </div>
              </li>
              <li>
                <div className="widget-detalis">
                  <i className="flaticon-bookmark-white"></i>
                  <span>Hosted by</span>
                </div>
                <div className="widget-list">
                  <span>Via Zoom</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="zoom-btn">
            <Link href="/zoom-class-details" className="event-btn">
                <i className="flaticon-video-camera"></i>Join this class
            </Link>
          </div>
        </div>
      </div>
      <div className="sidebar-widget mb-30">
        <div className="sidebar-widget-inner">
          <div className="sidebar-widget-head mb-25">
            <h3>Find Class</h3>
          </div>
          <div className="sidebar-content">
            <div className="myCalendar edu-calender">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomSidebarArea;
