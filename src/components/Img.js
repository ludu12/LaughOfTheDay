import React from 'react';
import PropTypes from 'prop-types';

export const Img = (props) => {
    const { imgPath, handleClick } = props;

    return (
        <div className='Img'>
            <img onClick={() => handleClick()} src={imgPath} alt={imgPath}/>
        </div>
    );
};

Img.propTypes = {
    imgPath: PropTypes.string,
    handleClick: PropTypes.func
};
