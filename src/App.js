import React, {Component} from 'react';
import './App.css';
import List from './List/List';
import AddItem from './List/AddItem';

class App extends Component {
    state = {
        list: [
            { firstName: "Cicrano", lastName: "de Araujo"},
            { firstName: "Beltrano", lastName: "de Albuquerque"},
            { firstName: "Fulano", lastName: "da Silva"},
        ]
    };

    onAddItem = (firstName, lastName) => {
        const list = this.state.list;
        list.push({firstName, lastName});
        this.setState(list)
    };

    render() {
        return (
            <div className="App">
                <AddItem onAddItem={this.onAddItem}/>
                <List list={this.state.list}/>
            </div>
        );
    }
}

export default App;
