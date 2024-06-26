import CourseDetailsMain from '@/components/course-details/CourseDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CourseDetails = ({params}:{params:{id:number}}) => {
const id = params.id;

    return (
        <Wrapper>
            <main>
                 <CourseDetailsMain id={id}/>
            </main>
        </Wrapper>
    );
};

export default CourseDetails;