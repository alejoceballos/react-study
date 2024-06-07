import './PanelTitle.css';

export default function PanelTitle({children, "data-testid": dataTestId}) {
    return <h1 data-testid={dataTestId} className="panel-title">{children}</h1>
}