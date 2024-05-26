import Product from "./Product";
import {areProductsEqual} from "../../services/productService";
import {getKey} from "../../util/utils";
import CategoryTitle from "./CategoryTitle";

export default function Category(
    {
        type,
        products,
        basket,
        onAddToBasket: addToBasket,
        onRemoveFromBasket: removeFromBasket
    }) {

    const byProductName = (previous, current) => current.name > previous.name ? -1 : 1;

    const isProductInBasket = (product, basket) => !!basket.find(basketItem => areProductsEqual(product, basketItem));

    const toProduct = product => <Product
        key={getKey(type, product.name)}
        name={product.name}
        description={product.description}
        inBasket={isProductInBasket(product, basket)}
        onAdd={() => addToBasket(product)}
        onRemove={() => removeFromBasket(product)}/>;

    return (
        <>
            <CategoryTitle title={type}/>
            {products
                .sort(byProductName)
                .map(toProduct)}
        </>
    );
}
