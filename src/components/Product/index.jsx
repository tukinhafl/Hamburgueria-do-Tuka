import './style.css'

export const Product = ( { item, handleClick } ) => {
  return(
    <>
      <h1>{item.name}</h1>
      <h3>{item.category}</h3>
      <h3>{item.price}</h3>
      <button onClick={() => handleClick(item.id)}>Adicionar</button>
    </>
  )
}