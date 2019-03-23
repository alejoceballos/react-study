import React, {Component} from 'react';
import './App.css';
import Person from './Family/Parent';
import Child from './Family/Child';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person pAttr="whatever">
                    <Child cAttr="whoever"/>
                </Person>
            </div>
        );
    }
}

export default App;
