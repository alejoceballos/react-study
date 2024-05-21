import React from 'react';
import ListItem from './ListItem';

export default (props) => {
    const { list, onRemoveItem } = props;
    const listItems = list.map(
        (item, idx) =>
            <ListItem
                key={idx}
                index={idx}
                firstName={item.firstName}
                lastName={item.lastName}
                onRemoveItem={onRemoveItem}
            />
    );

    return (
        <div>
            {listItems}
        </div>
    )
}
