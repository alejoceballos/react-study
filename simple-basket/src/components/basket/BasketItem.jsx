import './BasketItem.css';
import ProductPrice from "../product/ProductPrice";

export default function BasketItem({name, type, value, onRemove}) {
    return (
        <li className="basket-item">
            <button onClick={onRemove}>Remove</button>&nbsp;
            <span className="basket-item-name">{name}</span>&nbsp;
            <span>({type})</span> -&nbsp;
            <ProductPrice price={value} />
        </li>
    );
}
