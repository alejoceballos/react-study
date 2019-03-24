import React from 'react';

export default (props) => {
    const { firstName, lastName, index, onRemoveItem } = props;

    const removeItem = () => {
        onRemoveItem(index)
    };

    return (
        <div>
            <span>Name: {firstName} {lastName} <button onClick={removeItem}>-</button></span>
        </div>
    )
}
