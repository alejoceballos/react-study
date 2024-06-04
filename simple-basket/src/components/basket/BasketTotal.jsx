import { sumMoney, formatMoney } from '../../util/utils';

export default function({basket}) {
    if (!basket || basket.length === 0) {
        return <div></div>
    }

    const total = basket.reduce((total, product) => sumMoney(total, product.monthlyCost), 0);

    return <div>
        <span>Monthly cost:</span> £ <span>{formatMoney(total)}</span>
    </div>
}