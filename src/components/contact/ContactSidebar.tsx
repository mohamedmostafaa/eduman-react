
import ContactIconOne from '@/svg/contact-icon-one';
import ContactIconThree from '@/svg/contact-icon-three';
import ContactIconTwo from '@/svg/contact-icon-two';
import Link from 'next/link';
import React from 'react';

const ContactSidebar = () => {
    return (
        <div className="sidebar-widget-wrapper">
            <div className="support-contact mb-30">
                <div className="support-tittle">
                        <h4>Support Contact</h4>
                </div>
                <div className="support-contact-inner">
                <div className="support-item">
                    <div className="support-icon">
                      <ContactIconOne/>
                    </div>
                    <div className="support-info-phone">
                        <span>Phone</span>
                        <p>Mobile :<Link href="tel:(+88)872-670-780"> (+88) 872-670-780</Link></p>
                        <p>Hotline :<Link href="tel:(+88)422-655-793"> (+88) 422-655-793</Link></p>
                    </div>
                </div>
                <div className="support-item">
                    <div className="support-icon">
                       <ContactIconTwo/>
                    </div>
                    <div className="support-info-email">
                        <span>Email</span>
                        <Link href="mailto:Info@example.com">Info@example.com</Link>
                        <Link href="mailto:Contact@example.com">Contact@example.com</Link>
                    </div>
                </div>
                <div className="support-item">
                    <div className="support-icon">
                        <ContactIconThree/>
                    </div>
                    <div className="support-info-location">
                        <span>Location</span>
                        <Link href="#">Abbot Kinney Blvd. New York, <br/>
                            USA-5785</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSidebar;