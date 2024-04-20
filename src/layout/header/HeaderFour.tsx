import React, { useContext, useState } from "react";
import Link from "next/link";
import HeaderCartIcon from "@/svg/HeaderCartIcon";
import LogoBlack from "../../../public/assets/img/logo/logo-black.png";
import Image from "next/image";
import { AppContextType } from "@/interFace/interFace";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import HeaderCart from "./HeaderCart";
import useScrollDirection from "@/hooks/sticky-header";
import HeaderIcon from "@/svg/header-icon";
import Menu from "./Menu";
import { AppContext } from "@/contextApi/AppProvider";
import MobileMenu from "./components/MobileMenu";

const HeaderFour = () => {
  const scrollDirection = useScrollDirection(null);
  const {toggleSideMenu,sideMenuOpen} = useContext(AppContext) as AppContextType
  const [cartOpen, setCartOpen] = useState(false);
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const uniqueProductIds = new Set();
  cartProducts.forEach((product) => uniqueProductIds.add(product.id));
  const quantityProduct = uniqueProductIds.size;

  return (
    <>
      <header>
        <div className="header-top-area d-none d-lg-block">
          <div className="container-fluid">
            <div className="header-top-inner">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <div className="header-top-icon">
                    <Link href="tel:(555)674890556">
                      <i className="fas fa-phone-alt"></i>(555) 674 890 556
                    </Link>
                    <Link href="mailto:info@example.com">
                      <i className="fal fa-envelope"></i>info@example.com
                    </Link>
                    <i className="fal fa-map-marker-alt"></i>
                    <span>3rd Avenue, San Francisco</span>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="header-top-login d-flex f-right">
                    <div className="header-social">
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="https://instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="https://www.linkedin.com" target="_blank">
                        {" "}
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`header-area sticky-header ${
            scrollDirection === "down" ? "sticky" : ""
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
                          src={LogoBlack}
                          style={{ width: "auto", height: "auto" }}
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
                        <div className="dropdown-category">
                          <nav>
                            <ul>
                              <li className="item-has-children">
                                <Link href="/course">Development</Link>
                                <ul className="category-submenu">
                                  <li>
                                    <Link href="/course">All Development</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Mobile App</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Web Development</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      Development tools
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Database</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      Programming language
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="item-has-children">
                                <Link href="/course">Art and Design</Link>
                                <ul className="category-submenu">
                                  <li>
                                    <Link href="/course">Web Design</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Graphic Design</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Design tools</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">All Art</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Marketing</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="item-has-children">
                                <Link href="/course">Business</Link>
                                <ul className="category-submenu">
                                  <li>
                                    <Link href="/course">All Business</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Communications</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Finance</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Management</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Sales</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="item-has-children">
                                <Link href="/course">Life Style</Link>
                                <ul className="category-submenu">
                                  <li>
                                    <Link href="/course">Life Style</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Mental Health</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Dieting</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">All Art</Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Nutrition</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="item-has-children">
                                <Link href="/course">Health and Fitness</Link>
                                <ul className="category-submenu">
                                  <li>
                                    <Link href="/course">
                                      All Health and Fitness
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      Beauty and Makeup
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">
                                      Food and Beverages
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/course">Good Food</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link href="/course">Data Science</Link>
                              </li>
                              <li>
                                <Link href="/course">Marketing</Link>
                              </li>
                              <li>
                                <Link href="/course">Photography</Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
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
                        type="button"
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
                          <Link
                            className="user-btn-sign-in"
                            href="/login"
                           
                          >
                            Sign In
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="d-none d-md-block">
                      <Link
                        className="user-btn-sign-up edu-btn"
                        href="/registration"
                       
                      >
                        Sign Up
                      </Link>
                    </div>
                    <div className="menu-bar d-xl-none ml-20">
                      <button onClick={toggleSideMenu}
                        className="side-toggle"
                      >
                        <div className="bar-icon">
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
      </header>
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div
        onClick={() => setCartOpen(false)}
        className={cartOpen ? "body-overlay opened" : "body-overlay"}
      ></div>
      
      <MobileMenu/>
       <div onClick={toggleSideMenu} className={sideMenuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}>
        </div>
    </>
  );
};

export default HeaderFour;
