export const S3_URL = 'https://photo-puzzle-picture.s3.amazonaws.com/';

export const getConfiguration = (picture) => {
    const configuration = [];

    for (let j = 1; j <= 9; j++) {
        configuration.push({ value: j, path: S3_URL + picture + '/' + j + '.png' });
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
