import './Product.css';
import ProductDescription from "./ProductDescription";
import Price from "../general/Price";
import ActionButton, {ACTION_TYPE} from "../general/ActionButton";
import Tooltip from "../general/Tooltip";

export default function Product({name, description, cost, inBasket, onAdd: add, onRemove: remove}) {
    const click = inBasket ? remove : add;
    const buttonType = inBasket ? ACTION_TYPE.REMOVE : ACTION_TYPE.ADD;

    return (
        <div className="product-card">
            <Tooltip text={name + (description ? ": " + description : "")}>
                <h3 className="product-title">{name} <Price price={cost} asNote={true}/></h3>
                <ProductDescription text={description}/>
            </Tooltip>
            <div>
                <ActionButton type={buttonType} action={click} />
            </div>
        </div>
    );
}