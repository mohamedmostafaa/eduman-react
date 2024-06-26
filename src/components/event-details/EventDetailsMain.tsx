import React from 'react';
import Link from 'next/link';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Image from 'next/image';
import CourseMetaImg from '../../../public/assets/img/course/course-meta.png';
import EventDetailsImg from '../../../public/assets/img/event/event-details-img.jpg';
import EventsDetailsMap from './EventsDetailsMap';
import EventDetailsSidebar from './EventDetailsSidebar';
import { idType } from '@/interFace/interFace';
import events_data from '@/data/events-data';

const EventDetailsMain = ({id}:idType) => {

    const event = events_data.find(item=> item.id == id)
    return (
        <main>
            <Breadcrumb title="Event Details" subTitle="Event Details" />

            <div className="event-detalis-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="event-main-wrapper mb-30">
                                <div className="course-detelis-meta mb-30">
                                    <div className="course-meta-wrapper border-line-meta">
                                    <div className="course-meta-img">
                                        <Link href="/instructor-profile"><Image src={CourseMetaImg} style={{width:'auto', height:'auto'}} alt="course-meta"/></Link>
                                    </div>
                                    <div className="course-meta-text">
                                        <span>Hosted by</span>
                                        <h6><Link href="/instructor-profile">David Allberto</Link></h6>
                                    </div>
                                    </div>
                                    <div className="course-Enroll border-line-meta">
                                    <p>Total Joined</p>
                                    <span>25 Audiences</span>
                                    </div>
                                    <div className="course-update border-line-meta">
                                    <p>Estimated Seat</p>
                                    <span>240 Seats</span>
                                    </div>
                                    <div className="course-category">
                                    <p>Category</p>
                                    <span><Link href="/event">Business Management</Link></span>
                                    </div>
                                </div>
                                <div className="event-details-thumb w-img mb-20">
                                    <Image style={{width:'100%', height:'auto'}} src={EventDetailsImg}  alt="event-img"/>
                                </div>
                                <div className="event-contact-info">
                                    <h2>{event?.title}</h2>
                                </div>
                                <div className="event-introduction">
                                    <div className="introduction-info mb-40">
                                    <h4>Introduction :</h4>
                                    <p>There are so many websites out there that have not considered the overall usability of
                                        their visually impaired users. When it comes to designing better links and sending better
                                        emails, Slava Shestopalov has a few tips on how to improve your websites experience while
                                        accessibility in mind. The participants will get general ideas of the land management
                                        system of business.</p>
                                    <p>Everyone must work, but for many of us that job is not just a paycheck, it is an opportunity
                                        to express ourselves and make something better. Entrepreneurs and go-getters often feel as
                                        if they carry the weight of an entire organization on their backs, and therefore could
                                        always use a little extra motivation.</p>
                                    </div>
                                </div>
                                <div className="even-point-tittle">
                                    <h4>Points of Speaking</h4>
                                </div>
                                <div className="event-point-info">
                                    <ul>
                                    <li>• HR Audit: Concept</li>
                                    <li>• Objectives and Purpose of HR Audit</li>
                                    <li>• Principles of Effective HR Auditing</li>
                                    <li>• Knowledge, Skills and Attitude of an HR Auditor</li>
                                    <li>• Tasks of an HR Auditor</li>
                                    <li>• Types of HR Audit</li>
                                    </ul>
                                </div>
                                <EventsDetailsMap />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-md-8">
                            <EventDetailsSidebar Name="Event"/>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default EventDetailsMain;