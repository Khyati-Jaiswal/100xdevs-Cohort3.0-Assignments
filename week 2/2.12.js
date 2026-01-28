function wait(n) {
    return new Promise(function (resolve){
        setTimeout(resolve, n*1000);
    });
}

wait(2).then(() => {
    console.log("2 secs have passed");
});