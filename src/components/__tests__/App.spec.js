import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { App } from '../App';
import '@testing-library/jest-dom/extend-expect';
import { getByText } from '@testing-library/dom';

describe('App component', () => {
    let container;

    beforeEach(() => {
        container = render(<App/>).container;
    });

    afterEach(() => {
        cleanup();
    });

    it('should render "Puzzle It" header', () => {
        expect(getByText(container, 'Puzzle It')).toBeInTheDocument();
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

