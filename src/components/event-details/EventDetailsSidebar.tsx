import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import SopnosorImage from '../../../public/assets/img/logo/sopnsor-logo-1.png';
import SopnosorImageTwo from '../../../public/assets/img/logo/sopnsor-logo-2.png';
import SpeakerImage from '../../../public/assets/img/event/speaker.png';


const EventDetailsSidebar = ({Name, webinar}:any) => {
    return (
        <div className="sidebar-widget-wrapper">
            <div className="event-speaker-wrapper mb-30">
                <div className="event-speaker-info">
                <h4>Speaker</h4>
                </div>
                <div className="event-sidebar-thumb w-img">
              <Link href="/instructor"> {webinar?.img ? <Image style={{width:'100%', height:'auto'}} src={webinar?.img} alt="Speaker"/> :
               <Image style={{width:'100%', height:'auto'}} src={SpeakerImage} alt="Speaker"/>}</Link>
                </div>
                <div className="event-speaker-content text-center">
                <span><Link href="/instructor">Crish Denial</Link></span>
                <p>Motivational Speaker</p>
                </div>
            </div>
            <div className="event-information-wrapper mb-30">
                <div className="event-price-info">
                <div className="event-ticket-cost">
                    <span>Ticket Costs:</span>
                </div>
                <div className="event-price">
                    <span>$24.00</span>
                    <div className="old-price">
                        <del>$48.00</del>
                    </div>
                </div>
                </div>
                <div className="event-information-list">
                <ul>
                    <li>
                        <div className="information-list">
                            <i className="flaticon-calendar"></i>
                            <span>Date</span>
                        </div>
                        <div className="information-list">
                            <span>12 jun 2022</span>
                        </div>
                    </li>
                    <li>
                        <div className="information-list">
                            <i className="flaticon-clock"></i>
                            <span>Schedule</span>
                        </div>
                        <div className="information-list">
                            <span>10.00 PM</span>
                        </div>
                    </li>
                    <li>
                        <div className="information-list">
                            <i className="flaticon-place"></i>
                            <span>Location</span>
                        </div>
                        <div className="information-list">
                            <span>Zeoyan Stadium, London</span>
                        </div>
                    </li>
                    <li>
                        <div className="information-list">
                            <i className="flaticon-menu-2"></i>
                            <span>Category</span>
                        </div>
                        <div className="information-list">
                            <span>Business</span>
                        </div>
                    </li>
                    <li>
                        <div className="information-list">
                            <i className="flaticon-global"></i>
                            <span>Laguage</span>
                        </div>
                        <div className="information-list">
                            <span>English</span>
                        </div>
                    </li>
                    <li>
                        <div className="information-list">
                            <i className="flaticon-bookmark-white"></i>
                            <span>Estimated Seat</span>
                        </div>
                        <div className="information-list">
                            <span>470 Seats</span>
                        </div>
                    </li>
                </ul>
                </div>
                <Link href="/contact" className="event-btn">Join this {`${Name}`}</Link>
            </div>
            <div className="event-sponsor-wrapper mb-30">
                <div className="sopnsor-tittle">
                <h4>Sponsor by</h4>
                </div>
                <div className="sponsor-thumb">
                <Link href="#"> <Image src={SopnosorImage} style={{width:'100%', height:'auto'}} alt="sponsor-logo"/></Link>
                <Link href="#"> <Image src={SopnosorImageTwo} style={{width:'100%', height:'auto'}} alt="sponsor-logo"/></Link>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsSidebar;