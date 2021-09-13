export const getOptionValues = (obj) => {
    const arr = [];
    for (let i in obj) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
}