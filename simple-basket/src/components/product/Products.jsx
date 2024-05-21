import Category from "./Category";

const toIndexedByTypeProducts = (products) => products.reduce((acc, product) => {
    acc[product.type] = [...(acc[product.type] ?? []), product];
    return acc;
}, {});

export default function Products({products, onAddToBasket: addToBasket, onRemoveFromBasket: removeFromBasket}) {
    const productsByType = toIndexedByTypeProducts(products);
    const toCategory = type =>
        <Category
            type={type}
            products={productsByType[type]}
            onAddToBasket={addToBasket}
            onRemoveFromBasket={removeFromBasket}/>;

    return (
        <>
            <h1>Products</h1>
            {Object
                .keys(productsByType)
                .map(toCategory)}
        </>
    );
}