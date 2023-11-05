import { useContext } from "react";
import Context from '../../context/shop-context'
function Product(props){
    const { id, productName, price, productImage} = props.data
    const { cartItems, addToCart } = useContext(Context);
    const cartItemAmount = cartItems[id]
    return(
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <div>
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p>${price}</p>
                </div>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
        </div>
    )
}
export default Product;