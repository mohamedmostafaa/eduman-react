"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image, { StaticImageData } from "next/image";
import WebniarForm from "@/form/webinar-form";
import SpeakerSection from "./SpeakerSection";
import EventDetailsSidebar from "../event-details/EventDetailsSidebar";
import detailsImage from "../../../public/assets/img/features/features1.jpg";

interface Webinar {
  id: number;
  img?: StaticImageData;
  title: string;
  desc: string;
  videoUrl: string;
}

const WebinarDetailsSection: React.FC<{ webinar: Webinar }> = ({ webinar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setvideoId] = useState(" ");
  const openVideoModal = (id: any) => {
    setIsOpen(!isOpen);
    setvideoId(id);
  };
  return (
    <>
      <section className="course-detalis-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8">
              <div className="course-detalis-wrapper mb-30">
                <div className="course-webinar-video">
                  <div className="course-video-thumb w-img">
                      <Image
                        src={detailsImage}
                        style={{ width: "100%", height: "auto" }}
                        alt="img not found"
                      />
                    <div className="sidber-video-btn">
                      <span
                        className="popup-video"
                        onClick={() => {
                          openVideoModal(webinar?.videoUrl);
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-heading mb-20">
                  <h2>{webinar.title}</h2>
                </div>
                <div className="course-description pb-30">
                  <p>{webinar?.desc && webinar?.desc}</p>
                </div>
                <div className="course-learn-wrapper mb-40">
                  <div className="course-learn">
                    <div className="course-leranm-tittle">
                      <h4 className="mb-15">What {`you'll`} learn</h4>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="course-leran-text f-left">
                          <ul>
                            <li>
                              Handle advanced techniques like Dimensionality
                              Reduction
                            </li>
                            <li>
                              Handle specific topics like Reinforcement Learning
                              best
                            </li>
                            <li>
                              Know which Machine Learning model to choose for
                              each type of problem
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="course-leran-text">
                          <ul>
                            <li>
                              Reinforcement learning upper confidence bound
                              Thompson sampling
                            </li>
                            <li>
                              Model Selection & Boosting fold cross validation
                              parameter
                            </li>
                            <li>
                              Use Machine Learning for personal purpose of
                              machine
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="webinar-speaker mb-10">
                  <h3 className="mb-25">Speakers</h3>
                  <div className="row">
                    <SpeakerSection />
                  </div>
                </div>
                <div className="webinar-registration">
                  <h3 className="mb-25">Free Registration</h3>
                  <div className="webinar-registration-form">
                    <WebniarForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
              <div className="course-video-widget">
                <EventDetailsSidebar webinar={webinar} Name="Webinar" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default WebinarDetailsSection;
