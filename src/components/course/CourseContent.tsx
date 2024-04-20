"use client";
import React from "react";
import Link from "next/link";
import courses_data from "@/data/courses-data";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { productsType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlist-slice";
import CourseSidebarArea from "../common/courses-sidebar/CourseSidebarArea";
import PaginationData from "../common/pagination/pagination-data";

const CourseContent = () => {
  const getRating = (ratingsNum: any) => {
    let empty_rating_count = 5 - ratingsNum;
    let ratings = [];
    for (let i = 0; i < ratingsNum; i++) {
      ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
    }
    for (let i = 0; i < empty_rating_count; i++) {
      ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
    }
    return ratings;
  };
  const dispatch = useDispatch();
  const handleAddToCart = (product: productsType) => {
    dispatch(cart_product(product));
  };

  return (
    <section className="course-content-area pb-90">
      <div className="container">
        <div className="row mb-10">
          <div className="col-xl-3 col-lg-4 col-md-12">
            <CourseSidebarArea />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12">
            <div className="row">
              {courses_data.slice(17, 32).map((item: any) => (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="course-wrapper-2 mb-30">
                    <div className="student-course-img">
                      {item.img && (
                        <Image
                          src={item.img}
                          style={{ width: "100%", height: "auto" }}
                          alt="course-img"
                        />
                      )}
                    </div>
                    <div className="course-cart">
                      <div className="course-info-wrapper">
                        <div className="cart-info-body">
                          <Link
                            href="/course"
                            className={
                              item.categoryColor
                                ? `category-color ${item.categoryColor}`
                                : "category-color category-color-1"
                            }
                          >
                            {item.category}
                          </Link>
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
                    <div className="student-course-footer">
                      <div className="student-course-linkter">
                        <div className="course-lessons">
                          <i className="fal fa-tv"></i>
                          <span className="ms-2">{item.lessons}</span>
                        </div>
                        <div className="portfolio-price">
                          <span>
                            {item.price === 0 ? "FREE" : `$${item.price}`}
                          </span>
                          <del>
                            {item.oldPrice === 0
                              ? " "
                              : `$${item.oldPrice}`}
                          </del>
                        </div>
                      </div>
                      <div className="student-course-text">
                        <h3>
                          <Link href={`/course-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-user">
                        <div className="user-icon">
                          <Link href="/instructor-profile">
                            <i className="fas fa-user"></i>
                            {item.authorName}
                          </Link>
                        </div>
                        <div className="course-icon">
                          {getRating(item?.ratings)}
                          <span>({item.ratingCount})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-12">
                <PaginationData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
