import React from "react";
import Link from "next/link";
import SidebarTopicList from "./SidebarTopicList";

interface Question {
  id: number;
  questionText:string;
}

const FaqContentSection:React.FC<{Faq : Question }> = ({Faq}) => {
  return (
    <section className="faq-detalis-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="faq-content-wrapper mb-25">
              <div className="faq-detalis-info">
                <h3>{Faq.questionText}</h3>
                <p>
                  There are so many websites out there that have not considered
                  the overall usability of their visually impaired users. When
                  it comes to designing better links and sending better emails,
                  Slava Shestopalov has a few tips on how to improve your
                  websites experience while accessibility in mind.
                </p>
              </div>
              <div className="faq-suppoert">
                <h5>Incorrectly entered information</h5>
                <p>
                  There are so many websites out there that have not considered
                  the overall usability of their visually impaired users. When
                  it comes to designing better links and sending better emails,
                </p>
                <ul>
                  <li>
                    Handle advanced techniques like Dimensionality Reduction Did
                    you encounter a purchasing error which said to contact{" "}
                    <Link href="/contact">Eduman Support?</Link>
                  </li>
                  <li>
                    With a little CSS, we can adapt our web designs to be more
                    accommodating for people with dyslexia. In this article,
                    we’ll explore those techniques by adding a dyslexia-friendly
                    mode to an existing design.
                  </li>
                  <li>
                    You can find{" "}
                    <Link href="/contact">
                      <span>Markdown in many places</span>
                    </Link>{" "}
                    on the Internet. This article covers different aspects of
                    Markdown and how it interacts with other technology.
                  </li>
                  <li>
                    Dialogs are everywhere in modern interface design (for good
                    or for bad), and yet many of them are not accessible to
                    assistive technologies In this article.
                  </li>
                  <li>
                    Web app accessibility appears difficult because it seems
                    that there is little information on the subject available
                    online. Let’s take a closer look at the{" "}
                    <Link href="/contact">
                      accessible use of framework features.
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="payment-method-info">
                <h5>Outdated saved payment method</h5>
                <p>
                  ake headlines, for example. A solid and comprehensible
                  headline structure do not only good for SEO but especially for
                  people using screen readers. When they encounter a sound
                  document outline, constructed with headlines that structure a
                  web page or app,{" "}
                  <Link href="/contact">
                    screen reader users gain a quick overview
                  </Link>{" "}
                  of the web page they are on. Just like visually-abled users do
                  not read every word on a page but scan for interesting things
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-8">
            <div className="side-bar-widget mb-30">
              <div className="faq-sidebar-topc">
                <h5>Related Topics</h5>
                <SidebarTopicList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContentSection;
