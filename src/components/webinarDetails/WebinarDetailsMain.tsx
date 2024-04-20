import React from 'react';
import { idType } from '@/interFace/interFace';
import webinar_data from '@/data/webinar-data';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import WebinarDetailsSection from './webinarDetailsSection';


const WebinarDetailsMain = ({ id }: idType) => {
    const webinar:any = webinar_data.find(item=> item.id == id)
    return (
        <>
            <Breadcrumb title='Webinar Details' subTitle='WordPress Development Course for Plugins'/>
            <WebinarDetailsSection webinar={webinar}/>
        </>
    );
};

export default WebinarDetailsMain;
