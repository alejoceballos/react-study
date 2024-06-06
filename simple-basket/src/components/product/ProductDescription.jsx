import './ProductDescription.css';

export default function ProductDescription({text}) {
    return <div className="product-description">{text || " . . . "}</div>
}