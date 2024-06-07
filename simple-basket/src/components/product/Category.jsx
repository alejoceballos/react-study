import Product from "./Product";
import {areProductsEqual} from "../../services/productService";
import {toListChildKey} from "../../util/utils";
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
        key={toListChildKey(type, product.name)}
        name={product.name}
        description={product.description}
        cost={product.monthlyCost}
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
