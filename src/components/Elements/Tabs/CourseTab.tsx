"use client";

import React, { useState } from "react";
import Link from "next/link";
import courses_data from "@/data/courses-data";
import Image from "next/image";
import ShapImg from "../../../../public/assets/img/shape/portfolio-shap-1.png";
import ShapImgTwo from "../../../../public/assets/img/shape/portfolio-shap-2.png";
import ShapImgThere from "../../../../public/assets/img/shape/portfolio-shap-3.png";
import { courseCategory } from "@/data/course-category-data";
import { useDispatch } from "react-redux";
import { cart_product } from "@/redux/slices/cartSlice";
import { productsType } from "@/interFace/interFace";
import { wishlist_product } from "@/redux/slices/wishlist-slice";

const CourseTab = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const filterData = courses_data.slice(0, 6).filter((item) => item.category === activeCategory);


  const dispatch = useDispatch();

  const handleAddToCart = (product: productsType) => {
    dispatch(cart_product(product));
  };

  return (
    <section className="course-area p-relative pt-110 pb-90">
      <div className="course-shape-1">
        <Image
          src={ShapImg}
          style={{ width: "100%", height: "auto" }}
          alt="shape"
        />
      </div>
      <div className="course-shape-2">
        <Image
          src={ShapImgTwo}
          style={{ width: "100%", height: "auto" }}
          alt="shape"
        />
      </div>
      <div className="course-shape-3">
        <Image
          src={ShapImgThere}
          style={{ width: "100%", height: "auto" }}
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 f-left">
            <div className="section-title mb-50">
              <h2>
                Discover
                <br />
                {"World's"} Best <span className="down-mark-line">Courses</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="portfolio-button mt-60">
              <nav>
                <div
                  className="nav portfolio-button-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button onClick={() => setActiveCategory('')} className={activeCategory === '' ? 'active' : ''} type="button">
                    View All <span className="port-red">[06]</span>
                  </button>

                  {courseCategory.length &&
                    courseCategory.slice(0, 4).map((item) => (
                      <button
                        onClick={() => setActiveCategory(item.category)}
                        className={activeCategory === item.category ? 'active' : ''}
                        key={item.id}
                        type="button"
                      >
                        {item?.category} <span className="port-red">[{filterData.length}]</span>
                      </button>
                    ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="course-main-items">
          <div className="tab-content portfolio-tabs-content">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                {activeCategory === "" ? (
                  <>
                    {courses_data.slice(0, 6).map((item: any) => (
                      <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                        <div className="eduman-course-main-wrapper mb-30">
                          <div className="course-cart">
                            <div className="course-info-wrapper">
                              <div className="cart-info-body">
                                <span
                                  className={
                                    item.categoryColor
                                      ? `category-color ${item.categoryColor}`
                                      : "category-color category-color-1"
                                  }
                                >
                                  <Link href="/course">{item.category}</Link>
                                </span>
                                <Link href={`/course-details/${item.id}`}>
                                  <h3>{item.title}</h3>
                                </Link>
                                <div className="cart-lavel">
                                  <h5>
                                    Level : <span>{item.level}</span>
                                  </h5>
                                  <p>{item.description}</p>
                                </div>
                                <div className="info-cart-text">
                                  <ul>
                                    {item.checkIcons.map((item: any) => (
                                      <li key={item.id}>
                                        <i className={item.icon}></i>
                                        {item.checkInfo}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="course-action">
                                  <Link
                                    href={`/course-details/${item.id}`}
                                    className="view-details-btn"
                                  >
                                    View Details
                                  </Link>
                                  <button
                                    onClick={() => handleAddToCart(item)}
                                    className="wishlist-btn"
                                  >
                                    <i className="fal fa-cart-arrow-down"></i>
                                  </button>
                                  <button
                                    onClick={() =>
                                      dispatch(wishlist_product(item))
                                    }
                                    className="c-share-btn"
                                  >
                                    <i className="flaticon-like"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="eduman-course-thumb w-img">
                            <Link href={`/course-details/${item.id}`}>
                              {item.img && (
                                <Image
                                  src={item.img}
                                  style={{ width: "100%", height: "auto" }}
                                  alt="course-img"
                                />
                              )}
                            </Link>
                          </div>
                          <div className="eduman-course-wraper">
                            <div className="eduman-course-heading">
                              <Link
                                href="/course"
                                className={
                                  item.courseLinkColor
                                    ? `${item.courseLinkColor}`
                                    : "course-link-color-1"
                                }
                              >
                                {item.category}
                              </Link>
                              <span className="couse-star">
                                <i className="fas fa-star"></i>
                                {item.ratingAve} ({item.ratingCount})
                              </span>
                            </div>
                            <div className="eduman-course-text">
                              <h3>
                                <Link href={`/course-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h3>
                            </div>
                            <div className="eduman-course-meta">
                              <div className="eduman-course-price">
                                <span className="price-now">
                                  {item.price === 0 ? "FREE" : `$${item.price}.00`}
                                </span>
                                <del className="price-old">
                                  {item.oldPrice === 0
                                    ? " "
                                    : `$${item.oldPrice}`}
                                </del>
                              </div>
                              <div className="eduman-course-tutor">
                                <Image
                                  src={item.tutorImg}
                                  style={{ width: "auto", height: "auto" }}
                                  alt="img not found"
                                />
                                <Link href="/instructor-profile">
                                  <span>{item.authorName}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="eduman-course-footer">
                            <div className="course-lessson-svg">
                              {item.courseLesson && (
                                <Image
                                  src={item.courseLesson}
                                  style={{ width: "16px", height: "auto" }}
                                  alt="course-img"
                                />
                              )}
                              <span className="ms-2">{item.lessons}</span>
                            </div>
                            <div className="course-deteals-btn">
                              <Link href={`/course-details/${item.id}`}>
                                <span className="me-2">View Details</span>
                                <i className="far fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {filterData?.map((item: any) => (
                      <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                        <div className="eduman-course-main-wrapper mb-30">
                          <div className="course-cart">
                            <div className="course-info-wrapper">
                              <div className="cart-info-body">
                                <span className="category-color category-color-1">
                                  <Link href="/course">{item.category}</Link>
                                </span>
                                <Link href={`/course-details/${item.id}`}>
                                  <h3>{item.title}</h3>
                                </Link>
                                <div className="cart-lavel">
                                  <h5>
                                    Level : <span>{item.level}</span>
                                  </h5>
                                  <p>{item.description}</p>
                                </div>
                                <div className="info-cart-text">
                                  <ul>
                                    {item?.checkIcons?.map((item: any) => (
                                      <li key={item.id}>
                                        <i className={item.icon}></i>
                                        {item.checkInfo}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="course-action">
                                  <Link
                                    href={`/course-details/${item.id}`}
                                    className="view-details-btn"
                                  >
                                    View Details
                                  </Link>
                                  <button
                                    onClick={() => handleAddToCart(item)}
                                    className="wishlist-btn"
                                  >
                                    <i className="fal fa-cart-arrow-down"></i>
                                  </button>
                                  <button
                                    onClick={() =>
                                      dispatch(wishlist_product(item))
                                    }
                                    className="c-share-btn"
                                  >
                                    <i className="flaticon-like"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="eduman-course-thumb w-img">
                            <Link href={`/course-details/${item.id}`}>
                              {item.img && (
                                <Image
                                  src={item.img}
                                  style={{ width: "100%", height: "auto" }}
                                  alt="course-img"
                                />
                              )}
                            </Link>
                          </div>
                          <div className="eduman-course-wraper">
                            <div className="eduman-course-heading">
                              <Link
                                href="/course"
                                className="course-link-color-1"
                              >
                                {item.category}
                              </Link>
                              <span className="couse-star">
                                <i className="fas fa-star"></i>4.9 (25)
                              </span>
                            </div>
                            <div className="eduman-course-text">
                              <h3>
                                <Link href={`/course-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h3>
                            </div>
                            <div className="eduman-course-meta">
                              <div className="eduman-course-price">
                                <span className="price-now">
                                  {item.price === 0 ? "FREE" : `$${item.price}.00`}
                                </span>
                                <del className="price-old">
                                  {item.oldPrice === 0
                                    ? " " : `$${item.oldPrice}`}
                                </del>
                              </div>
                              <div className="eduman-course-tutor">
                                {item.tutorImg && (
                                  <Image
                                    src={item.tutorImg}
                                    style={{ width: "auto", height: "auto" }}
                                    alt="img not found"
                                  />
                                )}
                                <Link href="/instructor-profile">
                                  <span>{item.authorName}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="eduman-course-footer">
                            <div className="course-lessson-svg">
                              {item.courseLesson && (
                                <Image
                                  src={item.courseLesson}
                                  style={{ width: "16px", height: "auto" }}
                                  alt="course-img"
                                />
                              )}
                              <span className="ms-2">{item.lessons}</span>
                            </div>
                            <div className="course-deteals-btn">
                              <Link href={`/course-details/${item.id}`}>
                                <span className="me-2">View Details</span>
                                <i className="far fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseTab;
