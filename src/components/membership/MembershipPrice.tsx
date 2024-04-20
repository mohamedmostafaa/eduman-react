import React from 'react';
import Link from 'next/link';
import { pricingPlan } from '@/data/pricing-plan-data';

const MembershipPrice = () => {
    return (
        <section className="membership-area pt-110 pb-80">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-6">
                  <div className="section-title text-center mb-40">
                     <h2>Membership Plan</h2>
                     <p>Whether {`you're`} looking for smart course , start your next journey with course of
                        famous instructors we have a plan for you.</p>
                  </div>
                  <div className="pricing-tab mb-60">
                     <ul className="nav nav-tabs justify-content-center" id="priceTab" role="tablist">
                        <li className="nav-item" role="presentation">
                           <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab"
                              data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly"
                              aria-selected="true">monthly</button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button className="nav-link" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly"
                              type="button" role="tab" aria-controls="yearly" aria-selected="false">yearly</button>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="tab-content" id="priceTabContent">
                  <div className="tab-pane fade active show" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                     <div className="row">
                        {
                            pricingPlan.slice(0,4).map((item)=>(
                                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="membership-box mb-30">
                                   <div className="membership-info">
                                      <h4>{item.title}</h4>
                                      <div className="membership-price">
                                         <span>{item?.price === "Free" ? "Free": `${item.price}.00`}</span>
                                         <p>{item.desc}</p>
                                      </div>
                                      <div className="membership-list">
                                         <ul>                                    {
                                            item?.pricingList?.map((pricingItem) => (
                                                <li key={pricingItem.id}>
                                                <i className={pricingItem.icon}></i>
                                                {pricingItem.listInfo}
                                                </li>
                                            ))
                                            }
                                         </ul>
                                      </div>
                                   </div>
                                   <Link href="/contact" className="membership-btn">{item.btn}</Link>
                                   {
                                    item.popularClassWrapper && <div className={item.popularClassWrapper && item.popularClassWrapper}>
                                    <span>{item.plan && item.plan}</span>
                                 </div> 
                                   }
                                </div>
                             </div>
                            ))
                        }
                     </div>
                  </div>
                  <div className="tab-pane fade" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                     <div className="row">
                     {
                            pricingPlan.slice(4,8).map((item)=>(
                                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="membership-box mb-30">
                                   <div className="membership-info">
                                      <h4>{item.title}</h4>
                                      <div className="membership-price">
                                         <span>{item?.price === "Free" ? "Free": `${item.price}.00`}</span>
                                         <p>{item.desc}</p>
                                      </div>
                                      <div className="membership-list">
                                         <ul>                                    {
                                            item?.pricingList?.map((pricingItem) => (
                                                <li key={pricingItem.id}>
                                                <i className={pricingItem.icon}></i>
                                                {pricingItem.listInfo}
                                                </li>
                                            ))
                                            }
                                         </ul>
                                      </div>
                                   </div>
                                   <Link href="/contact" className="membership-btn">{item.btn}</Link>
                                   {
                                    item.popularClassWrapper && <div className={item.popularClassWrapper && item.popularClassWrapper}>
                                    <span>{item.plan && item.plan}</span>
                                 </div> 
                                   }
                                </div>
                             </div>
                            ))
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default MembershipPrice;