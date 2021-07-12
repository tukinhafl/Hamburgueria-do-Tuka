import styled from 'styled-components'

export const Lista = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`

export const Itens = styled.li`
  padding: 5px;
  max-width: 900px;
  background: #faebd7f0;
  margin: 5px;
  border-radius: 15px;

  .card {
    height: 300px;
    position: relative;
    width: 200px;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);

    .content {
      padding: 20px;
      text-align: center;
      transition: 0.5s;

      h1 {
        margin: 15px 0;
      }

      h3 {
        font-size: 0.75rem;
      }

      button {
        width: 100px;
        height: 30px;
        color: white;
        background: purple;
        opacity: 1;
        font-size: 1rem;

        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }
  }
`
