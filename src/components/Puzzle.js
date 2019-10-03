import React from 'react';
import PropTypes from 'prop-types';
import {Row} from './Row';

const S3_PATH = 'https://photo-puzzle-picture.s3.amazonaws.com/';

export const Puzzle = (props) => {
    const [active, setActive] = React.useState(null);
    const [configuration, setConfiguration] = React.useState(null);

    React.useEffect(() => {
        const config = [];

        for (let j = 1; j <= 9; j++) {
            config.push({value: j, path: S3_PATH + props.picture + '/' + j + '.png'});
        }
        setConfiguration(config);
    }, [props.picture]);

    const swapActiveImageWithSelectedImage = (imgVal) => {
        if (active === null) {
            setActive(imgVal);
        } else {
            const config = configuration.slice();

            const indexOfSelectedImg = config.findIndex((x) => x.value === imgVal);
            const indexOfActiveImg = config.findIndex((x) => x.value === active);

            const pathOfSelectedImg = config[indexOfSelectedImg].path;

            config[indexOfSelectedImg].path = config[indexOfActiveImg].path;
            config[indexOfActiveImg].path = pathOfSelectedImg;

            setConfiguration(config);
            setActive(null);
        }
    };

    if (!configuration) {
        return <h1>LOADING...</h1>;
    }

    return (
        <div className='Puzzle'>
            <Row handleClick={(imgVal) => swapActiveImageWithSelectedImage(imgVal)}
                 configRow={configuration.slice(0, 3)}/>
            <Row handleClick={(imgVal) => swapActiveImageWithSelectedImage(imgVal)}
                 configRow={configuration.slice(3, 6)}/>
            <Row handleClick={(imgVal) => swapActiveImageWithSelectedImage(imgVal)}
                 configRow={configuration.slice(6, 9)}/>
        </div>
    );
};

Puzzle.propTypes = {
    picture: PropTypes.string
}
