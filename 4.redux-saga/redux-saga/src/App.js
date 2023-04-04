import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart } from "./store/actions/cartActions";
import { fetchProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  const { cart, products } = useSelector((state) => state);

  console.log(cart, products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      {products.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default App;
