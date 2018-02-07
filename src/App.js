import React, {Component} from 'react';
import './App.css';
import Cube from './Cube';

//the tutorial: about three-render
// https://www.youtube.com/watch?v=eRMhOpdaKE8

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>
                    Here is a rotating cube!
                </p>
                <Cube width = {800} height = {600}/>
            </div>
        );
    }
}

export default App;
