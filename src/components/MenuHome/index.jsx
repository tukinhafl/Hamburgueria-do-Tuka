import { Link } from 'react-router-dom'
import { MenuHeader, Background } from './style'
import Logo from '../../img/Logo.png'

export const Menu = () => {
  return (
    <Background>
      <MenuHeader>
        <img src={Logo} alt="" />
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/products'>
            <li>Products</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
        <div>
          <input type="text" />
          <button>Pesquisar</button>
        </div>
      </MenuHeader>
    </Background>  
  )
}