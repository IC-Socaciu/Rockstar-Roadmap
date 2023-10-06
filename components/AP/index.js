import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { StyledFigure } from "../ArtPieceDetails";
import ImageWithButton from "../ImageWithButton";
import banner from "/assets/vermillionsky.jpg"
export default function MainPage(){
  return (
 <>
    <BannerContainer>
      <BannerImage src={banner} alt="Banner Image" layout="fill" /> 
      <BannerText>The Vermillion Sky</BannerText> 
    </BannerContainer>
        <CardGrid>
        {[...Array(6)].map((_, index) => (
          <Card key={index}>
  Tip <span>{index + 1}</span>
          </Card>
        ))}
      </CardGrid>
      </>
    );
  };
  

  const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 30px;
  margin-left: auto;  
  margin-right: auto;
 
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background-color: #b83253;
  color: white;
  &:hover {
    background-color: yellow;
  }
`;

const CardText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    display: block;
  }
`;
const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const BannerImage = styled(Image)`
  z-index: -1;
`;

const BannerText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`; 