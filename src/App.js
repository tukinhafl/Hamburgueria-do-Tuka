import { useState } from 'react';
import './App.css';
import { MenuContainer } from './components/MenuContainer'

const state = {
  products: [
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ],
  filteredProducts: [],
  currentSale: { total: 0, saleDetails: [] },
}

function App() {
  const [product, setProduct] = useState([...state.products])
  const [userInput, setUserInput] = useState('')
  const [cart, setCart] = useState([])

  const handleClick = (productId) => {
    if (!cart.map(item => item.id).includes(productId)){
      setCart([...cart, state.products.find(item => item.id === productId)])
    }
  }

  const showProducts = (nomeDoLanche) => {
    setProduct(product.filter(item => item.name === nomeDoLanche))
  }

  return (
    <div className="App">
      <div className='containerSearch'>
        <input className='userWrite' type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
        <button onClick={() => showProducts(userInput)}>Pesquisar</button>
      </div>
      <MenuContainer product={product} handleClick={handleClick}/>
      <div className='containerCart'>
        <p className='total'>Subtotal: {
          cart.map(item => item.price).reduce((acc, itemAtual) => acc + itemAtual, 0).toFixed(2)
          }R$</p>
        <ul className='cartList'>
          {cart.map((item, idx) => <li key={idx}>
            <p>{item.name}</p> 
            <p>category: {item.category}</p> 
            <p>preço: {item.price}</p></li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
