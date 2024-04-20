import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import MembershipPrice from './MembershipPrice';
const TestimonialSlider = dynamic(() => import('../Elements/Slider/TestimonialSlider'), {
    ssr: false
  })

const MembershipMain = () => {
    return (
        <main>
            <Breadcrumb title="Membership Plan" subTitle="Membership Plan" />
            <MembershipPrice />
            <TestimonialSlider />
        </main>
    );
};

export default MembershipMain;