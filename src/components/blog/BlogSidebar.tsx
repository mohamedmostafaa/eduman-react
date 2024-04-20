import React from 'react';
import Link from 'next/link';
import blogs_data from '@/data/blogs-data';
import Image from 'next/image';
import BlogCategory from './BlogCategory';
import BlogTag from './BlogTag';
import BlogSidebarForm from '@/form/BlogSidebarForm';

const BlogSidebar = () => {

    return (
        <div className="sidebar-widget-wrapper">
            <div className="sidebar__search p-relative mb-30">
              <BlogSidebarForm/>
            </div>
            <div className="sidebar__widget mb-30">
                <div className="sidebar__widget-head mb-35">
                    <h4 className="sidebar__widget-title">Recent posts</h4>
                </div>
                <div className="sidebar__widget-content">
                    <div className="rc__post-wrapper">
                        {
                            blogs_data.slice(9, 12).map((item)=>(
                                <div key={item.id} className="rc__post d-flex align-items-center">
                                <div className="rc__thumb mr-20">
                                   <Link href={`/blog-details/${item.id}`}>
                                      {item.img && <Image src={item.img} style={{width:'auto', height:'auto'}} alt="img not found" />}
                                   </Link>
                                </div>
                                <div className="rc__content">
                                   <div className="rc__meta">
                                      <span>{item.date}</span>
                                   </div>
                                   <h6 className="rc__title">
                                      <Link href={`/blog-details/${item.id}`}>
                                         {item.title}...
                                      </Link>
                                   </h6>
                                </div>
                             </div>
                            ))
                        }
                    </div>
                </div>
            </div>
          <BlogCategory/>
          <BlogTag/>
        </div>
    );
};

export default BlogSidebar;