import "./BasketTotal.css";
import { sumMoney } from '../../util/utils';
import Price from "../general/Price";

export default function({basket}) {
    const total = basket.reduce((total, product) => sumMoney(total, product.monthlyCost), 0);

    return <div className="basket-total">
        <span className="price-label">Monthly cost: <Price price={total} size="L"/> </span>
    </div>
}