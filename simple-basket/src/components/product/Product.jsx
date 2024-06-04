import './Product.css';
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";

export default function Product({name, description, cost, inBasket, onAdd: add, onRemove: remove}) {
    const click = inBasket ? remove : add;
    const buttonLabel = inBasket ? 'Remove' : 'Add';

    return (
        <div className="product-card">
            <h3 className="product-title">{name} <ProductPrice price={cost} asNote={true}/></h3>
            <ProductDescription text={description}/>
            <button onClick={click}>{buttonLabel}</button>
        </div>
    );
}