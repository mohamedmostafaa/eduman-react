"use client"
import { useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PaginationData from '../common/pagination/pagination-data';
import BlogSidebar from './BlogSidebar';
import blogs_data from '@/data/blogs-data';
import Link from 'next/link';
import Image from 'next/image';

const BlogMain= () => {
   useEffect(() => {
      const form = document.querySelector("#yourFormId"); 
      if (form) {
        form.addEventListener("submit", handleSubmit);
      }
      return () => {
        if (form) {
          form.removeEventListener("submit", handleSubmit);
        }
      };
    }, []);
  
    const handleSubmit = (event:any) => {
      event.preventDefault();
    };
    return (
       <main>
          <Breadcrumb title="Blog" subTitle="Blog" />

          <div className="blog-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-12">
                     <div className="blog-main-wrapper mb-30">
                        <div className="row">
                           <div className="col-xl-12 col-lg-6 col-md-12">
                              <div className="blog-wrapper position-relative mb-30">
                                 {
                                       blogs_data.slice(6, 9).map((item)=>(
                                          <div key={item.id} className="blog-wrapper position-relative mb-30">
                                          <div className="blog-thumb ">
                                              <Link href={`/blog-details/${item.id}`}>{item.img && <Image src={item.img} style={{width:'100%', height:'auto'}} alt="blog-img"/>}</Link>
                                          </div>
                                          <Link href={`/blog-details/${item.id}`} className="blog-tag"><i className="fal fa-folder-open"></i>{item.blogTag}</Link>
                                          <div className="blog-content-wrapper">
                                              <div className="blog-meta">
                                                  <div className="blog-date">
                                                      <i className="flaticon-calendar"></i>
                                                      <span>{item.date}</span>
                                                  </div>
                                                  <div className="blog-user">
                                                      <i className="flaticon-avatar"></i>
                                                      <span>{item.user}</span>
                                                  </div>
                                              </div>
                                              <div className="blog-content">
                                                  <Link href={`/blog-details/${item.id}`}><h3>{item.title}</h3></Link>
                                                  <p>{item.desc}</p>
                                                  <Link href={`/blog-details/${item.id}`} className="blog-btn">{item.btn}</Link>
                                              </div>
                                          </div>
                                      </div>
                                       ))
                                 }
                              </div>
                           </div>
                        </div>
                        <PaginationData />
                     </div>

                  </div>
                  <div className="col-xl-4 col-lg-8 col-md-8">
                     <BlogSidebar />
                  </div>
               </div>
            </div>
         </div>
       </main>
        
    );
};

export default BlogMain;