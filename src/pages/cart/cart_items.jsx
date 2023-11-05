import { useContext } from 'react';
import Context from '../../context/shop-context'
function CartItem(props){
    const {id, productName, price, productImage} = props.data;
    const {  cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(Context)
    return(
        <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)} readOnly
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
    )
}
export default CartItem