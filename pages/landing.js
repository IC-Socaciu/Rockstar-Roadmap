import { styled } from "styled-components";
import MainPage from "@/components/ArtPieces";

export default function HomePage(){
  return(
    <>
    <LandingTest>TEST</LandingTest>
    <MainPage/>
    </>
  )
}

const LandingTest = styled.h3`
color: white;
margin-top: 250px;
`;