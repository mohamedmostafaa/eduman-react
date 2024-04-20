import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import CourseContent from './CourseContent';
import CourseBar from './CourseBar';


const CourseMain = () => {
    return (
        <>
            <Breadcrumb title="Courses" subTitle="Courses" />
            <CourseBar/>
            <CourseContent/>
        </>
    );
};

export default CourseMain;