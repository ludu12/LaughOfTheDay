import React from 'react';
import { Puzzle } from './Puzzle';

const options = [
    { value: 'numbers', label: 'Numbers' },
    { value: 'butterfly', label: 'Butterfly' }
];

export const App = () => {
    const [picture, setPicture] = React.useState(options[0].value);
    const [pictureList, setPictureList] = React.useState([]);

    const handleSelect = (e) => {
        setPicture(e.target.value);
    };

    React.useEffect(()=> {
        fetch('https://ld5whwmgo8.execute-api.ca-central-1.amazonaws.com/prod/getPhoto')
        .then(res => res.json())
        .then((data) => {
          console.log('Got a response')
          const picturesArray = data.Items.map(function(photo){return photo.Name})
          setPictureList(picturesArray)
        })
        .catch(console.log)
    })

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
