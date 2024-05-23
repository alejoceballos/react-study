import './Header.css';
import {useEffect, useState} from "react";
import {loadInfo, loadLogo} from "../../services/configService";

const Image = ({source}) => {
    if (source) {
        return <img src={source} alt="Logo"/>;
    }

    return <img src="/logo192.png" alt="Loading..."/>;
}

export default function Header() {
    const [imageSource, setImageSource] = useState();
    const [info, setInfo] = useState({
        title: 'Loading...',
        subTitle: 'Loading...',
        description: 'Loading...'
    });

    useEffect(() => {
        loadLogo().then(source => setImageSource(source));
        loadInfo().then(info => setInfo(info));
    }, []);

    return (
        <>
            <div className="header">
                <Image source={imageSource}/>
                <h1>{info.title}</h1>
                <h2>{info.subTitle}</h2>
            </div>
            <h3>{info.description}</h3>
        </>
    );
}