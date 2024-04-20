"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import HeaderTopBar from "./components/HeaderTopBar";
import Image from "next/image";
import LogoBlack from "../../../public/assets/img/logo/logo-black.png";
import HeaderCartIcon from "@/svg/HeaderCartIcon";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import HeaderCart from "./HeaderCart";
import useScrollDirection from "@/hooks/sticky-header";
import HeaderIcon from "@/svg/header-icon";
import Menu from "./Menu";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import MobileMenu from "./components/MobileMenu";
import DropdownCategory from "./components/DropdownCategory";

const HeaderOne = () => {
  const scrollDirection = useScrollDirection(null);
  const {toggleSideMenu,sideMenuOpen} = useContext(AppContext) as AppContextType
  const [cartOpen, setCartOpen] = useState(false);

  // redux import
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const uniqueProductIds = new Set();
  cartProducts.forEach((product) => uniqueProductIds.add(product.id));

  const quantityProduct = uniqueProductIds.size;

  return (
    <>
      <HeaderTopBar />
      <header>
        <div
          className={`sticky header-area header-transparent ${
            scrollDirection === "down" ? "sticky-header" : " "
          }`}
        >
          <div className="container-fluid">
            <div className="header-main-wrapper">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-5 col-sm-9 col-9">
                  <div className="header-left d-flex align-items-center">
                    <div className="header-logo">
                      <Link href="/">
                        <Image
                          style={{ width: "100%", height: "auto" }}
                          src={LogoBlack}
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div className="category-menu category-menu-responsive d-none d-md-block">
                      <div className="Category-click">
                        <figure className="cattext">
                          <HeaderIcon />
                          <span className="text">Category</span>
                        </figure>
                        <DropdownCategory />
                      </div>
                    </div>
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <ul>
                          <Menu/>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-7 col-sm-3 col-3">
                  <div className="header-right d-flex align-items-center justify-content-end">
                    <div className="header-search d-none d-xxl-block mr-30">
                      <form action="#">
                        <div className="search-icon p-relative">
                          <input type="text" placeholder="Search courses..." />
                          <button type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="cart-wrapper mr-30">
                      <button
                        className="cart-toggle-btn"
                        onClick={() => {
                          setCartOpen(!cartOpen);
                        }}
                      >
                        <div className="header__cart-icon p-relative">
                          <HeaderCartIcon />
                          <span className="item-number">
                            {" "}
                            {quantityProduct}{" "}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div className="user-btn-inner p-relative d-none d-md-block">
                      <div className="user-btn-wrapper">
                        <div className="user-btn-content ">
                          <Link href="/login" className="user-btn-sign-in">
                            Sign In
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="d-none d-md-block">
                      <Link
                        href="/registration"
                        className="user-btn-sign-up edu-btn"
                      >
                        Sign Up
                      </Link>
                    </div>
                    <div className="menu-bar d-xl-none ml-20">
                      <button onClick={toggleSideMenu}
                        className="side-toggle"
                      >
                      <div  className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        <div
          onClick={() => setCartOpen(false)}
          className={cartOpen ? "body-overlay opened" : "body-overlay"}
        ></div>
      </header>
      <MobileMenu/>
      <div onClick={toggleSideMenu} className={sideMenuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}></div>
    </>
  );
};

export default HeaderOne;
