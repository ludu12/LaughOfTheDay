import React from 'react';
import { Img } from '../Img';
import { cleanup, fireEvent, render } from '@testing-library/react';

describe('Img component', () => {

    afterEach(() => {
        cleanup();
    });

    it('should handle img click', () => {
        const handleClickStub = jest.fn();
        const imgPath = 'http://custom.imgpath/';
        const { container } = render(<Img handleClick={handleClickStub} imgPath={imgPath}/>);
        const imgElem = container.querySelector('img');

        expect(imgElem.src).toEqual(imgPath);
        fireEvent.click(imgElem);
        expect(handleClickStub).toBeCalled();
    });
});

