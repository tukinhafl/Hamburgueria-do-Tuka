import { useEffect, useState } from 'react';
import guarana from '../../img/Guarana.png'
import coca from '../../img/Coca.png'
import fanta from '../../img/Fanta.png'
import hamburguer from '../../img/Hamburguer.png'
import xSalada from '../../img/x-salada.png'
import xBurguer from '../../img/X-burguer.png'
import bigKenzie from '../../img/Big-Kenzie.png'
import { Search, Container, MenuCarrinho } from './style'
import { MenuContainer } from '../../components/MenuContainer'
import { Menu } from '../../components/MenuHome'
import { Footer } from '../../components/Rodape'
import toast, { Toaster } from 'react-hot-toast'

const state = {
  products: [
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99, image: hamburguer },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99, image: xBurguer },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99, image: xSalada },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99, image: bigKenzie },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99, image: guarana },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99, image: coca },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99, image: fanta },
  ],
  filteredProducts: [],
  currentSale: { total: 0, saleDetails: [] },
}

export const FastFood = () => {
  const [product, setProduct] = useState([...state.products])
  const [userInput, setUserInput] = useState('')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    if (cart.length !== 0) {
      setShowCart(true)
    } else {
      setShowCart(false)
    }
  } ,[cart])

  const handleClick = (productId, productName) => {
    if (!cart.map(item => item.id).includes(productId)){
      setCart([...cart, state.products.find(item => item.id === productId)])
    }
    toast.success(`${productName} foi adicionado ao carrinho.`)
  }

  const showProducts = (nomeDoLanche) => {
    if (nomeDoLanche.length === 0) {
      setProduct([...state.products])
    } else {
    setProduct(product.filter(item => item.name === nomeDoLanche))
    }
  }

  const removeItens = (e) => {
    let itemFromRemove = e.target.parentElement.previousElementSibling.previousElementSibling.innerText
    setCart(cart.filter(item => item.name !== itemFromRemove))
  }

  const compraFinalizada = () => {
    return toast.success('Pedido finalizado com sucesso.')
  }

  return (
    <Container className="App">
      <Menu />
        <div className='ContainerProduct'>
          <Search className='containerSearch'>
            <input placeholder='Pesquise seu lanche' className='userWrite' type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
            <button onClick={() => showProducts(userInput)}>Pesquisar</button>
          </Search>
          <MenuContainer product={product} handleClick={handleClick}/>
          <MenuCarrinho className='containerCart' showCart={showCart}>
            <header>
              <h1>
                <i class="fas fa-cart-arrow-down"></i>
                Carrinho
              </h1>
            </header>
            <ul className='cartList'>
              {cart.map((item, idx) => 
              <li key={idx}>            
                <p>
                  <img src={item.image} alt="Produtos" />
                </p>
                <p>{item.name}</p>  
                <p>preço: {item.price}</p>
                <p className='span'>
                  <span onClick={removeItens}>X</span>
                </p> 
              </li>)}
            </ul>
            <p className='total'>Total: R${
              cart.map(item => item.price).reduce((acc, itemAtual) => acc + itemAtual, 0).toFixed(2)
              }
            </p>
            <button className='finalizarPedido' onClick={compraFinalizada}>
              <i class="fas fa-check"></i>
              Finalizar pedido
            </button>
            <Toaster />
          </MenuCarrinho>
        </div>
      <Footer />
    </Container>
  )
}