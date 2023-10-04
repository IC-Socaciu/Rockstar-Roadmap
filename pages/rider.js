import Rider from "@/components/Rider";
import { styled } from "styled-components";


export default function RiderPage() {
  return (
    <>
      <Rider/>
      <div className="btnDiv">
     <BtnDown id="downloadBtn" value="download">Download radio submission</BtnDown>
</div>
<div className="btnDiv">
     <BtnDown id="downloadBtn" value="download">Download festival submission</BtnDown>
</div>
    </>
  );
}


export const BtnDown = styled.button`
margin-bottom: 150px;
`;