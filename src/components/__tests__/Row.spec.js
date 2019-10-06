import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Row } from '../Row';

describe('Row component', () => {
    let container, handleClickStub, configRow;

    beforeEach(() => {
        handleClickStub = jest.fn();
        configRow = [
            { value: 'value1', path: 'http://custom.path1/' },
            { value: 'value2', path: 'http://custom.path2/' },
            { value: 'value3', path: 'http://custom.path3/' }
        ];

        container = render(<Row handleClick={handleClickStub} configRow={configRow}/>).container;
    });

    afterEach(() => {
        cleanup();
    });

    it('should render list of three images', () => {
        const imgList = container.querySelectorAll('img');

        expect(imgList).toHaveLength(3);

        expect(imgList[0].src).toEqual(configRow[0].path);
        expect(imgList[1].src).toEqual(configRow[1].path);
        expect(imgList[2].src).toEqual(configRow[2].path);

    });

    it('should handle Img click by passing in config value', () => {
        const imgList = container.querySelectorAll('img');

        fireEvent.click(imgList[0]);
        fireEvent.click(imgList[1]);
        fireEvent.click(imgList[2]);

        expect(handleClickStub).toHaveBeenNthCalledWith(1, configRow[0].value);
        expect(handleClickStub).toHaveBeenNthCalledWith(2, configRow[1].value);
        expect(handleClickStub).toHaveBeenNthCalledWith(3, configRow[2].value);
    });
});