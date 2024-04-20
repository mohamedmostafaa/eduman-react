import FaqPageMain from '@/components/faq-page/FaqMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const FaqPage = () => {
    return (
        <Wrapper>
            <main>
             <FaqPageMain/>
            </main>
        </Wrapper>
    );
};

export default FaqPage;
