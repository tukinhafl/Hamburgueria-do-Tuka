import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  
  .ContainerProduct {
    text-align: center;
    max-width: 50%;
    height: 70%;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  margin: 0 auto;

  input {
    height: 25px;
  }

  button {
    height: 30px;
    border-radius: 10px;
    margin-left: 10px;
    font-weight: bold;
    background-color: rgb(255 0 0 / 65%);

    &:hover {
      cursor: pointer;
    }
  }
`

export const MenuCarrinho = styled.aside`
  display: ${props => props.showCart ? 'block' : 'none'};
  position: fixed;
  right: 0;
  background: #000000ad;
  color: orange;
  top: 150px;

  i {
    padding-right: 10px;
  }

  ul {
    padding: 10px;
    list-style-type: none;
  }

  li {
    height: 60px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: 1px solid black;

    &:nth-child(odd) {
      background-color: #808080a6;
    }
  }

  span {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #d20e0e;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid gray;
    color: white;

    &:hover {
      filter: brightness(1.25);
      cursor: pointer;
    }
  }

  p {
    width: calc(100%/4);
    padding: 0 10px;
    margin:0;
  }

  .span {
    position: relative;
    height: 100%;
    width: 40px;
  }

  .total {
    color: burlywood;
    width: 100%;
    font-size: 1.5rem;
  }

  .finalizarPedido {
    font-size: 1rem;
    height: 30px;
    margin: 10px;
    width: 70%;
    text-transform: uppercase;
    font-weight: bold;
    box-sizing: border-box;
    background: #bc0000;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    color: white;

    &:hover {
      filter: brightness(1.25);
    }
  }
`