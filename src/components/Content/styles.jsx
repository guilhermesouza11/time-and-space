import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  padding: 0 30px;
  background: #232323;
`;

export const FormMessage = styled.div`
  width: 700px;
`;

export const InputMessage = styled.input`
  width: 100%;
  height: 70px;
  color: #BFD58D;
  background: #232323;
  font-size: 25px;
  margin-bottom: 30px;

  :focus{
      border-bottom: 1px solid #77835C;
      opacity: .8; 
    }

    ::placeholder, 
    ::-webkit-input-placeholder {
    color: #BFD58D;  
    position: absolute;
    text-align: center;
  }
`;

export const BoxMessage = styled.div`
  color: #77835C;
  padding: 20px;
  text-align: center;

  :hover{
    background: #373737;
    color: #bfed56;
    transition: .2s;
  }
`;

export const Message = styled.p`
  font-weight: 300;
  padding-bottom: 5px;
`;

export const Hours = styled.small`
    opacity: .5;
`;



  /* :hover{
    color: #bfed56;
    opacity: 10;
  } */