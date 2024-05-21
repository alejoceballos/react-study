import BasketItem from "./BasketItem";

export default function Basket({products, onRemove}) {
    const byInBasket = product => product.inBasket;
    const toBasketItem = product =>
        <BasketItem
            name={product.name}
            type={product.type}
            onRemove={() => onRemove(product)}/>;

    return (
        <>
            <h1>Basket</h1>
            <ul>
                {products
                    .filter(byInBasket)
                    .map(toBasketItem)}
            </ul>
        </>
    )
}