import Link from "next/link";
import { styled } from "styled-components";
// import { StyledLink } from "../ArtPieces";

export default function Footer() {
  return (
    <StyledNavigation>
      <>
      <li>
    <Link href="/landing">Home</Link>
    </li>
        <li>
          <StyledLink href="/merch">Merch</StyledLink>
        </li>
        <li>
          <StyledLink href="/favourites/">Favourites</StyledLink>
        </li>
      </>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--footer-height);
  padding: 2rem;
  background-color: white;
  text-align: center;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  color: #36013f;
  text-decoration: none;
`;

const MainContentContainer = styled.div`
  min-height: calc(100vh - var(--footer-height));
  padding-bottom: var(--footer-height);
`;