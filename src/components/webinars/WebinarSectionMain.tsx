import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import WebinarSection from './WebinarSection';

const WebinarSectionMain = () => {
    return (
        <>
            <Breadcrumb title='Upcoming Webinars' subTitle='Upcoming Webinars'/>
            <WebinarSection/>
        </>
    );
};

export default WebinarSectionMain;