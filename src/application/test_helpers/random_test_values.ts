export const aNumber = () => {
    return 1000 * Math.random();
};

export const anInteger = () => {
    return Math.floor(aNumber());
};
