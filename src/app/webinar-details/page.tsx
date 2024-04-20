import React from 'react';
import WebinarDetailsMain from '@/components/webinarDetails/WebinarDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import Preloader from '@/components/common/Preloader';
import webinar_data from '@/data/webinar-data';


const WebinarDetails = () => {
    const id = 1
    const webinar = webinar_data.find(item=> item.id == id)
    if(!webinar){
      return <Preloader />
    }
    return (
        <>
        <Wrapper>
            <main>
               <WebinarDetailsMain id={id} />
            </main>
        </Wrapper>
        </>
    );
};

export default WebinarDetails;