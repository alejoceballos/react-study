import Product from "./Product";

export default function Category({type, products, onAddToBasket: addToBasket, onRemoveFromBasket: removeFromBasket}) {
    return (
        <>
            <h2>{type}</h2>
            {products.map(
                product => {
                    return <Product
                        name={product.name}
                        description={product.description}
                        inBasket={product.inBasket}
                        onAdd={() => addToBasket(product)}
                        onRemove={() => removeFromBasket(product)}/>
                })}
        </>
    );
}
