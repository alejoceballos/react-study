export default function BasketItem({name, type, onRemove}) {
    return (
        <li>
            <div>{name}</div>
            <div>{type}</div>
            <button onClick={onRemove}>Remove</button>
        </li>
    );
}
