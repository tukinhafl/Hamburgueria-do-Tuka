import styled from "styled-components";

export const Biography = styled.div`
  height: 70vh;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    border-radius: 5px;
    padding: 5px;
    background: #000000e0;
    font-size: 2rem;
    align-self: center;
    color: #977f48;
  }

  .container {
    height: 400px;
    border-radius: 100%;
    background: #000000e0;
    display: flex;
    justify-content: center;
    border: 2px solid #806900;
    box-sizing: border-box;
    box-shadow: 0 0 50px 15px #805d0096;

    p {
      font-size: 1.3rem;
      width: 650px;
      align-self: center;
      color: #fbf9fead;
    }
  }

  p:nth-child(2) {
    font-size: 1.5rem;
  }

  p:nth-child(3) {
    border-radius: 5px;
    padding: 5px;
    background: #000000e0;
    align-self: center;
    color: orange;
  }
`