import React from 'react';
import './App.css';
import { Img } from './Img';

function Row(props) {
    return (
        <div className='row' style={{ height: '200px' }}>
            <Img handleClick={() => props.handleClick(props.configRow[0].value)} imgPath={props.configRow[0].path}/>
            <Img handleClick={() => props.handleClick(props.configRow[1].value)} imgPath={props.configRow[1].path}/>
            <Img handleClick={() => props.handleClick(props.configRow[2].value)} imgPath={props.configRow[2].path}/>
        </div>
    );
}

function getConfiguration(picture) {
    const configuration = [];
    const s3Path = 'https://photo-puzzle-picture.s3.amazonaws.com/';

    for (let j = 1; j <= 9; j++) {
        configuration.push({ value: j, path: s3Path + picture + '/' + j + '.png' });
    }
    return configuration;
}

class App extends React.Component {

    constructor(props) {
        super(props);

        const picture = 'numbers';

        this.state = {
            pictures: ['butterfly', 'numbers'],
            active: null,
            picture: picture,
            configuration: getConfiguration(picture),
        };

    }

    swapActiveImageWithSelectedImage(imgVal) {
        if (this.state.active === null) {
            const config = this.state.configuration.slice();

            this.setState({
                configuration: config,
                active: imgVal,
            });
        } else {
            const config = this.state.configuration.slice();

            const indexOfSelectedImg = this.getConfigLocal(imgVal);
            const indexOfActiveImg = this.getConfigLocal(this.state.active);

            const pathOfSelectedImg = config[indexOfSelectedImg].path;
            const pathOfActiveImg = config[indexOfActiveImg].path;

            config[indexOfSelectedImg].path = pathOfActiveImg;
            config[indexOfActiveImg].path = pathOfSelectedImg;

            this.setState({
                configuration: config,
                active: null,
            });
        }
    }

    getConfigLocal(imgVal) {
        return this.state.configuration.findIndex((x) => x.value === imgVal);
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            picture: value,
            configuration: getConfiguration(value),
        });
    }

    render() {
        const options = this.state.pictures.map(pic => {
            return (
                <option value={pic}>{pic}</option>
            );
        });

        return (
            <html>
                <header className='App-header'>
                    <h1>Puzzle It</h1>
                </header>
                <body>
                    <div>
                        <select defaultValue={this.state.selectedPicture} onChange={this.handleChange.bind(this)}>
                            {options}
                        </select>
                    </div>
                    <div className='center'>
                        <div className='container' style={{ display: 'inline-block' }}>
                            <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)}
                                configRow={this.state.configuration.slice(0, 3)}/>
                            <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)}
                                configRow={this.state.configuration.slice(3, 6)}/>
                            <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)}
                                configRow={this.state.configuration.slice(6, 9)}/>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

export default App;
