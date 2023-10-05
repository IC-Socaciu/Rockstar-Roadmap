import Image from "next/image";
import { styled } from "styled-components";
import { StyledLink } from "../ArtPieces";
import ImageWithButton from "../ImageWithButton";

export default function HomePage(){
  return(
    <HomeBanner>This is the homepage</HomeBanner>
  )
}

const HomeBanner = styled.h3`
color: white;
margin-top: 250px;
`;