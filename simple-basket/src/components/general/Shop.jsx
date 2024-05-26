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
            <div>
                <h1 className="main-title">Shop</h1>
            </div>
            <div className="shop-panel">
                <PanelTitle title="Products"/>
                <Categories
                    products={products}
                    basket={basket}
                    onAddToBasket={addToBasket}
                    onRemoveFromBasket={removeFromBasket}/>
            </div>
            <div className="shop-panel">
                <PanelTitle title="Basket"/>
                <Basket
                    basket={basket}
                    onRemove={removeFromBasket}/>
            </div>
        </>
    );

}