import React from 'react';
import { Puzzle } from './Puzzle';

export const App = () => {
    const [picture, setPicture] = React.useState(null);
    const [pictureList, setPictureList] = React.useState([]);

    const handleSelect = (e) => {
        setPicture(e.target.value);
    };

    React.useEffect(() => {
        const fetchData = async () => {
            setPictureList(['numbers', 'butterfly']);
            setPicture('numbers');
        };

        fetchData();
    }, []);

    return (
        <div className='App'>
            <div className='App-header'>
                <h1>Puzzle It</h1>
                <select defaultValue={picture} onChange={handleSelect}>
                    {pictureList.map(o => (<option key={o} value={o}>{o}</option>))}
                </select>
            </div>
            {picture && <Puzzle picture={picture}/>}
        </div>
    );
};
