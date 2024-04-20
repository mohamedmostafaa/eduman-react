import ZoomClassDetailsMain from "@/components/zoom-class-details/ZoomDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ZoomDetailsPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <Wrapper>
      <main>
        <ZoomClassDetailsMain id={id}/>
      </main>
    </Wrapper>
  );
};

export default ZoomDetailsPage;
