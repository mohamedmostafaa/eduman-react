import React from 'react';
import MembarImage from '../../../public/assets/img/member/member-img-04.png';
import MembarImageTwo from '../../../public/assets/img/member/member-img-01.png';
import MembarImageThree from '../../../public/assets/img/member/member-img-02.png';
import Image from 'next/image';
import Link from 'next/link';

const LatestComment = () => {
    return (
        <div className="latest-comments mb-50 mt-50">
        <h3>3 Comments</h3>
        <ul>
          <li>
            <div className="comments-box">
              <div className="comments-info d-flex">
                <div className="comments-avatar mr-20">
                  <Image src={MembarImage} style={{width:'auto', height:'auto'}} alt="img not found"/>
                </div>
                <div className="avatar-name">
                  <h5>Eleanor Fant</h5>
                  <span className="post-meta">
                    July 14, 2022
                  </span>
                </div>
              </div>
              <div className="comments-text ml-65">
                <p>
                  So I said lurgy dropped a clanger Jeffrey
                  bugger cuppa gosh David blatant have it,
                  standard A bit of how is your father my lady
                  absolutely.
                </p>
                <div className="comments-replay">
                  <Link href="#">Reply</Link>
                </div>
              </div>
            </div>
          </li>
          <li className="children">
            <div className="comments-box">
              <div className="comments-info d-flex">
                <div className="comments-avatar mr-20">
                  <Image src={MembarImageTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                </div>
                <div className="avatar-name">
                  <h5>Dominic</h5>
                  <span className="post-meta">
                    April 16, 2022
                  </span>
                </div>
              </div>
              <div className="comments-text ml-65">
                <p>
                  David blatant have it, standard A bit of how
                  is your father my lady absolutely.
                </p>
                <div className="comments-replay">
                  <Link href="#">Reply</Link>
                </div>
              </div>
            </div>
            <ul>
              <li className="children-2">
                <div className="comments-box">
                  <div className="comments-info d-flex">
                    <div className="comments-avatar mr-20">
                      <Image style={{width:"auto", height:'auto'}}
                        src={MembarImageThree}
                        alt="img not found"
                      />
                    </div>
                    <div className="avatar-name">
                      <h5>Von Rails</h5>
                      <span className="post-meta">
                        April 18, 2022{" "}
                      </span>
                    </div>
                  </div>
                  <div className="comments-text ml-65">
                    <p>
                      He nicked it get stuffed mate spend a
                      penny plastered.!
                    </p>
                    <div className="comments-replay">
                      <Link href="#">Reply</Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <div className="comments-box">
              <div className="comments-info d-flex">
                <div className="comments-avatar mr-20">
                <Image src={MembarImage} style={{width:'auto', height:'auto'}} alt="img not found"/>
                </div>
                <div className="avatar-name">
                  <h5>Eleanor Fant</h5>
                  <span className="post-meta">
                    July 14, 2022
                  </span>
                </div>
              </div>
              <div className="comments-text ml-65">
                <p>
                  So I said lurgy dropped a clanger Jeffrey
                  bugger cuppa gosh David blatant have it,
                  standard A bit of how is your father my lady
                  absolutely.
                </p>
                <div className="comments-replay">
                  <Link href="#">Reply</Link>
                </div>
              </div>
            </div>
          </li>
          <li className="children">
            <div className="comments-box">
              <div className="comments-info d-flex">
                <div className="comments-avatar mr-20">
                <Image src={MembarImageTwo} style={{width:'auto', height:'auto'}} alt="img not found"/>
                </div>
                <div className="avatar-name">
                  <h5>Dominic</h5>
                  <span className="post-meta">
                    April 16, 2022
                  </span>
                </div>
              </div>
              <div className="comments-text ml-65">
                <p>
                  David blatant have it, standard A bit of how
                  is your father my lady absolutely.
                </p>
                <div className="comments-replay">
                  <Link href="#">Reply</Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
};

export default LatestComment;