import {useState} from "react";
import {loadInfo, loadLogo} from "../../services/configService";

export function Header() {
    const [logo] = useState(loadLogo());
    const [info] = useState(loadInfo());

    return (
        <div>
            <img src={logo.image} alt={logo.alternative}/>
            <h1>{info.title}</h1>
            <h2>{info.subtitle}</h2>
        </div>
    );
}