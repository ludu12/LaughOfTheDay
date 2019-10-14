import React from 'react';
import { Puzzle } from './Puzzle';
import axios from 'axios';
const LAMBDA_URL = 'https://ld5whwmgo8.execute-api.ca-central-1.amazonaws.com/prod/getPhoto';

export const App = () => {
    const [picture, setPicture] = React.useState(null);
    const [pictureList, setPictureList] = React.useState([]);

    const handleSelect = (e) => {
        setPicture(e.target.value);
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(LAMBDA_URL);
            const pictureArray = response.data.Items.map((photo) => photo.Name);

            setPictureList(pictureArray);
            setPicture(pictureArray[0]);
        };

        fetchData();

        // setPictureList(['numbers', 'butterfly']);
        // setPicture('numbers');
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
