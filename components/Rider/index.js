import { styled } from "styled-components";


export default function Rider(){
return(
  <StyledRider>Rider Page</StyledRider>
)
};
export const StyledRider = styled.h2`
  background-color: yellow;
  margin-top: 150px;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`; 