import './App.css';
import Products from "./components/product/Products";
import Basket from "./components/basket/Basket";
import {useState} from "react";
import {loadProducts} from "./services/productService";

const areProductsEqual = (product1, product2) =>
    product1
    && product2
    && product1.name === product2.name
    && product1.type === product2.type;

const setProductInBasket = (product, value) => ({...product, inBasket: value});

const updateProductInList = (products, changedProduct, value) =>
    products.map(
        product => areProductsEqual(product, changedProduct) ? setProductInBasket(product, value) : product);

export default function App() {
    const [products, setProducts] = useState(loadProducts().map(product => setProductInBasket(product, false)));

    const addToBasket = product => setProducts(updateProductInList(products, product, true));
    const removeFromBasket = product => setProducts(updateProductInList(products, product, false));

    return (
        <>
            <h1>Products</h1>
            <div className="panel">
                <Products products={products} onAddToBasket={addToBasket} onRemoveFromBasket={removeFromBasket}/>
            </div>
            <div className="panel">
                <Basket products={products} onRemove={removeFromBasket}/>
            </div>
        </>
    );
}