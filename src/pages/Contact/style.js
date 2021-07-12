import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 70vh;

  form {
    width: 500px;
    margin: 0 auto;
    height: 100%;
    background: #000000e0;

    .contato {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        padding: 10px;
      }

      h1 {
        color: white;
        text-align: center;
      }

      label {
        color: white;
        align-self: center;
        width: 50px;
      }

      input {
        height: 25px;
        width: 100%;
      }

      textarea {
        padding: 10px;
        box-sizing: border-box;
        width: 96%;
        margin: 10px;
        height: 100px;
      }

      .enviar {
        text-transform: uppercase;
        margin: 10px;
        align-self: center;
        width: 100px;
        height: 30px;
      }
    }
  }
`