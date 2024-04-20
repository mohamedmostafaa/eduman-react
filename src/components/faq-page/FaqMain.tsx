import React from 'react';
import BreadcrumbTwo from '../common/BreadcrumbTwo/BreadcrumbTwo';
import FaqTopic from './FaqTopic';

const FaqPageMain = () => {
    return (
        <main>
            <BreadcrumbTwo titleTwo={<>Welcome to help and support center! <br/>How may we help you?</>} subTitleTwo="Help FAQ" />
            <FaqTopic />
        </main>
    );
};

export default FaqPageMain;