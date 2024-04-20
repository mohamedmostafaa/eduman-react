"use client";
import React, { useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ShopSidebar from "./ShopSidebar";
import Link from "next/link";

import products_data from "@/data/products-data";
import Image from "next/image";
import ProductModal from "../common/ProductModel";
import { useDispatch } from "react-redux";
import { productsType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlist-slice";
import useGlobalContext from "@/hooks/use-context";

const ShopMainArea = () => {
  const { inputValue,filterType } = useGlobalContext();

  const [modaldata, setModalData] = useState<any>({});
  const dispatch = useDispatch();

  const handleAddToCart = (product: productsType) => {
    dispatch(cart_product(product));
  };

  //for rating handle
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

  let searchResult: productsType[] = [];

  if (inputValue.length >= 0) {
    switch (filterType) {
      case "category":
        searchResult = products_data?.filter(
          (item) => item.category === inputValue
        );
        break;
      case "level":
        searchResult = products_data?.filter(
          (item) => item.level === inputValue
        );
        break;
      case "ratings":
        const parsNum = parseInt(inputValue)
        searchResult = products_data?.filter(
          (item) => item.rating === parsNum
        );
        break;
      case "Free":
        const freePrice = parseInt(inputValue)
        searchResult = products_data?.filter(
          (item) => item.price === freePrice
        );
        break;
      case "Paid":
        const paidPrice = parseInt(inputValue)
        searchResult = products_data?.filter(
          (item) => item.price > paidPrice
        );
        break;
      default:
        // Handle other cases if needed
        break;
    }
  }
  
  
  return (
    <>
      <main>
        <Breadcrumb title="Shop" subTitle="Shop" />
        <section className="shop-area pt-120 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
                <ShopSidebar />
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="products-wrapper">
                  {searchResult.length === 0 && inputValue === "" ? (
                    <>
                      {products_data.slice(0, 16).map((item) => (
                        <div
                          key={item.id}
                          className="product-items text-center"
                        >
                          <div className="product-img">
                            <Link href={`/shop-details/${item.id}`}>
                              {item.img && (
                                <Image
                                  src={item.img}
                                  style={{ width: "100%", height: "auto" }}
                                  alt="product-img"
                                />
                              )}
                            </Link>
                            <div className="shop-quick-view">
                              <ul>
                                <li>
                                  <button
                                    className="edu-cart"
                                    onClick={() => handleAddToCart(item)}
                                  >
                                    <i className="fal fa-cart-arrow-down"></i>
                                  </button>
                                </li>
                                <li onClick={() => setModalData(item)}>
                                  <span
                                    data-bs-toggle="modal"
                                    data-bs-target="#productModalId"
                                  >
                                    <i className="fal fa-eye"></i>
                                  </span>
                                </li>
                                <li>
                                  <button
                                    className="edu-heart"
                                    onClick={() =>
                                      dispatch(wishlist_product(item))
                                    }
                                  >
                                    <i className="fal fa-heart"></i>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <h4>
                              <Link href="/shop-details">{item.title}</Link>
                            </h4>
                            <span>
                              {item.price === 0 ? "FREE" : `$${item.price}`}
                            </span>
                            <del className="shop-old-price">
                              {item.oldPrice === 0 ? " " : `$${item.oldPrice}`}
                            </del>
                            <div className="course-icon">
                              {getRating(item?.rating)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {searchResult.slice(0, 16).length !== 0 ? (
                        <>
                          {searchResult.map((item) => (
                            <div
                              key={item.id}
                              className="product-items text-center"
                            >
                              <div className="product-img">
                                <Link href={`/shop-details/${item.id}`}>
                                  {item.img && (
                                    <Image
                                      src={item.img}
                                      style={{ width: "100%", height: "auto" }}
                                      alt="product-img"
                                    />
                                  )}
                                </Link>
                                <div className="shop-quick-view">
                                  <ul>
                                    <li>
                                      <button
                                        className="edu-cart"
                                        onClick={() => handleAddToCart(item)}
                                      >
                                        <i className="fal fa-cart-arrow-down"></i>
                                      </button>
                                    </li>
                                    <li onClick={() => setModalData(item)}>
                                      <span
                                        data-bs-toggle="modal"
                                        data-bs-target="#productModalId"
                                      >
                                        <i className="fal fa-eye"></i>
                                      </span>
                                    </li>
                                    <li>
                                      <button
                                        className="edu-heart"
                                        onClick={() =>
                                          dispatch(wishlist_product(item))
                                        }
                                      >
                                        <i className="fal fa-heart"></i>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-content">
                                <h4>
                                  <Link href="/shop-details">{item.title}</Link>
                                </h4>
                                <span>
                                  {item.price === 0 ? "FREE" : `$${item.price}`}
                                </span>
                                <del className="shop-old-price">
                                  {item.oldPrice === 0
                                    ? " "
                                    : `$${item.oldPrice}`}
                                </del>
                                <div className="course-icon">
                                  {getRating(item?.rating)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          <h1>No Data Found</h1>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductModal modaldata={modaldata} />
      </main>
    </>
  );
};

export default ShopMainArea;


