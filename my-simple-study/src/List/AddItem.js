import React from 'react';

export default (props) => {
    const { onAddItem } = props;

    let firstName = "";
    let lastName = "";

    const onFirstNameChanged = (event) => {
        firstName = event.target.value;
    };

    const onLastNameChanged = (event) => {
        lastName = event.target.value;
    };

    const addItem = () => {
        onAddItem(firstName, lastName);
    };

    return (
        <div>
            First Name <input type="text" onChange={onFirstNameChanged} />,
            Last Name <input type="text" onChange={onLastNameChanged} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}
