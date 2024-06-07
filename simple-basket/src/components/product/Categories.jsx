import Category from "./Category";
import {toListChildKey} from "../../util/utils";

export default function Categories(
    {
        products,
        basket,
        onAddToBasket: addToBasket,
        onRemoveFromBasket: removeFromBasket
    }) {

    const toCategory = type =>
        <Category
            key={toListChildKey(type)}
            type={type}
            products={products[type]}
            basket={basket}
            onAddToBasket={addToBasket}
            onRemoveFromBasket={removeFromBasket}/>;

    if (products && Object.keys(products).length > 0) {
        return Object
            .keys(products)
            .map(toCategory);
    }

    return <span data-testid="categories-loading-msg">Loading...</span>;
}