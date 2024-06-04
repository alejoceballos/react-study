import './ProductDescription.css';

export default function ProductDescription({text}) {
    const value = text || " . . . ";
    return <p className="product-description">{value}</p>;
}