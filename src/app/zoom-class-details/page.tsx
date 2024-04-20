import ZoomClassDetailsMain from '@/components/zoom-class-details/ZoomDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ZoomClassDetails = () => {
    const id = 1;
    return (
        <Wrapper>
            <main>
                <ZoomClassDetailsMain id={id}/>
            </main>
        </Wrapper>
    );
};

export default ZoomClassDetails;