import FaqDetailsMain from '@/components/faq-details/FaqDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const FaqDetailsPage = () => {
    const id = 1;
    return (
        <Wrapper>
            <main>
                <FaqDetailsMain id={id}/>
            </main>
        </Wrapper>
    );
};

export default FaqDetailsPage;