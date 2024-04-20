import FaqDetailsMain from '@/components/faq-details/FaqDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const FaqDetails = ({params}:{params:{id:number}}) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
            <FaqDetailsMain id={id}/>
            </main>
        </Wrapper>
    );
};

export default FaqDetails;