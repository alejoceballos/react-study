import './Tooltip.css';

export default function Tooltip({text, children}) {
    const tooltip = text ? <span className="tooltiptext">{text}</span> : undefined;
    return <div className="tooltip">
        {children}{tooltip}
    </div>;
}