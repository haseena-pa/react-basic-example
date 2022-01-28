import './ProductList.css';
import Product from './Product';
import {items} from './items';

function ProductList() {
    return (
        <div className="main-wrapper">
            {
                 items.map((item,index) => {
                     return <Product {...item} key={index}/>
                 })
            }
        </div>
    );
}

export default ProductList;