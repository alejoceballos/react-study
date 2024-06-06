import './Price.css';
import {formatMoney} from "../../util/utils";

export default function Price({price, asNote, size}) {
    const cssSize = size && size.toUpperCase() ===  "L" ? " price-size-l": "";

    return <span className={"price-symbol " + cssSize}>
        {asNote ? "(" : ""}
        £ <span className={"price-value " + cssSize}>{formatMoney(price)}</span>
        {asNote ? ")" : ""}
    </span>;
}