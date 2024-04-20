import React from 'react';
import BreadcrumbTwo from '../common/BreadcrumbTwo/BreadcrumbTwo';
import FaqContentSection from './FaqContentSection';
import { idType } from '@/interFace/interFace';
import faq_data from '@/data/faq-data';


const FaqDetailsMain = ({id}:idType) => {
    const Faq:any = faq_data.find(item=> item.id == id)
    return (
        <main>
            <BreadcrumbTwo titleTwo={<>Welcome to help and support center! <br/>How may we help you?</>} subTitleTwo="Help FAQ" />
            <FaqContentSection Faq={Faq}/>
        </main>
    );
};

export default FaqDetailsMain;