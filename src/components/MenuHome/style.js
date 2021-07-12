import styled from "styled-components";

export const MenuHeader = styled.header`
  width: 100%;
  background: #08074794;
  display: flex;

  ul {
    margin: 0 auto;
    display: flex;
    list-style-type: none;

    a {
      align-self: center;
      padding: 53px 15px;
      text-decoration: none;
      font-size: 2rem;
      color: white;

      &:hover {
        border-bottom: 4px solid black;
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 25px;

    input {
      border: 1px solid black;
      height: 25px;
      opacity: 0.8;
    }

    button {
      color: white;
      border: none;
      height: 30px;
      border-radius: 10px;
      margin-left: 10px;
      font-weight: bold;
      background-color: rgb(7 34 83);

      &:hover {
        cursor: pointer;
        filter: brightness(0.8);
      }
    }
  }
`

export const Background = styled.div`
  /* height: 100vh; */
  background-image: url('https://http2.mlstatic.com/D_NQ_NP_795582-MLB41307409209_042020-V.jpg');
`