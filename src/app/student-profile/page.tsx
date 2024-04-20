import StudentProfileMain from '@/components/studentProfile/StudentProfileMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';


const StudentProfilePage = () => {
    return (
        <Wrapper>
            <main>
                <StudentProfileMain/>
            </main>
        </Wrapper>
    );
};

export default StudentProfilePage;