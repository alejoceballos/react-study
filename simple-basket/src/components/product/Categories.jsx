import Category from "./Category";

export default function Categories({products, basket, onAddToBasket: addToBasket, onRemoveFromBasket: removeFromBasket}) {
    const toCategory = type =>
        <Category
            type={type}
            products={products[type]}
            basket={basket}
            onAddToBasket={addToBasket}
            onRemoveFromBasket={removeFromBasket}/>;

    const displayPanel = products => {
        if (products && Object.keys(products).length > 0) {
            return Object
                .keys(products)
                .map(toCategory);
        }

        return <span>Loading</span>;
    }

    return (
        <>
            <h1>Products</h1>
            {displayPanel(products)}
        </>
    );
}