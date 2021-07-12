import styled from "styled-components";

export const Rodape = styled.footer`
  width: 100%;
  height: 100vh;
  background-color: #000000e0;
  border-top: 1px solid gray;
  display: flex;
  justify-content: center;
  color: white;
  
  ul {
    list-style-type: none;
    padding: 0;

    li {
      padding: 15px;
      font-size: 1.5rem;
      
      i {
        margin-right: 8px;
      }

      a {
        text-decoration: none;

        &:hover {
          filter: brightness(1.6);
        }
      }
    }
  }

  div {
    padding: 15px;
  }
  
`