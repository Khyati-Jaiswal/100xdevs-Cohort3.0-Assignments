const { readFile } = require('fs');
const fs = require('fs/promises');

async function writeAndReadFile(filename, content) {
    try {
        await fs.writeFile(filename, content, 'utf8');
        console.log('File written successfully.');
        const data = await fs.readFile(filename, 'utf-8');
        console.log('File contents :', data);
    }
    catch (err) {
        console.error('Error:', err);
    }
}

writeAndReadFile('example.txt', 'Hello, World!');