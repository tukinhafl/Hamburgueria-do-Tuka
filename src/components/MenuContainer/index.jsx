import { Product } from '../Product'
import './style.css'

export const MenuContainer = ( { product, handleClick } ) => {
  return(
    <ul>
      {product.map( (item, idx) => <li key={idx}> 
      <Product item={item} handleClick={handleClick}/>
       </li> ) }
    </ul>
  )
}