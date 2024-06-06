import './ProductDescription.css';

export default function ProductDescription({text}) {
    const value = text || " . . . ";
    return <div className="tooltip">
        <span className="product-description">{value}</span><span className="tooltiptext">{value}</span>
    </div>;
}