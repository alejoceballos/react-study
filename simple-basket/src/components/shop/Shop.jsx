import './Shop.css';

import {useEffect, useState} from "react";
import {areProductsEqual, loadProducts} from "../../services/productService";

import Categories from "../product/Categories";
import Basket from "../basket/Basket";
import PanelTitle from "./PanelTitle";

export default function Shop() {
    const [products, setProducts] = useState({});
    const [basket, setBasket] = useState([]);

    const addToBasket = product => setBasket([...basket, product]);
    const removeFromBasket = product => setBasket(basket.filter(basketItem => !areProductsEqual(basketItem, product)));

    useEffect(() => {
        loadProducts().then(products => {
            const productsIndexedByType = products.reduce((acc, product) => {
                acc[product.type] = [...(acc[product.type] ?? []), product];
                return acc;
            }, {});

            setProducts(productsIndexedByType)
        });
    }, []);

    return (
        <>
            <h1 data-testid="shop-title" className="shop-title">Shop</h1>
            <div className="product-panel">
                <PanelTitle data-testid="product-panel-title">Products</PanelTitle>
                <Categories
                    products={products}
                    basket={basket}
                    onAddToBasket={addToBasket}
                    onRemoveFromBasket={removeFromBasket}/>
            </div>
            <div className="basket-panel">
                <PanelTitle data-testid="basket-panel-title">Basket</PanelTitle>
                <Basket
                    basket={basket}
                    onRemove={removeFromBasket}/>
            </div>
        </>
    );
}