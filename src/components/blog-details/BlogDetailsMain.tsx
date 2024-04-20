"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import BlogSidebar from "../blog/BlogSidebar";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Image from "next/image";
import blogImageTwo from "../../../public/assets/img/blog/blog-07.jpg";
import BLogComment from "./BLogComment";
import LatestComment from "./LatestComment";
import { idType } from "@/interFace/interFace";
import blogs_data from "@/data/blogs-data";

const BlogDetailsMain = ({ id }: idType) => {
  const blog = blogs_data.find((item) => item.id == id);

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
      <Breadcrumb
        title={blog?.title}
        subTitle="Blog Details"
      />
      <div className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="blog-main-wrapper mb-0">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="blog-wrapper position-relative blog-details-wrapper mb-30">
                      <div className="blog-thumb ">
                      {blog?.img && <Image
                          src={blog.img}
                          style={{ width: "100%", height: "auto" }}
                          alt="blog-img"
                        />}  
                      </div>
                      <div className="blog-tag">
                        <i className="fal fa-folder-open"></i>
                        <Link href="/blog">{blog?.blogTag}</Link>
                      </div>
                      <div className="blog-content-wrapper">
                        <div className="blog-meta">
                          <div className="blog-date">
                            <i className="flaticon-calendar"></i>
                            <span>{blog?.date}</span>
                          </div>
                          <div className="blog-user">
                            <i className="flaticon-avatar"></i>
                            <span>{blog?.user}</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <p>
                            When it comes to designing better links and sending
                            better emails, Slava Shestopalov has a few tips on
                            how to improve your websites experience while
                            accessibility in mind. There are so many websites
                            out there that have not considered the overall
                            usability of their visually impaired users. The
                            participants will get general ideas of the land
                            management system of business. Everyone must work,
                            but for many of us that job do not just a paycheck,
                            it is an opportunity to express ourselves and make
                            something better. Entrepreneurs and go-getters often
                            feel as if they carry the weight of an entire
                            organization on their backs, and therefore could
                            always use a little extra motivation.
                          </p>

                          <p>
                            Tosser argy-bargy mush loo at public school
                            Elizabeth up the duff buggered chinwag on your bike
                            mate do not get shirty with me super, Jeffrey bobby
                            Richard cheesed off spend a penny a load of old tosh
                            blag horse.
                          </p>
                          <p className="mb-0">
                            <cite>Eduman</cite>
                          </p>

                          <p>
                            Cheeky bugger cracking goal starkers lemon squeezy
                            lost the plot pardon me no biggie the BBC burke gosh
                            boot so I said wellies, zonked a load of old tosh
                            bodge barmy skive off he legged it morish spend a
                            penny my good sir wind up hunky-dory. Naff grub
                            elizabeth cheesed off do not get shirty with me arse
                            over tit mush a blinding shot young delinquent bloke
                            boot blatant.
                          </p>
                          <p>
                            <Image src={blogImageTwo} style={{width:'100%', height:'auto'}} alt="img" />
                          </p>
                          <h4 className="mb-20">
                            Typography is the powerful element you will ever
                            need
                          </h4>
                          <p>
                            The participants will get general ideas of the land
                            management system of business. Everyone must work,
                            but for many of us that job is not just a paycheck,
                            it is an opportunity to express ourselves and make
                            something better. Entrepreneurs and go-getters often
                            feel as if they carry the weight of an entire
                            organization on their backs, and therefore could
                            always use a little extra motivation.
                          </p>
                          <p>
                            When it comes to designing better links and sending
                            better emails, Slava Shestopalov has a few tips on
                            how to improve your websites experience while
                            accessibility in mind. There are so many websites
                            out there that have not considered the overall
                            usability of their visually impaired users.
                          </p>
                          <div className="blog__details__tag tagcloud">
                            <span>Post Tags : </span>
                            <Link href="/blog" rel="tag">
                              Class
                            </Link>
                            <Link href="/blog" rel="tag">
                              Course
                            </Link>
                            <Link href="/blog" rel="tag">
                              Design
                            </Link>
                            <Link href="/blog" rel="tag">
                              Science
                            </Link>
                          </div>
                        </div>
                      </div>
                      <LatestComment/>
                      <BLogComment/>
                    </div>
                  </div>
                </div>
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

export default BlogDetailsMain;
