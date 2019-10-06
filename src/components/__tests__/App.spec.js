import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { App } from '../App';
import '@testing-library/jest-dom/extend-expect';

describe('App component', () => {

    afterEach(() => {
        cleanup();
    });

    it('should render "Puzzle It" header', () => {
        const { getByText } = render(<App/>);

        expect(getByText('Puzzle It')).toBeInTheDocument();
    });
});

