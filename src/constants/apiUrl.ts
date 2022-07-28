export const apiURL = (() => {
    if (process.env.NODE_ENV === 'production') {
        return 'https://ghibli-be.herokuapp.com/';
    }

    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:8080/';
    }

    return 'http://localhost:8080/';
})();