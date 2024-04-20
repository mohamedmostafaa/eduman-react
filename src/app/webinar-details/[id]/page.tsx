
import Preloader from '@/components/common/Preloader';
import WebinarDetailsMain from '@/components/webinarDetails/WebinarDetailsMain';
import webinar_data from '@/data/webinar-data';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';


const WebinarDetailsDynamic = ({ params }: { params: { id: number } }) => {
    const id = params.id
    const webinar = webinar_data.find(item=> item.id == id)
    if(!webinar){
      return <Preloader />
    }
    return (
        <>
        <Wrapper>
            <main>
               <WebinarDetailsMain id={id}/>
            </main>
        </Wrapper>
        </>
    );
};

export default WebinarDetailsDynamic;