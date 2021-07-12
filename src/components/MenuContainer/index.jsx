import { Product } from '../Product'
import { Lista, Itens } from './style'

export const MenuContainer = ( { product, handleClick } ) => {
  return(
    <Lista>
      {product.map( (item, idx) => 
      <Itens key={idx}>
        <div className='card'>
          <div className='content'> 
            <Product item={item} handleClick={handleClick}/>
          </div>
        </div>
      </Itens> ) }
    </Lista>
  )
}