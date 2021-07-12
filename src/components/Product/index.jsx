export const Product = ( { item, handleClick } ) => {
  return(
    <>
      <img src={item.image} alt="Lanche" />
      <h1>{item.name}</h1>
      <h3>{item.category}</h3>
      <h3>R${item.price}</h3>
      <button onClick={() => handleClick(item.id, item.name)}>Adicionar</button>
    </>
  )
}