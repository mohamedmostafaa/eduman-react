"use client"
import Link from 'next/link';
import React from 'react';
import categories_data from '@/data/categories-data';

const TopCategorySection = () => {
    return (
        <>
             <div className="top-catagory-area pt-110 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-12 col-sm justify-content-center mb-30">
                  <div className="section-title mb-20 text-center">
                     <h2>Explore <br/> Our Top <span className="down-mark-line">Categories</span></h2>
                  </div>
               </div>
            </div>
            <div className="row"> 
            {
               categories_data.slice(0,9).map((item)=>(
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                    <Link href="/course">
                     <div className="catagory-wrapper mb-30">
                        <div className="catagory-thumb">
                          {item.icon && <item.icon/>}
                        </div>
                        <div className="catagory-content">
                           <h3>{item.title}</h3>
                           <span>{item.description}</span>
                        </div>
                     </div>
                    </Link>
               </div>
               ))
            }
               
            </div>
         </div>
      </div>
        </>
    );
};

export default TopCategorySection;