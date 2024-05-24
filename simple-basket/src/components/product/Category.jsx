import Product from "./Product";
import {areProductsEqual} from "../../services/productService";
import {getKey} from "../../util/utils";

export default function Category(
    {
        type,
        products,
        basket,
        onAddToBasket: addToBasket,
        onRemoveFromBasket: removeFromBasket
    }) {

    const byProductName = (previous, current) => current.name > previous.name ? -1 : 1;

    const toProduct = product => <Product
        key={getKey(type, product.name)}
        name={product.name}
        description={product.description}
        inBasket={!!basket.find(basketItem => areProductsEqual(product, basketItem))}
        onAdd={() => addToBasket(product)}
        onRemove={() => removeFromBasket(product)}/>;

    return (
        <>
            <h2>{type}</h2>
            {products
                .sort(byProductName)
                .map(toProduct)}
        </>
    );
}
