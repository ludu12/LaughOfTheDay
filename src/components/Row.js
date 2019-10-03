import React from 'react';
import PropTypes from 'prop-types';
import { Img } from './Img';

export const Row = (props) => {
    const { configRow, handleClick } = props;

    return (
        <div className='Row'>
            <Img handleClick={() => handleClick(configRow[0].value)} imgPath={configRow[0].path}/>
            <Img handleClick={() => handleClick(configRow[1].value)} imgPath={configRow[1].path}/>
            <Img handleClick={() => handleClick(configRow[2].value)} imgPath={configRow[2].path}/>
        </div>
    );
};

Row.propTypes = {
    configRow: PropTypes.array,
    handleClick: PropTypes.func
};