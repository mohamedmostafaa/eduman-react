import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Instructors from './Instructors';


const InstructorMain = () => {
    return (
        <>
            <Breadcrumb title="Instructor" subTitle="instructor" />
            <Instructors />
        </>
    );
};

export default InstructorMain;