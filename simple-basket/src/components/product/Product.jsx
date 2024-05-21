export default function Product({name, description, inBasket, onAdd: add, onRemove: remove}) {
    const click = inBasket ? remove : add;
    const buttonLabel = inBasket ? "Remove" : "Add";

    return (
        <div className="product">
            <h3>{name}</h3>
            <p>{description}</p>
            <button onClick={click}>{buttonLabel}</button>
        </div>
    );
}