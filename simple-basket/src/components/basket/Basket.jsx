import BasketItem from "./BasketItem";

export default function Basket({basket, onRemove}) {
    const toBasketItem = product =>
        <BasketItem
            name={product.name}
            type={product.type}
            onRemove={() => onRemove(product)}/>;

    return (
        <>
            <h1>Basket</h1>
            <ul>
                {basket.map(toBasketItem)}
            </ul>
        </>
    )
}