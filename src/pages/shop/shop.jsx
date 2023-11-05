import {productsval} from '../../products';
import Product from './product';
import './shop.css'
function Shop(){
    return(
        <div className="shop">
            <div className="shopTitle">
                <h1>PedroTech Shop</h1>
            </div>
            <div className="products">
                {
                    productsval.map((product) =>(
                        <Product data={product} key={product.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Shop;