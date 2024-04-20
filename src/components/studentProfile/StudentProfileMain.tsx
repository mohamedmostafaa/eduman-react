import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import StudentProfileSection from './StudentProfileSection';


const StudentProfileMain = () => {
    return (
        <>
            <Breadcrumb title="User Profile" subTitle="David Allberto" />
            <StudentProfileSection />
        </>
    );
};

export default StudentProfileMain;