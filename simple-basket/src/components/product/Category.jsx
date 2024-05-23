import Product from "./Product";
import {areProductsEqual} from "../../services/productService";

export default function Category({type, products, basket, onAddToBasket: addToBasket, onRemoveFromBasket: removeFromBasket}) {
    return (
        <>
            <h2>{type}</h2>
            {products.map(
                product => {
                    return <Product
                        name={product.name}
                        description={product.description}
                        inBasket={!!basket.find(basketItem => areProductsEqual(product, basketItem))}
                        onAdd={() => addToBasket(product)}
                        onRemove={() => removeFromBasket(product)}/>
                })}
        </>
    );
}
