console.log(parseInt('', 10));
const id = parseInt('a', 10);

if (typeof id !== 'number' || id < 1 || isNaN(id)) {
    console.log('idは数値で1以上が条件です');
} else {
    console.log(typeof NaN);
}