import React from 'react';

const parent = (props) => {
    return (
        <div>
            <p>What? {props.pAttr}. {props.children}</p>
        </div>
    )
};

export default parent;
