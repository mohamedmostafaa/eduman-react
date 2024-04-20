"use client" 
import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import zoom_data from '@/data/zoom-class-data';
import Image from 'next/image';

const ZoomClassMain:React.FC = () => {
    const [value, setValue] = useState<Date>(new Date());

    const handleCalendarChange = (newValue: Date) => {
      setValue(newValue);
    };

    return (
        <main>
            <Breadcrumb title="Zoom Live Class" subTitle="Zoom Live Class" />
            <section className="zoom-class-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            {
                                zoom_data&& zoom_data.slice(1,6).map((item)=>(
                                    <div key={item.id} className="zoom-class-main-wrapper mb-30">
                                    <div className="zoom-class-thumb w-img">
                                      <Link href={`/zoom-class-details/${item.id}`}>{item.img && <Image src={item.img} style={{width:'100%', height:'auto'}} alt="zoom-thumb"/>}</Link> 
                                    </div>
                                    <div className="zoom-class-item">
                                        <div className="zooom-class-tittle">
                                            <h3><Link href={`/zoom-class-details/${item.id}`}>{item.title}</Link></h3>
                                        </div>
                                        <div className="xzoom-class-detalis">
                                            <div className="class-list-date d-flex align-items-center">
                                                <i className="flaticon-calendar"></i><span>Date : {item.date}</span>
                                            </div>
                                            <div className="class-list-length d-flex align-items-center">
                                                <i className="flaticon-video-marketing"></i><span>Length : {item.time}</span>
                                            </div>
                                            <div className="class-list-time d-flex align-items-center">
                                                <i className="flaticon-wall-clock"></i><span>Schedule : {item.schedule}</span>
                                            </div>
                                            <div className="class-metting">
                                                <span>Meeting ID:<Link href="#">{item.meetingId}</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-8">
                            <div className="sidebar-widget-wrapper">
                                <div className="sidebar-widget mb-30">
                                    <div className="sidebar-widget-inner">
                                        <div className="sidebar-widget-head mb-25">
                                            <h3>Find Class</h3>
                                        </div>
                                        <div className="sidebar-content">
                                            <div className="myCalendar edu-calender">
                                            <Calendar onChange={handleCalendarChange as any} value={value} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ZoomClassMain;