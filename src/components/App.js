import React from 'react';
import { Puzzle } from './Puzzle';

//
export const App = () => {
    const [picture, setPicture] = React.useState(null);
    const [pictureList, setPictureList] = React.useState([]);

    const handleSelect = (e) => {
        setPicture(e.target.value);
    };

    React.useEffect(() => {
        // TODO: Put this code in slides
        const fetchData = async () => {
            const response = await axios.get('https://ld5whwmgo8.execute-api.ca-central-1.amazonaws.com/prod/getPhoto');

            setPictureList(response.data.Items.map((photo) => photo.Name));
            setPicture(pictureList[0]);
        };

        fetchData();
        setPictureList(['numbers', 'butterfly']);
    }, []);

    // TODO: add loading something

    return (
        <div className='App'>
            <div className='App-header'>
                <h1>Puzzle It</h1>
                <select defaultValue={picture} onChange={handleSelect}>
                    {pictureList.map(o => (<option key={o} value={o}>{o}</option>))}
                </select>
            </div>
            <Puzzle picture={picture}/>
        </div>
    );
};
