import Category from "./Category";
import {getKey} from "../../util/utils";

export default function Categories(
    {
        products,
        basket,
        onAddToBasket: addToBasket,
        onRemoveFromBasket: removeFromBasket
    }) {

    const toCategory = type =>
        <Category
            key={getKey(type)}
            type={type}
            products={products[type]}
            basket={basket}
            onAddToBasket={addToBasket}
            onRemoveFromBasket={removeFromBasket}/>;

    const displayCategories = products => {
        if (products && Object.keys(products).length > 0) {
            return Object
                .keys(products)
                .map(toCategory);
        }

        return <span>Loading</span>;
    }

    return (
        <>
            {displayCategories(products)}
        </>
    );
}