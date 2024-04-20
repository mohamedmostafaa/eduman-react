import React from 'react';
import HeroSection from './HeroSection';
import TopCategorySection from './TopCategorySection';
import FeatureSection from './FututreSection';
import StudentChooseSection from './StudentChooseSection';
import BrowserCourseSection from './BrowserCourseSection';
import EducationSection from './EducationSection';
import dynamic from 'next/dynamic';
import CourseTab from '../Elements/Tabs/CourseTab';
const BrandSlider = dynamic(() => import('../Elements/Slider/BrandSlider'), {
    ssr: false
  })
  const TestimonialSlider = dynamic(() => import("../Elements/Slider/TestimonialSlider"), {
    ssr: false
  })

const HomeMain = () => {
    return (
        <div>
            <HeroSection />
            <TopCategorySection/>
            <CourseTab/>
            <FeatureSection/>
            <StudentChooseSection/>
            <TestimonialSlider/>
            <BrowserCourseSection/>
            <EducationSection/>
            <BrandSlider/>
        </div>
    );
};

export default HomeMain;