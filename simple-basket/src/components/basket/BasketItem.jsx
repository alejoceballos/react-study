import './BasketItem.css';
import Price from "../general/Price";
import ActionButton, {ACTION_TYPE} from "../general/ActionButton";

export default function BasketItem({name, type, value, onRemove}) {
    return (
        <li className="basket-item">
            <ActionButton type={ACTION_TYPE.REMOVE} action={onRemove}/>
            <span className="basket-item-name">{name}</span>&nbsp;
            <span className="basket-item-type">({type})</span> -&nbsp;
            <Price price={value}/>
        </li>
    );
};
