import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CounterSectionThree from "../homeThree/CounterSectionThree";
import BecomeInstructorSection from "../about/BecomeInstructorSection";
import StepJourneySection from "./StepJourneySection";
import InstructorFeature from "./InstructorFeature";

const BecomeInstructorMain = () => {
  return (
    <main>
      <Breadcrumb
        title="Become an Instructor"
        subTitle="Become an Instructor"
      />
      <InstructorFeature />
      <CounterSectionThree />
      <StepJourneySection />
      <BecomeInstructorSection />
    </main>
  );
};

export default BecomeInstructorMain;
