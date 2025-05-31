import React from 'react'
import Productos from './Productos'

const ProductList = ({productos}) => {
  return (
    <>
      <h1>Galeria de Productos</h1>
      {
        productos.map(producto=>(
        <Productos key={producto.id} producto={producto} />
        ))
      }
    </>
  )
}

export default ProductList
