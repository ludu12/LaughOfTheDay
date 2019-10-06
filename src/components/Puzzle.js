import React from 'react';
import PropTypes from 'prop-types';
import { Row } from './Row';

function getConfiguration(picture) {
    const configuration = [];
    const s3Path = 'https://photo-puzzle-picture.s3.amazonaws.com/';

    for (let j = 1; j <= 9; j++) {
        configuration.push({ value: j, path: s3Path + picture + '/' + j + '.png' });
    }
    return configuration;
}

export class Puzzle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: ['numbers', 'butterfly'],
            active: null,
            picture: props.picture,
            configuration: getConfiguration(props.picture),
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
        const { value } = e.target;

        this.setState({
            picture: value,
            configuration: getConfiguration(value),
        });
    }

    render() {
        const options = this.state.pictures.map(pic => {
            return (
                <option key={pic} value={pic}>{pic}</option>
            );
        });

        return (
            <div>
                <div>
                    <select defaultValue={this.state.selectedPicture} onChange={this.handleChange.bind(this)}>
                        {options}
                    </select>
                </div>
                <div className='Puzzle'>
                    <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)}
                        configRow={this.state.configuration.slice(0, 3)}/>
                    <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)}
                        configRow={this.state.configuration.slice(3, 6)}/>
                    <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)}
                        configRow={this.state.configuration.slice(6, 9)}/>
                </div>
            </div>
        );
    }
}

Puzzle.propTypes = {
    picture: PropTypes.string
};
