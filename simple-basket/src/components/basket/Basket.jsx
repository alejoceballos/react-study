import BasketItem from "./BasketItem";
import BasketTotal from "./BasketTotal";
import {getKey} from "../../util/utils";

export default function Basket({basket, onRemove}) {

    const byProductName = (previous, current) => current.name > previous.name ? -1 : 1;

    const toBasketItem = product =>
        <BasketItem
            key={getKey(product.type, product.name)}
            name={product.name}
            type={product.type}
            value={product.monthlyCost}
            onRemove={() => onRemove(product)}/>;

    return (
        <>
            <ul>
                {basket
                    .sort(byProductName)
                    .map(toBasketItem)}
            </ul>
            <BasketTotal basket={basket}/>
        </>
    )
}