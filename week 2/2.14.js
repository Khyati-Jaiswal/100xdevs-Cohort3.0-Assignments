const { resolve } = require("path");

function wait1(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t*1000);
    });
}

function wait2(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t*1000);
    });
}

function wait3(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t*1000);
    });
}
/*
function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return Promise.all([
        wait1(t1),
        wait2(t2),
        wait3(t3)
    ]).then(() => {
        const end=Date.now();
        return end-start;
    });
}
*/

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  
  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const end = Date.now();
      return end - start; // total time in milliseconds
    });
}

calculateTime(2,2,1).then(time => {
    console.log(`All completed in ${time} ms`);
})