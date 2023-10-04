import { styled } from "styled-components";

export default function Header() {
  return (
    <>
    <StyledHeader>
      <h1>Rockstar Roadmap</h1>
<Navbar>
  <ul>
    <li>Band Tips</li>
    <li>Styles</li>
    <li>EPK</li>
    <li>Rider</li>
    <li>Graphic Artists</li>
    <li>Link</li>
  </ul>
</Navbar>
    </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  height: var(--header-height);
  position: fixed;
  text-align: center;
  align-items: center;
  top: 0;
  width: 100%;
  padding: 1rem;
  background-color: white;
  color: #36013f;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    color: #36013f;
    li {
      margin: 0 1rem;
    }
  }
`;