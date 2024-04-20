import counter_data from '@/data/counter-data';
import React from 'react';
import CountUpContent from '../common/counter/CountUpContent';

const DashboardCounter = () => {
    return (
        <div className="row">
            {
                counter_data.slice(12, 15).map((item) => (
                    <div key={item.id} className="col-xl-4 col-lg-6 col-md-4">
                        <div className="counter-wrapper text-center mb-30">
                            <div className="counter-icon">
                                <div className="counter-icon-wrap">
                                    {item.icon && <item.icon />}
                                </div>
                                <div className="count-number">
                                    <span className="counters"><CountUpContent number={item.countNum}></CountUpContent></span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default DashboardCounter;