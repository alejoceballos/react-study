import {useEffect, useState} from "react";
import {areProductsEqual, loadProducts} from "../../services/productService";
import Categories from "../product/Categories";
import Basket from "../basket/Basket";

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
            <h1>Shop</h1>
            <div className="panel">
                <Categories
                    products={products}
                    basket={basket}
                    onAddToBasket={addToBasket}
                    onRemoveFromBasket={removeFromBasket}/>
            </div>
            <div className="panel">
                <Basket
                    basket={basket}
                    onRemove={removeFromBasket}/>
            </div>
        </>
    );

}