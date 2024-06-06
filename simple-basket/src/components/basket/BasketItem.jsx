import './BasketItem.css';
import ProductPrice from "../product/ProductPrice";
import ActionButton, {ACTION_TYPE} from "../general/ActionButton";

export default function BasketItem({name, type, value, onRemove}) {
    return (
        <li className="basket-item">
            <ActionButton type={ACTION_TYPE.REMOVE} action={onRemove}/>
            <span className="basket-item-name">{name}</span>&nbsp;
            <span className="basket-item-type">({type})</span> -&nbsp;
            <ProductPrice price={value}/>
        </li>
    );
};
