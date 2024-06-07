import './Header.css';
import {useEffect, useState} from "react";
import {loadInfo, loadLogo} from "../../services/configService";

export default function Header() {
    const [imageSource, setImageSource] = useState();
    const [info, setInfo] = useState({
        title: 'Loading...',
        subTitle: 'Loading...',
        description: 'Loading...'
    });

    const Image = ({source}) => {
        const data = source
            ? { src: source, alt: "Logo"}
            : { src: "/logo192.png", alt: "Loading..."};

        return <img data-testid="header-logo" src={data.src} alt={data.alt}/>;
    }

    useEffect(() => {
        loadLogo().then(source => setImageSource(source));
        loadInfo().then(info => setInfo(info));
    }, []);

    return (
        <>
            <div data-testid="header" className="header">
                <Image source={imageSource}/>
                <h1 data-testid="header-title">{info.title}</h1>
                <h2 data-testid="header-subtitle">{info.subTitle}</h2>
            </div>
            <h3 data-testid="header-description" className="header">{info.description}</h3>
        </>
    );
}