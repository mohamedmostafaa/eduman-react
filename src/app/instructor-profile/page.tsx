import InstructorProMain from '@/components/instructor-profile/InstructorProfileMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const InstructorPage = () => {
    const id = 1;
    return (
        <Wrapper>
            <main>
                <InstructorProMain id={id}/>
            </main>
        </Wrapper>
    );
};

export default InstructorPage;