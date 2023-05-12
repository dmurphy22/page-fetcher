const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];


const download = (url, filePath) => {
  request(url, { encoding: null }, (error, response, body) => {
    if (error) {
      console.error('Error downloading the file:', error);
      return;
    }
    
    const byteCount = body.length;

    fs.writeFile(filePath, body, err => {
      if (err) {
        console.error('Error saving the file:', err);
      } else {
        console.log(`Downloaded and saved ${byteCount} bytes to ${filePath}`);
      }
    });
  });
};