import React from 'react';


export const Img = (props) => {
    const {imgPath, handleClick} = props;
    return (
        <div className='img'>
            <img onClick={handleClick} style={{height: '200px', width: '200px'}} src={imgPath}/>
        </div>
    );
}