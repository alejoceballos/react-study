import React from 'react';

export default (props) => {
    const { firstName, lastName } = props;
    return (
        <div>
            <span>Name: {firstName} {lastName}</span>
        </div>
    )
}
