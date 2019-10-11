import React from 'react';
import PropTypes from 'prop-types';
import { Row } from './Row';

function getConfiguration(picture) {
    const configuration = [];
    const s3Path = process.env.REACT_APP_BASE_URL;

    for (let j = 1; j <= 9; j++) {
        configuration.push({ value: j, path: s3Path + picture + '/' + j + '.png' });
    }
    return configuration;
}

export class Puzzle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: null,
            configuration: getConfiguration(props.picture),
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.picture) {
            this.setState({
                configuration: getConfiguration(nextProps.picture)
            });
        }
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

    render() {
        return (
            <div className='Puzzle'>
                <Row handleClick={this.swapActiveImageWithSelectedImage.bind(this)}
                     configRow={this.state.configuration.slice(0, 3)}/>
                <Row handleClick={this.swapActiveImageWithSelectedImage.bind(this)}
                     configRow={this.state.configuration.slice(3, 6)}/>
                <Row handleClick={this.swapActiveImageWithSelectedImage.bind(this)}
                     configRow={this.state.configuration.slice(6, 9)}/>
            </div>
        );
    }
}

Puzzle.propTypes = {
    picture: PropTypes.string
};
