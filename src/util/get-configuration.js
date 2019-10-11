export const getConfiguration = (picture) => {
    const configuration = [];

    for (let j = 1; j <= 9; j++) {
        configuration.push({ value: j, path: process.env.REACT_APP_BASE_URL + picture + '/' + j + '.png' });
    }
    return configuration;
};

export const getLoadingConfiguration = () => {
    const configuration = [];

    for (let j = 1; j <= 9; j++) {
        configuration.push({ value: j, path: 'loading...' });
    }
    return configuration;
};
