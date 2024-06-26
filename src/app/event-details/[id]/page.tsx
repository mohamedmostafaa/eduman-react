import EventDetailsMain from '@/components/event-details/EventDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const EventDetails = ({params}:{params:{id:number}}) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
                 <EventDetailsMain id={id}/>
            </main>
        </Wrapper>
    );
};

export default EventDetails;