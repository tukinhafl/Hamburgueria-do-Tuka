import styled from "styled-components";

export const Landing = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 100%;
  background-color: #000000e0;
  height: 70vh;
  
  div {
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 25px;
  }

  p {
    width: 500px;
    color: white;
    font-size: 1.85rem;
  }

  img {
    height: 200px;
    width: 400px;
  }
`