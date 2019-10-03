import React from 'react';
import { Puzzle } from './Puzzle';

export const App = () => {
    const [picture, setPicture] = React.useState('numbers');

    return(
        <div className="App">
            <div className="App-header">
                <h1>Puzzle It</h1>
            </div>
            <Puzzle picture={picture}/>
        </div>
    );
};