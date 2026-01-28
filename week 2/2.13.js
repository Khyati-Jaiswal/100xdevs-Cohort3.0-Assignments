function sleep (milliseconds) {
    return new Promise((resolve) => {
        const start = Date.now();
        while(Date.now() - start < milliseconds) {

        }
        resolve();
    });
}

console.log("before");
sleep(5000).then(() => {
    console.log("After 5 secs of blocking");
});