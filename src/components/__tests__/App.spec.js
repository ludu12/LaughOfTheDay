import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { App } from '../App';
import '@testing-library/jest-dom/extend-expect';
import { getByText } from '@testing-library/dom';
import axios from 'axios';

jest.mock('axios');

describe('App component', () => {
    let container, puzzleList;

    beforeEach(async () => {
        puzzleList = ['numbers', 'butterfly'];
        axios.get.mockImplementation(() => Promise.resolve({
            status: 200,
            data: { Items: [{ Name: puzzleList[0] }, { Name: puzzleList[1] }] }
        }));
        await act(async () => {
            container = render(<App/>).container;
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('should render "Puzzle It" header', () => {
        expect(getByText(container, 'Puzzle It')).toBeInTheDocument();
    });

    it('should fetch list of puzzle names', () => {
        expect(axios.get).toHaveBeenCalled();
    });

    describe('when picture is changed to butterfly', () => {
        let newPuzzleName;

        beforeEach(() => {
            newPuzzleName = 'butterfly';
            fireEvent.change(container.querySelector('select'), { target: { value: newPuzzleName } });
        });

        it('should render with new picture name', () => {
            const imgList = container.querySelectorAll('img');

            expect(container.querySelector('select').value).toEqual(newPuzzleName);
            expect(imgList).toHaveLength(9);
            imgList.forEach((img) => {
                expect(img.src).toMatch(newPuzzleName);
            });
        });
    });
});

