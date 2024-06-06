import './Product.css';
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import ActionButton, {ACTION_TYPE} from "../general/ActionButton";

export default function Product({name, description, cost, inBasket, onAdd: add, onRemove: remove}) {
    const click = inBasket ? remove : add;
    const buttonType = inBasket ? ACTION_TYPE.REMOVE : ACTION_TYPE.ADD;

    return (
        <div className="product-card">
            <h3 className="product-title">{name} <ProductPrice price={cost} asNote={true}/></h3>
            <ProductDescription text={description}/>
            <ActionButton type={buttonType} action={click} />
        </div>
    );
}