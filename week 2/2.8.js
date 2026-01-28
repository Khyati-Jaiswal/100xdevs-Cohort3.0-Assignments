const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents :', data);
});

function expOps() {
    let sum = 0;
    for (let i = 0; i <= 1e8; i++) {
        sum += i;
    }
    console.log('Expensive operation result:', sum); 
}

expOps();