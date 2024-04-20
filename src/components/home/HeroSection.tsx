import Link from "next/link";
import React from "react";
import shapeImg from "../../../public/assets/img/shape/shape-03.png";
import shapeImgTwo from "../../../public/assets/img/shape/shape-01.png";
import shapeImgThere from "../../../public/assets/img/shape/shape-02.png";
import shapeImgFour from "../../../public/assets/img/shape/slider-shape-6.png";
import shapeImgFive from "../../../public/assets/img/shape/shape-04.png";
import sliderCardImgOne from "../../../public/assets/img/shape/slider-card-1.png";
import sliderCardImgTwo from "../../../public/assets/img/shape/slider-card-2.png";
import sliderCardImgThere from "../../../public/assets/img/shape/slider-card-3.png";
import sliderCardImgFour from "../../../public/assets/img/shape/slider-card-4.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="slider-area hero-height position-relative fix"
      style={{ background: "url(assets/img/slider/Image.jpg)" }}
    >
       <Image className="shape-3 d-none d-xxl-block" src={shapeImg} style={{width:'auto', height:'auto'}} alt="img not found"/>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-9">
            <div className="hero-text pt-95">
              <h5>Discover your journey</h5>
              <h2>
                Discover <span className="down-mark-line">4500+</span> Courses
                from top Instructors Around the World
              </h2>
              <p>
                Take your learning organization to the next level. to the next
                level. Who will share their knowledge to people around the
                world.
              </p>
              <div className="hero-btn">
                <Link href="/course" className="edu-btn">
                  View all course
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-right position-relative">
              <Image data-depth="0.2" className="shape shape-1" src={shapeImgTwo} style={{width:'auto', height:'auto'}} alt="shape"/>
              <Image data-depth="0.2"  className="shape-2" src={shapeImgThere} style={{width:'auto', height:'auto'}} alt="shape"/>
              <Image data-depth="0.2"  className="shape-6" src={shapeImgFour} style={{width:'auto', height:'auto'}} alt="shape"/>
              <div className="shape-4">
              <Image className="" src={shapeImgFive} style={{width:'auto', height:'auto'}} alt="shape"/>
                <h5 className="hero-shape-text">Top Rated Instructors</h5>
              </div>
              <div className="shape-5">
                <div className="course-card">
                <Image src={sliderCardImgOne} style={{width:'auto', height:'auto'}} alt="img not found"/>
                <Image src={sliderCardImgTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                <Image src={sliderCardImgThere} style={{width:'auto', height:'auto'}} alt="img not found"/>
                <Image src={sliderCardImgFour} style={{width:'auto', height:'auto'}} alt="img not found"/>
                  <span>
                    <i className="far fa-plus"></i>
                  </span>
                </div>
                <h5>
                  More than <span>21,500+</span> students enrolled around the
                  world
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
