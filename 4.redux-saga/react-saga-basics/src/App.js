import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchProducts } from './store'
// import { productList } from './store/actions/productList'

const App = () => {

  const dispatch = useDispatch() // for dispatching actions

  const {cartItem, products} = useSelector((state)=>{
    return state.cart;
  })
  console.log(`cartItem: ${cartItem}, products: ${products}`)

  

  useEffect(()=>{
    // dispatch(productList())
    // dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className='app' >
      <button onClick={()=> dispatch(addToCart(1))} >Add to cart</button>
      {/* <button onClick={()=> dispatch(productList())} >call productList</button> */}
    </div>
  )
}

export default App