export const getOptionValues = (obj) => {
    const arr = [];
    for (let i in obj) {
        arr.push(i);
    }
    return arr;
}