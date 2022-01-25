import styled from "styled-components";

export const MainHeader = styled.header`
  background: #232323;
  weight: 100%;
  height: 20vh;
  color: #BFD58D;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;

  > small{
      opacity: .5;
    }
`;

export const LinkSocial = styled.a`
  font-size: 13px;
  opacity: .5;
  cursor: pointer;
  transition: .2s;

  :hover{
    color: #bfed56;
    opacity: 10;
  }
`;