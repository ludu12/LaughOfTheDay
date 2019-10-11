import React from 'react';
import PropTypes from 'prop-types';
import { Row } from './Row';
import { shuffleArray } from '../util/shuffle';
import { getConfiguration, getLoadingConfiguration } from '../util/get-configuration';

export const Puzzle = (props) => {
    const [active, setActive] = React.useState(null);
    const [configuration, setConfiguration] = React.useState(getLoadingConfiguration());

    React.useEffect(() => {
        setConfiguration(shuffleArray(getConfiguration(props.picture)));
    }, [props.picture]);

    const swapActiveImageWithSelectedImage = (imgVal) => {
        if (active === null) {
            setActive(imgVal);
        } else {
            const config = configuration.slice();

            const indexOfSelectedImg = config.findIndex((x) => x.value === imgVal);
            const indexOfActiveImg = config.findIndex((x) => x.value === active);

            const pathOfSelectedImg = config[indexOfSelectedImg].path;
            const pathOfActiveImg = config[indexOfActiveImg].path;

            config[indexOfSelectedImg].path = pathOfActiveImg;
            config[indexOfActiveImg].path = pathOfSelectedImg;

            setConfiguration(config);
            setActive(null);
        }
    };

    return (
        <div className='Puzzle'>
            <Row handleClick={swapActiveImageWithSelectedImage}
                 configRow={configuration.slice(0, 3)}/>
            <Row handleClick={swapActiveImageWithSelectedImage}
                 configRow={configuration.slice(3, 6)}/>
            <Row handleClick={swapActiveImageWithSelectedImage}
                 configRow={configuration.slice(6, 9)}/>
        </div>
    );
};

Puzzle.propTypes = {
    picture: PropTypes.string
};
