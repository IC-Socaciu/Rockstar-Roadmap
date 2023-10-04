import { styled } from "styled-components";

export default function Header() {
  return (
    <>
    <StyledHeader>
      <h1>Rockstar Roadmap</h1>
<Navbar>
  <ul>
    <li>LINK 1</li>
    <li>LINK 2</li>
    <li>LINK 3</li>
    <li>LINK 4</li>
    <li>LINK 5</li>
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
  background-color: #36013f;
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
    color: white;
    li {
      margin: 0 1rem;
    }
  }
`;