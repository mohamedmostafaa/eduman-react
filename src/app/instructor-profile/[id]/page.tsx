import InstructorProMain from '@/components/instructor-profile/InstructorProfileMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const InstructorProfilePage = ({params}:{params:{id:number}}) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
            <InstructorProMain id={id}/>
            </main>
        </Wrapper>
    );
};

export default InstructorProfilePage;