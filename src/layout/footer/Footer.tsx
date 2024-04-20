import Link from "next/link";
import React from "react";
import FooterLogo from "../../../public/assets/img/logo/footer-logo.png";
import Image from "next/image";
import CopyrightArea from "./copyright-area";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area pt-100">
          <div className="container">
            <div className="footer-main mb-60">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w1 mb-40">
                    <div className="footer-img">
                      <Link href="/">
                        <Image
                          src={FooterLogo}
                          style={{ width: "auto", height: "auto" }}
                          alt="footer-logo"
                        />
                      </Link>
                      <p>
                        Great lesson ideas and lesson plans for ESL teachers!
                        Educators can customize lessons as best plans to
                        knowledge.
                      </p>
                    </div>
                    <div className="footer-icon">
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
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w2 mb-40">
                    <h3>Online Platform</h3>
                    <ul>
                      <li>
                        <Link href="/course">Proper Guidelines</Link>
                      </li>
                      <li>
                        <Link href="/course">Digital Library</Link>
                      </li>
                      <li>
                        <Link href="/course">Compare Us</Link>
                      </li>
                      <li>
                        <Link href="/become-instructor">Become Instructor</Link>
                      </li>
                      <li>
                        <Link href="/course">Build Career</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w3 mb-40">
                    <h3>Browse Courses</h3>
                    <ul>
                      <li>
                        <Link href="/course">Development</Link>
                      </li>
                      <li>
                        <Link href="/course">Business</Link>
                      </li>
                      <li>
                        <Link href="/course">Health and Fitness</Link>
                      </li>
                      <li>
                        <Link href="/course">Life Styles</Link>
                      </li>
                      <li>
                        <Link href="/course">Photography</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget f-w4 mb-40">
                    <h3>Insight Community</h3>
                    <ul>
                      <li>
                        <Link href="/course">Global Partners</Link>
                      </li>
                      <li>
                        <Link href="/contact">Forum</Link>
                      </li>
                      <li>
                        <Link href="/contact">Help and Support</Link>
                      </li>
                      <li>
                        <Link href="/contact">Community</Link>
                      </li>
                      <li>
                        <Link href="/faq-page">Documentation</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           <CopyrightArea/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
