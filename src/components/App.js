import React from 'react';
import { Puzzle } from './Puzzle';

const options = [
    { value: 'numbers', label: 'Numbers' },
    { value: 'butterfly', label: 'Butterfly' }
];

export const App = () => {
    const [picture, setPicture] = React.useState(options[0].value);

    const handleSelect = (e) => {
        setPicture(e.target.value);
    };

    return (
        <div className='App'>
            <div className='App-header'>
                <h1>Puzzle It</h1>
                <select defaultValue={picture} onChange={handleSelect}>
                    {options.map(o => (<option key={o.value} value={o.value}>{o.label}</option>))}
                </select>
            </div>
            <Puzzle picture={picture}/>
        </div>
    );
};
