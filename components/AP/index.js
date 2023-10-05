import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { StyledFigure } from "../ArtPieceDetails";
import ImageWithButton from "../ImageWithButton";

export default function MainPage(){
  return (
  <h1>TEST MAIN PAGE</h1>
)}

const StyledList = styled.div`
  margin-top: var(--header-height);
  margin-bottom: var(--footer-height);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: black;
  margin-bottom: 2.5rem;
`;
