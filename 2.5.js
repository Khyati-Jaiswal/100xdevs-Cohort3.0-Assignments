function calcTime (n){
    const t0 = performance.now();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const t1 = performance.now();

    return (t1 - t0)/1000;
}

console.log(calcTime(100));
console.log(calcTime(100000));
console.log(calcTime(10000000));