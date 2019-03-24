import React from 'react';
import ListItem from './ListItem';

export default (props) => {
    const { list } = props;
    const listItems = list.map(item => <ListItem firstName={item.firstName} lastName={item.lastName}/>);

    return (
        <div>
            {listItems}
        </div>
    )
}
