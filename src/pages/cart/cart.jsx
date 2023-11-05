import { productsval } from "../../products";
import Context from '../../context/shop-context'
import { useContext } from "react";
import CartItem from './cart_items'
import './cart.css'
import { useNavigate } from "react-router-dom";
function Cart(){
    const { cartItems, getTotalCartAmount, checkout} = useContext(Context)
    const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {
                    productsval.map((product) =>{
                        if(cartItems[product.id] !==0){
                            return <CartItem data={product} key={product.id} />
                        }
                    })
                }
            </div>
            {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
        </div>
    )
}
export default Cart;