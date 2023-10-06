import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { StyledFigure } from "../ArtPieceDetails";
import ImageWithButton from "../ImageWithButton";

export default function MainPage(){
  return (
 
        <CardGrid>
        {[...Array(6)].map((_, index) => (
          <Card key={index}>
            <CardText>Card {index + 1}</CardText>
          </Card>
        ))}
      </CardGrid>
    );
  };
  

  const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background-color: #f5f5f5;
`;

const CardText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;