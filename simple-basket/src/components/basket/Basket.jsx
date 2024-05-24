import BasketItem from "./BasketItem";
import {getKey} from "../../util/utils";

export default function Basket({basket, onRemove}) {

    const byProductName = (previous, current) => current.name > previous.name ? -1 : 1;

    const toBasketItem = product =>
        <BasketItem
            key={getKey(product.type, product.name)}
            name={product.name}
            type={product.type}
            onRemove={() => onRemove(product)}/>;

    return (
        <>
            <h1>Basket</h1>
            <ul>
                {basket
                    .sort(byProductName)
                    .map(toBasketItem)}
            </ul>
        </>
    )
}