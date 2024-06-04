import './ProductPrice.css';
import {formatMoney} from "../../util/utils";

export default function ProductPrice({price, asNote}) {
    return <span className="price-symbol">
        {asNote ? "(" : ""}
        £ <span className="price-value">{formatMoney(price)}</span>
        {asNote ? ")" : ""}
    </span>;
}