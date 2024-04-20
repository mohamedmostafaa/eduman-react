import EventMain from '@/components/event/EventMainPage';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const EventPage = () => {
    return (
        <Wrapper>
            <main>
              <EventMain/> 
            </main>
        </Wrapper>
    );
};

export default EventPage;